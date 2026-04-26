/* Note Feed — React components for Tsunagu Project
   Renders 3 layout variants from a normalized article shape.
*/

const NoteFeed = (() => {
  const { useEffect } = React;

  // ---------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------
  const formatDate = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  };

  const Icon = ({ name }) => {
    const paths = {
      arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
      external: <><path d="M7 17L17 7" /><path d="M7 7h10v10" /></>,
      doc: <>
        <path d="M14 3v5h5" />
        <path d="M19 8.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5.5z" />
        <path d="M9 13h6M9 17h6" />
      </>,
    };
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    );
  };

  // ---------------------------------------------------------------
  // Section header
  // ---------------------------------------------------------------
  const FeedHeader = ({ eyebrow, title, sub, ctaLabel, ctaHref }) => (
    <div className="nf-head">
      <div className="nf-head__title-wrap">
        {eyebrow && <span className="nf-head__eyebrow">{eyebrow}</span>}
        <h2 className="nf-head__title">{title}</h2>
        {sub && <p className="nf-head__sub">{sub}</p>}
      </div>
      {ctaLabel && (
        <a className="nf-head__cta" href={ctaHref} target="_blank" rel="noreferrer">
          {ctaLabel} <Icon name="external" />
        </a>
      )}
    </div>
  );

  // ---------------------------------------------------------------
  // Card (Variant A)
  // ---------------------------------------------------------------
  const Card = ({ article, lead, side, showThumb = true, showExcerpt = true, readLabel = 'Read' }) => {
    const cls = [
      'nf-card',
      lead && 'nf-card--lead',
      side && 'nf-card--side',
    ].filter(Boolean).join(' ');

    return (
      <a className={cls} href={article.url} target="_blank" rel="noreferrer">
        {showThumb && (
          <div className={`nf-card__thumb ${!article.image ? 'nf-card__thumb--placeholder' : ''}`}>
            {article.image
              ? <img src={article.image} alt="" loading="lazy" />
              : <Icon name="doc" />}
          </div>
        )}
        <div className="nf-card__body">
          <div className="nf-card__meta">
            {article.tag && <span className="nf-card__tag">{article.tag}</span>}
            <span>{formatDate(article.date)}</span>
            {article.readingMin && (
              <>
                <span className="nf-card__meta-dot" />
                <span>{article.readingMin} min read</span>
              </>
            )}
          </div>
          <h3 className="nf-card__title">{article.title}</h3>
          {showExcerpt && article.excerpt && (
            <p className="nf-card__excerpt">{article.excerpt}</p>
          )}
          <div className="nf-card__footer">
            <span className="nf-card__read">
              {readLabel} <Icon name="arrow" />
            </span>
            <span>note.com</span>
          </div>
        </div>
      </a>
    );
  };

  // ---------------------------------------------------------------
  // List row (Variant B)
  // ---------------------------------------------------------------
  const Row = ({ article }) => (
    <a className="nf-row" href={article.url} target="_blank" rel="noreferrer">
      <span className="nf-row__date">{formatDate(article.date)}</span>
      <span className="nf-row__tag">{article.tag || 'note'}</span>
      <h3 className="nf-row__title">{article.title}</h3>
      <span className="nf-row__arrow"><Icon name="arrow" /></span>
    </a>
  );

  // ---------------------------------------------------------------
  // Variant containers
  // ---------------------------------------------------------------
  const VariantCards = ({ articles, count = 3, showThumb, showExcerpt, readLabel }) => {
    const visible = articles.slice(0, count);
    const cols = count >= 3 ? 'nf-grid--cols-3' : 'nf-grid--cols-2';
    return (
      <div className={`nf-grid ${cols}`}>
        {visible.map((a) => (
          <Card key={a.id} article={a} showThumb={showThumb} showExcerpt={showExcerpt} readLabel={readLabel} />
        ))}
      </div>
    );
  };

  const VariantList = ({ articles, count = 5 }) => (
    <div className="nf-grid nf-grid--list">
      {articles.slice(0, count).map((a) => <Row key={a.id} article={a} />)}
    </div>
  );

  const VariantEditorial = ({ articles, showExcerpt, readLabel }) => {
    const [lead, ...rest] = articles;
    const side = rest.slice(0, 2);
    if (!lead) return null;
    return (
      <div className="nf-edit">
        <Card article={lead} lead showExcerpt={showExcerpt} readLabel={readLabel} />
        <div className="nf-edit__side">
          {side.map((a) => (
            <Card key={a.id} article={a} side showExcerpt={false} readLabel={readLabel} />
          ))}
        </div>
      </div>
    );
  };

  // ---------------------------------------------------------------
  // Top-level Section
  // ---------------------------------------------------------------
  const Section = ({
    articles,
    variant = 'cards',     // 'cards' | 'list' | 'editorial'
    count = 3,
    showThumb = true,
    showExcerpt = true,
    eyebrow = 'Latest from note',
    title = '最新の記事',
    sub = '',
    ctaLabel = 'noteで全記事を読む',
    ctaHref = 'https://note.com/tsunagu_proj181',
    readLabel = 'Read',
  }) => (
    <section className="nf-section">
      <div className="nf-container">
        <FeedHeader
          eyebrow={eyebrow}
          title={title}
          sub={sub}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
        />
        {variant === 'cards' && (
          <VariantCards articles={articles} count={count}
            showThumb={showThumb} showExcerpt={showExcerpt} readLabel={readLabel} />
        )}
        {variant === 'list' && (
          <VariantList articles={articles} count={count} />
        )}
        {variant === 'editorial' && (
          <VariantEditorial articles={articles}
            showExcerpt={showExcerpt} readLabel={readLabel} />
        )}
      </div>
    </section>
  );

  return { Section, Card, Row, FeedHeader };
})();

window.NoteFeed = NoteFeed;
