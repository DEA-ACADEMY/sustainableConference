import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { speakers } from '../data/speakers.js';
import { useI18n } from '../i18n/useI18n.js';

export function SpeakersSection() {
  const { dir, language, t } = useI18n();
  const featuredSpeakers = speakers.slice(0, 5);
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="section" id="speakers">
      <div className="section__header section__header--inline speakers-heading">
        <h2>{t('speakers.title')}</h2>
        <Link to="/speakers">
          {t('speakers.viewAll')} <ArrowIcon size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="speaker-carousel">
        {featuredSpeakers.map((speaker) => (
          <Link className="speaker-card" to={`/speakers/${speaker.slug}`} key={speaker.slug}>
            <div className="speaker-card__image" style={speaker.image ? { '--speaker-image': `url("${speaker.image}")` } : undefined} aria-hidden="true" />
            <div className="speaker-card__caption">
              <h3>{language === 'en' ? speaker.nameEn : speaker.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
