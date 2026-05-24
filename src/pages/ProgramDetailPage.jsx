import { Link, useParams } from 'react-router-dom';
import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { useI18n } from '../i18n/useI18n.js';
import { NotFoundPage } from './NotFoundPage.jsx';
import { PageHeader } from './PageHeader.jsx';

export function ProgramDetailPage() {
  const { programId } = useParams();
  const { t } = useI18n();
  const programs = t('programCatalog.items');
  const program = programs.find((item) => item.slug === programId);

  if (!program) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHeader pageKey="programs" />
      <section className="program-detail">
        <div className="program-detail__image" style={program.image ? { '--program-image': `url("${program.image}")` } : undefined} aria-hidden="true" />
        <article>
          <span>{t('programCatalog.more')}</span>
          <h1>{program.title}</h1>
          <p>{program.description}</p>
          {program.details?.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
          {program.slug === 'fifth-conference-2026' && (
            <Link className="button button--primary" to="/registration">
              {t('hero.primaryAction')}
            </Link>
          )}
        </article>
      </section>
      {program.slug === 'fifth-conference-2026' && <ConferenceBanner />}
    </>
  );
}
