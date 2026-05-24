import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n.js';

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section className="page-section not-found">
      <span>404</span>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.subtitle')}</p>
      <Link className="button button--primary" to="/">
        {t('notFound.action')}
      </Link>
    </section>
  );
}
