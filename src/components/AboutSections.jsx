import { Goal, Lightbulb, Target } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const icons = [Lightbulb, Target, Lightbulb, Target, Lightbulb];

export function AboutSections() {
  const { t } = useI18n();
  const cards = t('pages.about.cards');
  const values = t('pages.about.values');
  const goals = t('pages.about.goals');

  return (
    <section className="about-layout">
      <article className="about-intro">
        <div className="about-photo" aria-hidden="true" />
        <div>
          <h2>{cards[0].title}</h2>
          <p>{cards[0].description}</p>
        </div>
      </article>

      {cards.slice(1, 3).map((card, index) => {
        const Icon = index === 0 ? Lightbulb : Target;

        return (
          <article className="about-feature" key={card.title}>
            <div className="about-feature__icon">
              <Icon size={54} aria-hidden="true" />
            </div>
            <div>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </article>
        );
      })}

      <div className="section__header">
        <h2>{t('pages.about.valuesTitle')}</h2>
      </div>
      <div className="value-strip">
        {values.map((value, index) => {
          const Icon = icons[index] || Lightbulb;

          return (
            <article className="value-card" key={`${value.title}-${index}`}>
              <Icon size={48} aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          );
        })}
      </div>

      <div className="section__header">
        <h2>{t('pages.about.goalsTitle')}</h2>
      </div>
      <div className="goal-grid">
        {goals.map((goal, index) => (
          <article className="goal-card" key={`${goal}-${index}`}>
            <Goal size={42} aria-hidden="true" />
            <p>{goal}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
