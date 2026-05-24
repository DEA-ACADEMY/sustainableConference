import { Crown } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';

export function PartnersSection() {
  const { t } = useI18n();
  const partners = t('partners.items');

  return (
    <section className="section partners" aria-label={t('partners.title')}>
      <div className="section__header">
        <h2>{t('partners.title')}</h2>
      </div>

      <div className="partners__grid">
        {partners.map((partner, index) => (
          <article className="partner-logo" key={`${partner}-${index}`}>
            <Crown size={48} aria-hidden="true" />
            <span>{partner}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
