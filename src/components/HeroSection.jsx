import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import { useI18n } from '../i18n/useI18n.js';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="hero" id="home" style={{ '--hero-image': `url(${heroImage})` }}>
      <div className="hero__content">
        <p className="hero__eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <div className="hero__actions">
          <Link className="button button--primary" to="/registration">
            {t('hero.primaryAction')}
          </Link>
          <Link className="button button--secondary" to="/programs">
            {t('hero.secondaryAction')}
          </Link>
        </div>
      </div>
    </section>
  );
}
