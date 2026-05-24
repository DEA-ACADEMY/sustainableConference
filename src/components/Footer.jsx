import { Camera, Mail, MessageCircle, Phone, Send, X } from 'lucide-react';
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
        <a className="footer__link" href="tel:+90534848757">
          <Phone size={18} aria-hidden="true" />
          +90534848757
        </a>
      </div>

      <div>
        <h2>{t('footer.contact')}</h2>
        <a className="footer__link" href="mailto:hello@gmail.com">
          <Send size={18} aria-hidden="true" />
          hello@gmail.com
        </a>
      </div>

      <div>
        <h2>{t('footer.follow')}</h2>
        <div className="footer__socials">
          <a href="#contact" aria-label="X">
            <X size={22} aria-hidden="true" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=905375504311" aria-label="Whatsapp">
            <MessageCircle size={22} aria-hidden="true" />
          </a>
          <a href="#contact" aria-label="Instagram">
            <Camera size={22} aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="footer__copy">{t('footer.copy')}</p>
    </footer>
  );
}
