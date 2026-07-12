// scripts/fetch-notes.cjs
// つなぐProject の note RSS を取得し、site/notes.json を生成する。
// .github/workflows/note-feed.yml から毎朝（JST 6時）実行される。外部依存なし（Node 20+ の組み込み fetch + CommonJS require のみ）。
// ※ Node専用スクリプト。ブラウザ／DSバンドルには一切含まれない。
//
// 対象フィードは つなぐProject のみ。別アカウント（にゃりん）は混在させないこと。

const FEED = 'https://note.com/tsunagu_proj181/rss';
const OUT = 'notes.json'; // リポジトリのルート（index.html と同じ階層）に出力
const LIMIT = 6; // 予備を含めて保持。ページ側は先頭3本を表示。

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const stripTags = (s) => decode(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const pick = (block, tag) => {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return m ? decode(m[1]).trim() : '';
};

async function main() {
  const { writeFile, mkdir } = require('node:fs/promises');
  const { dirname } = require('node:path');

  const res = await fetch(FEED, { headers: { 'User-Agent': 'tsunagu-feed-bot/1.0' } });
  if (!res.ok) throw new Error('RSS fetch failed: ' + res.status);
  const xml = await res.text();

  const blocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, LIMIT);

  const articles = blocks.map((m, i) => {
    const b = m[1];
    const title = pick(b, 'title');
    const link = pick(b, 'link');
    const pub = pick(b, 'pubDate');
    const date = pub && !isNaN(Date.parse(pub)) ? new Date(pub).toISOString().slice(0, 10) : '';

    // note のRSSは <media:thumbnail>URL</media:thumbnail>（タグの中身＝テキスト）でサムネイルを持つ。
    // 念のため url="..." 属性形式・<enclosure url="..."> もフォールバックで拾う。
    const thumb = (
      (b.match(/<media:thumbnail[^>]*>([\s\S]*?)<\/media:thumbnail>/i) || [])[1] ||
      (b.match(/<media:thumbnail[^>]*\burl="([^"]+)"/i) || [])[1] ||
      (b.match(/<enclosure[^>]*\burl="([^"]+)"/i) || [])[1] ||
      ''
    ).trim();

    const rawExcerpt = stripTags(pick(b, 'description'));
    const excerpt = rawExcerpt.length > 80 ? rawExcerpt.slice(0, 80) + '…' : rawExcerpt;

    const cat = pick(b, 'category');

    return {
      id: 'n' + i,
      title,
      excerpt,
      url: link,
      date,
      tag: cat || 'note',
      image: thumb,
      readingMin: null,
    };
  });

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(articles, null, 2) + '\n');
  console.log(`Wrote ${OUT} with ${articles.length} article(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
