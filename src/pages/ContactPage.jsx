import { Camera, Mail, MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { contact } from '../config/contact.js';
import { useI18n } from '../i18n/useI18n.js';
import { PageHeader } from './PageHeader.jsx';

function FacebookGlyph() {
  return <span className="brand-glyph brand-glyph--large" aria-hidden="true">f</span>;
}

export function ContactPage() {
  const { language, t } = useI18n();
  const channels = [
    { href: `tel:${contact.phoneHref}`, icon: Phone, label: t('footer.call'), value: contact.phoneDisplay },
    { href: `mailto:${contact.email}`, icon: Mail, label: t('footer.email'), value: contact.email },
    { href: contact.socials.whatsapp, icon: MessageCircle, label: t('contact.whatsapp'), value: contact.phoneDisplay },
  ];
  const socials = [
    { href: contact.socials.instagram, icon: Camera, label: 'Instagram', value: '@conference03' },
    { href: contact.socials.x, icon: X, label: 'X', value: '@conference03' },
    { href: contact.socials.facebook, icon: FacebookGlyph, label: 'Facebook', value: language === 'en' ? 'Sustainable Leadership Conference' : 'مؤتمر القيادة المستدامة' },
  ];

  return (
    <>
      <PageHeader pageKey="contact" />
      <section className="page-section contact-layout">
        <article className="contact-panel">
          <span>{t('contact.kicker')}</span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>

          <div className="contact-channel-list">
            {channels.map((item) => {
              const Icon = item.icon;

              return (
                <a className="contact-channel" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} key={item.label}>
                  <Icon size={22} aria-hidden="true" />
                  <span>
                    <strong>{item.label}</strong>
                    <small>{item.value}</small>
                  </span>
                </a>
              );
            })}
          </div>
        </article>

        <aside className="contact-side">
          <div className="contact-location">
            <MapPin size={24} aria-hidden="true" />
            <span>{t('contact.location')}</span>
            <strong>{language === 'en' ? contact.location.en : contact.location.ar}</strong>
          </div>

          <div className="contact-social-module">
            <span>{t('footer.follow')}</span>
            <div>
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} key={item.label}>
                    <Icon size={22} aria-hidden="true" />
                    <small>{item.value}</small>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=Istanbul%2C%20Turkey&output=embed"
              title={t('contact.mapTitle')}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </>
  );
}
