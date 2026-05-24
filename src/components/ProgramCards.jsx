import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

export function ProgramCards() {
  const { dir, t } = useI18n();
  const items = t('programs.items');
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="section programs-overview" id="programs">
      <div className="section__header">
        <h2>{t('programs.title')}</h2>
      </div>

      <div className="program-grid">
        {items.map((item, index) => {
          return (
            <article className="program-card" key={item.title}>
              <div className="program-card__copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="program-card__media" style={item.image ? { '--program-image': `url("${item.image}")` } : undefined} aria-hidden="true" />
              <Link className="round-link" to={item.href} aria-label={item.title}>
                <ArrowIcon size={20} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
