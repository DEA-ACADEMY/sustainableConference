import heroImage from '../assets/hero.png';
import { useI18n } from '../i18n/useI18n.js';

export function PageHeader({ pageKey }) {
  const { t } = useI18n();

  return (
    <section className="page-hero" style={{ '--hero-image': `url(${heroImage})` }}>
      <h1>{t(`pages.${pageKey}.title`)}</h1>
      <span>{t(`pages.${pageKey}.subtitle`)}</span>
    </section>
  );
}
