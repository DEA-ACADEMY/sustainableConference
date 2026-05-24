import { AboutSections } from '../components/AboutSections.jsx';
import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { InstituteSections } from '../components/InstituteSections.jsx';
import { PageHeader } from './PageHeader.jsx';

export function AboutPage() {
  return (
    <>
      <PageHeader pageKey="about" />
      <AboutSections />
      <InstituteSections />
      <ConferenceBanner />
    </>
  );
}
