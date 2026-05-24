import { BarChart3, BriefcaseBusiness, CalendarDays, ClipboardCheck, Clock3, MapPin, Target } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

const facts = [
  { icon: CalendarDays, key: 'date' },
  { icon: Clock3, key: 'duration' },
  { icon: MapPin, key: 'location' },
];

const topicIcons = [BriefcaseBusiness, ClipboardCheck, Target, BarChart3];

export function ConferenceOverview() {
  const { t } = useI18n();
  const topics = t('conference.topics');

  return (
    <section className="conference-layout">
      <div className="conference-facts">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <article key={fact.key}>
              <strong>{t(`conference.${fact.key}`)}</strong>
              <Icon size={34} aria-hidden="true" />
            </article>
          );
        })}
      </div>

      <article className="conference-about">
        <div className="conference-photo" aria-hidden="true" />
        <div>
          <h2>{t('conference.aboutTitle')}</h2>
          <p>{t('conference.aboutText')}</p>
        </div>
      </article>

      <div className="section__header">
        <h2>{t('conference.topicsTitle')}</h2>
      </div>
      <div className="topic-grid">
        {topics.map((topic, index) => {
          const TopicIcon = topicIcons[index] || Target;

          return (
            <article className="topic-card" key={`${topic}-${index}`}>
              <TopicIcon size={54} aria-hidden="true" />
              <h3>{topic}</h3>
            </article>
          );
        })}
      </div>

      <article className="why-attend">
        <h2>{t('conference.whyTitle')}</h2>
        <p>{t('conference.whyText')}</p>
        <p>{t('conference.whyText')}</p>
      </article>
    </section>
  );
}
