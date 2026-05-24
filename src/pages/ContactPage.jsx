import { Mail, Phone, Send } from 'lucide-react';
import { useI18n } from '../i18n/useI18n.js';
import { PageHeader } from './PageHeader.jsx';

export function ContactPage() {
  const { t } = useI18n();
  const items = [
    { icon: Phone, label: t('footer.call'), value: '+90534848757' },
    { icon: Mail, label: t('footer.email'), value: 'hello@gmail.com' },
    { icon: Send, label: t('footer.follow'), value: 'AR | EN' },
  ];

  return (
    <>
      <PageHeader pageKey="contact" />
      <section className="page-section">
        <div className="minimal-grid minimal-grid--three">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article className="minimal-card minimal-card--center" key={item.label}>
                <Icon size={28} aria-hidden="true" />
                <h2>{item.label}</h2>
                <p>{item.value}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
