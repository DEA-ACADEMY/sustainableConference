import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

export function ProgramCatalog() {
  const { t } = useI18n();
  const cards = t('programCatalog.items');

  return (
    <section className="program-catalog">
      {cards.map((card, index) => (
        <article className="catalog-card" key={`${card.title}-${index}`}>
          <div className="catalog-card__image" style={card.image ? { '--program-image': `url("${card.image}")` } : undefined} aria-hidden="true" />
          <div className="catalog-card__body">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Link to={`/programs/${card.slug}`}>{t('programCatalog.more')}</Link>
          </div>
        </article>
      ))}
    </section>
  );
}
