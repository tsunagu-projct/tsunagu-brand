// Marketing UI kit — components factored small
// Expects React + lucide loaded globally

const Mark = ({ size = 28, accent = false }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none">
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <circle cx="14" cy="44" r="5" fill={accent ? "#d96b2c" : "currentColor"} stroke="none" />
      <circle cx="50" cy="20" r="5" />
      <path d="M14 44 C 26 44, 38 20, 50 20" strokeWidth="2" />
    </g>
  </svg>
);

const Header = ({ scrolled }) => (
  <header className={`mk-header ${scrolled ? "scrolled" : ""}`}>
    <a href="#" className="brand" style={{textDecoration:"none"}}>
      <Mark size={28} accent />
      <b>つなぐ Project</b>
      <span>· Tsunagu</span>
    </a>
    <nav className="mk-nav">
      <a href="#about">About</a>
      <a href="#work">伴走</a>
      <a href="#notes">Notes</a>
      <a href="#contact">Contact</a>
      <span className="mk-lang"><b>JP</b> · EN</span>
    </nav>
  </header>
);

const Hero = () => (
  <section className="mk-hero">
    <div className="mk-hero-bg" aria-hidden>
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <g stroke="#d96b2c" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round">
          <path d="M-50 720 C 200 620, 400 820, 700 670 S 1200 520, 1700 620"/>
          <path d="M-50 540 C 250 440, 500 620, 800 500 S 1300 360, 1700 460"/>
        </g>
        <g fill="#0e1730" opacity="0.6">
          <circle cx="180" cy="700" r="3"/>
          <circle cx="520" cy="580" r="3"/>
          <circle cx="860" cy="470" r="3"/>
          <circle cx="1200" cy="560" r="3"/>
        </g>
        <g fill="#d96b2c" opacity="0.85">
          <circle cx="700" cy="540" r="4"/>
          <circle cx="1380" cy="380" r="4"/>
        </g>
      </svg>
    </div>
    <div className="mk-hero-inner">
      <span className="eyebrow">伴走者として · A companion-mentor</span>
      <h1>違いを、<em>力に。</em><br/>明日の暮らしを、つなぐ。</h1>
      <p className="sub">A near-60 PM from finance IT, working with multinational teams — using AI, travel, and companionship to help you build a more interesting tomorrow.</p>
      <div className="cta-row">
        <a className="btn btn-primary" href="#contact">はじめる <span className="arrow">→</span></a>
        <a className="btn btn-ghost" href="#about">About the project</a>
      </div>
    </div>
  </section>
);

const Bridge = () => (
  <section className="mk-section" id="about">
    <span className="eyebrow">The bridge · 橋</span>
    <h2>あなたの「今」と「これから」を、つなぐ。</h2>
    <p className="lead">Most plans live in two halves: the careful present, and the unwritten next. The work of tsunagu is the thread between them.</p>
    <div className="mk-bridge">
      <div className="pane">
        <div className="label">Today · 今</div>
        <h3>キャリアの棚卸し</h3>
        <p>20年以上のスキル、関係、経験。何を持っていて、何を手放すかを見つめ直します。</p>
      </div>
      <div className="thread" aria-hidden>
        <svg viewBox="0 0 80 60">
          <path d="M0 30 C 20 30, 30 5, 40 5 S 60 55, 80 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="0" cy="30" r="3" fill="currentColor"/>
          <circle cx="80" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="pane">
        <div className="label">Tomorrow · 明日</div>
        <h3>次の一歩を、伴走</h3>
        <p>退職後の起業、副業、海外移住、AI活用。具体的な選択肢を、現場感覚で一緒に組み立てます。</p>
      </div>
    </div>
  </section>
);

const Practice = () => {
  const items = [
    { num: "01", icon: "compass", jp: "ライフプラン設計", en: "Life-plan design — career inflection points, finances, location." },
    { num: "02", icon: "bot",     jp: "AIを、道具にする", en: "AI as a daily tool — from prompt habits to small workflow wins." },
    { num: "03", icon: "globe",   jp: "多国籍チーム運営", en: "Multinational team practice — turning difference into momentum." },
  ];
  return (
    <section className="mk-section dark" id="work">
      <div className="inner">
        <span className="eyebrow">三つの伴走 · Three practices</span>
        <h2>具体は小さく、視野は広く。</h2>
        <p className="lead">No grand frameworks. Just the next concrete step, taken alongside someone who has navigated the curve before.</p>
        <div className="mk-grid3">
          {items.map((it) => (
            <div className="mk-tile" key={it.num}>
              <div className="num">{it.num} / 03</div>
              <i data-lucide={it.icon} className="icon"></i>
              <h4>{it.jp}</h4>
              <p>{it.en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Notes = () => {
  const posts = [
    { tag: "AI活用", title: "AIに任せる三つ、握る三つ", time: "5 min · 2026.04" },
    { tag: "ライフプラン", title: "還暦の前に整える、お金と時間の地図", time: "8 min · 2026.03" },
    { tag: "旅", title: "違いを愉しむ。バンコクで学んだチーム術", time: "6 min · 2026.02" },
  ];
  return (
    <section className="mk-section" id="notes">
      <span className="eyebrow">伴走ノート · Notes</span>
      <h2>noteで、考えていること。</h2>
      <div className="mk-grid3">
        {posts.map((p, i) => (
          <a key={i} className="mk-tile" href="#" style={{textDecoration:"none"}}>
            <span className="num">{p.tag}</span>
            <h4>{p.title}</h4>
            <p style={{marginTop:"auto", color:"var(--fg-3)", fontFamily:"var(--font-mono)", fontSize:12}}>{p.time}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="mk-footer" id="contact">
    <div className="inner">
      <div>
        <div style={{display:"flex", alignItems:"center", gap:10, color:"var(--ink-900)"}}>
          <Mark size={28} accent />
          <b style={{fontFamily:"var(--font-display-jp)", fontSize:18, fontWeight:900}}>つなぐ Project</b>
        </div>
        <p className="meta" style={{marginTop:14, maxWidth:320}}>何かと何かを繋げて、幸せを届ける活動を。Built quietly, for the long way.</p>
      </div>
      <div>
        <h5>Practice</h5>
        <ul><li><a href="#">ライフプラン</a></li><li><a href="#">AI活用</a></li><li><a href="#">伴走</a></li></ul>
      </div>
      <div>
        <h5>Read</h5>
        <ul><li><a href="https://note.com/tsunagu_proj181">note</a></li><li><a href="#">Newsletter</a></li><li><a href="#">Talks</a></li></ul>
      </div>
      <div>
        <h5>Connect</h5>
        <ul><li><a href="#">Email</a></li><li><a href="#">X</a></li><li><a href="#">LinkedIn</a></li></ul>
      </div>
    </div>
    <div className="mk-footer-bottom">
      <span>© 2026 TSUNAGU PROJECT</span>
      <span>JP · EN</span>
    </div>
  </footer>
);

Object.assign(window, { Mark, Header, Hero, Bridge, Practice, Notes, Footer });
