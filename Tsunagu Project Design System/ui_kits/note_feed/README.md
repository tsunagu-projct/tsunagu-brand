# Note Feed — 最新note記事カード

つなぐProjectのnote記事をサイトに表示するためのコンポーネント群。

## 構成
- `note-feed.css` — レイアウトとカードスタイル（design tokens にフック）
- `NoteFeed.jsx` — Section / Card / Row / Editorial レンダリング
- `demo-data.js` — プレビュー用のダミー記事 6 件
- `index.html` — 3 バリアント切り替え + Tweaks

## バリアント
1. **Cards** — サムネ付き、3 カラム（推奨）
2. **List** — テキストのみ、密度高め
3. **Editorial** — 大1 + 小2 のヒーロー型

## 本番化のステップ
RSS（`https://note.com/tsunagu_proj181/rss`）を fetch → `{id,title,excerpt,url,date,tag,image,readingMin}` 形に正規化して `<NoteFeed.Section articles={...} />` に渡す。

CORS の壁がある場合：
- 軽い対応: `api.rss2json.com` 等の無料プロキシ
- 中規模: Cloudflare Workers で 1 ファイル自前プロキシ
- 安定: GitHub Actions で 1 日 1 回 RSS → JSON に静的化してリポジトリにコミット
