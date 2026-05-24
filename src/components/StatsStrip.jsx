import { Building2, Clock3, Globe2, Landmark, UsersRound } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const icons = [Building2, Clock3, Globe2, Landmark, UsersRound];

export function StatsStrip() {
  const { t } = useI18n();
  const items = t('stats.items');

  return (
    <section className="stats-strip" aria-label={t('stats.label')}>
      {items.map((item, index) => {
        const Icon = icons[index] || Landmark;

        return (
          <article className="stat-item" key={item.label}>
            <Icon size={34} aria-hidden="true" />
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
