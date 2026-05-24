import { MonitorCheck, Network, Route, UsersRound } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const icons = [Route, UsersRound, Network, MonitorCheck];

export function InitiativesSection() {
  const { t } = useI18n();
  const initiatives = t('initiatives.items');

  return (
    <section className="section initiatives-section">
      <div className="section__header">
        <h2>{t('initiatives.title')}</h2>
      </div>

      <div className="initiative-grid">
        {initiatives.map((initiative, index) => {
          const Icon = icons[index] || Route;

          return (
            <article className="initiative-card" key={initiative.title}>
              <Icon size={34} aria-hidden="true" />
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
