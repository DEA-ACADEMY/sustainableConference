import { MessageCircle } from 'lucide-react';
import { contact } from '../config/contact.js';
import { useI18n } from '../i18n/useI18n.js';

export function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a className="floating-whatsapp" href={contact.socials.whatsapp} target="_blank" rel="noreferrer" aria-label={t('contact.whatsapp')}>
      <MessageCircle size={24} aria-hidden="true" />
    </a>
  );
}
