import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { SpeakerProfile } from '../components/SpeakerProfile.jsx';
import { PageHeader } from './PageHeader.jsx';

export function SpeakerDetailPage() {
  return (
    <>
      <PageHeader pageKey="speakers" />
      <SpeakerProfile />
      <ConferenceBanner />
    </>
  );
}
