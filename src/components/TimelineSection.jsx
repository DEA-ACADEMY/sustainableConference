import { ChartNoAxesColumnIncreasing, MessageCircle, Sparkles, Sprout, UsersRound } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const icons = [Sparkles, ChartNoAxesColumnIncreasing, Sprout, UsersRound, MessageCircle];

export function TimelineSection() {
  const { t } = useI18n();
  const items = t('timeline.items');

  return (
    <section className="section timeline-section">
      <div className="section__header section__header--inline">
        <h2>{t('timeline.title')}</h2>
        <a href="#programs">{t('timeline.viewFull')}</a>
      </div>

      <div className="timeline">
        {items.map((item, index) => {
          const Icon = icons[index] || Sparkles;

          return (
            <article className="timeline__item" key={`${item.time}-${item.title}`}>
              <span className="timeline__time">{item.time}</span>
              <span className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <h3>{item.title}</h3>
                <Icon size={20} aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
