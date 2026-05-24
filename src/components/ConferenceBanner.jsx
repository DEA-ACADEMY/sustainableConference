import heroImage from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

export function ConferenceBanner() {
  const { t } = useI18n();

  return (
    <section className="conference-banner" style={{ '--hero-image': `url(${heroImage})` }}>
      <div>
        <h2>{t('impact.title')}</h2>
        <p>{t('impact.subtitle')}</p>
      </div>
      <Link className="button button--primary" to="/registration">
        {t('impact.action')}
      </Link>
    </section>
  );
}
