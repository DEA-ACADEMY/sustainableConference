import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { SpeakerDirectory } from '../components/SpeakerDirectory.jsx';
import { PageHeader } from './PageHeader.jsx';

export function SpeakersPage() {
  return (
    <>
      <PageHeader pageKey="speakers" />
      <SpeakerDirectory />
      <ConferenceBanner />
    </>
  );
}
