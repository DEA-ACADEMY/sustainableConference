import { Camera, MessageCircle, Phone, Send, X } from 'lucide-react';
import { contact } from '../config/contact.js';
import { useI18n } from '../i18n/useI18n.js';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer" id="contact">
      <div className="footer__brand">
        <strong>{t('brand.name')}</strong>
        <span>{t('brand.subtitle')}</span>
      </div>

      <div>
        <h2>{t('footer.call')}</h2>
        <a className="footer__link" href={`tel:${contact.phoneHref}`}>
          <Phone size={18} aria-hidden="true" />
          {contact.phoneDisplay}
        </a>
      </div>

      <div>
        <h2>{t('footer.contact')}</h2>
        <a className="footer__link" href={`mailto:${contact.email}`}>
          <Send size={18} aria-hidden="true" />
          {contact.email}
        </a>
      </div>

      <div>
        <h2>{t('footer.follow')}</h2>
        <div className="footer__socials">
          <a href={contact.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Camera size={22} aria-hidden="true" />
          </a>
          <a href={contact.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="Whatsapp">
            <MessageCircle size={22} aria-hidden="true" />
          </a>
          <a href={contact.socials.x} target="_blank" rel="noreferrer" aria-label="X">
            <X size={22} aria-hidden="true" />
          </a>
          <a href={contact.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <span className="brand-glyph" aria-hidden="true">f</span>
          </a>
        </div>
      </div>

      <p className="footer__copy">{t('footer.copy')}</p>
    </footer>
  );
}
