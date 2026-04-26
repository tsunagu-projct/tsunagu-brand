// Note-style article reader components

const ReaderHeader = () => (
  <header className="nr-header">
    <div className="left">
      <a className="brand" href="#"><svg viewBox="0 0 64 64" width="22" height="22" fill="none"><g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"><circle cx="14" cy="44" r="5" fill="#d96b2c" stroke="none"/><circle cx="50" cy="20" r="5"/><path d="M14 44 C 26 44, 38 20, 50 20" strokeWidth="2.4"/></g></svg><b>つなぐ Project</b></a>
      <a className="nav-link" href="#">記事</a>
      <a className="nav-link" href="#">マガジン</a>
      <a className="nav-link" href="#">About</a>
    </div>
    <div className="right">
      <div className="nr-search"><i data-lucide="search" style={{width:14,height:14}}></i>記事を探す</div>
      <div className="nr-avatar">T</div>
    </div>
  </header>
);

const Cover = () => (
  <div className="nr-cover">
    <img src="../../assets/cover-sea.jpeg" alt="" />
  </div>
);

const Divider = () => (
  <div className="nr-divider">
    <svg viewBox="0 0 800 80" fill="none">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" fill="none">
        <circle cx="40" cy="40" r="3" fill="currentColor" stroke="none"/>
        <path d="M40 40 C 120 10, 200 70, 280 40"/>
        <circle cx="280" cy="40" r="3" fill="none"/>
        <path d="M280 40 C 360 70, 440 10, 520 40"/>
        <circle cx="520" cy="40" r="3" fill="currentColor" stroke="none"/>
        <path d="M520 40 C 600 10, 680 70, 760 40"/>
        <circle cx="760" cy="40" r="3" fill="none"/>
      </g>
    </svg>
  </div>
);

const Pill = ({ icon, children, active, onClick }) => (
  <button className={`nr-pill ${active ? "active" : ""}`} onClick={onClick}>
    {icon && <i data-lucide={icon}></i>}{children}
  </button>
);

const Byline = ({ liked, onLike, saved, onSave }) => (
  <div className="nr-byline">
    <div className="avatar">T</div>
    <div className="who">つなぐ project<small>2026.04.18 · 5 min read</small></div>
    <div className="actions">
      <Pill icon="heart" active={liked} onClick={onLike}>{liked ? "ありがとう" : "スキ"}</Pill>
      <Pill icon="bookmark" active={saved} onClick={onSave}>{saved ? "保存済み" : "保存"}</Pill>
    </div>
  </div>
);

const ArticleBody = () => (
  <div className="nr-body">
    <p className="lead">「<em>つなぐ</em>」は、人と人、過去と未来、自分と世界。橋を架けるのは、技術ではなく、姿勢のほうだ。</p>
    <p>金融ITで20年、多国籍チームのなかで仕事をしてきた。英語、日本語、ヒンディー語まじりの会議室で、いちばん効いたのは、いつも「相手と自分の違いを、力に変える」という視点だった。</p>
    <h2>三つの問い</h2>
    <p>キャリアの棚卸しをするとき、私はクライアントに三つの問いをする。難しい言葉は使わない。ただ、紙とペンで30分だけ向き合う。</p>
    <ul>
      <li>あなたが今、誰と一緒にいる時間が、いちばん満ちていますか？</li>
      <li>10年後、振り返って「やってよかった」と言いたい一日はどんな日ですか？</li>
      <li>その日のために、明日できる、いちばん小さな一歩はなんですか？</li>
    </ul>
    <blockquote>違いは、距離ではなく、橋の長さである。</blockquote>
    <p>AIは、この問いに答えてくれない。でも、答えを書きとめ、整え、明日まで持ち越す手伝いはしてくれる。道具は、あくまで道具。握るのは、いつもあなた自身だ。</p>
  </div>
);

const Related = () => (
  <div className="nr-related">
    <h3>関連する記事</h3>
    <div className="nr-related-grid">
      <a className="nr-rel-card" href="#"><div className="t">AIに任せる三つ、握る三つ</div><div className="m">2026.04 · 5 min</div></a>
      <a className="nr-rel-card" href="#"><div className="t">還暦の前に整える、お金と時間の地図</div><div className="m">2026.03 · 8 min</div></a>
    </div>
  </div>
);

Object.assign(window, { ReaderHeader, Cover, Divider, Byline, ArticleBody, Related, Pill });
