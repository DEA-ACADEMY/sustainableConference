import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { InitiativesSection } from '../components/InitiativesSection.jsx';
import { ProgramCatalog } from '../components/ProgramCatalog.jsx';
import { PageHeader } from './PageHeader.jsx';

export function ProgramsPage() {
  return (
    <>
      <PageHeader pageKey="programs" />
      <ProgramCatalog />
      <InitiativesSection />
      <ConferenceBanner />
    </>
  );
}
