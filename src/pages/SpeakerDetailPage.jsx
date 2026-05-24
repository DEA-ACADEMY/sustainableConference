import { useParams } from 'react-router-dom';
import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { SpeakerProfile } from '../components/SpeakerProfile.jsx';
import { speakers } from '../data/speakers.js';
import { NotFoundPage } from './NotFoundPage.jsx';
import { PageHeader } from './PageHeader.jsx';

export function SpeakerDetailPage() {
  const { speakerId } = useParams();
  const speaker = speakers.find((item) => item.slug === speakerId);

  if (!speaker) {
    return <NotFoundPage />;
  }

  return (
    <>
      <PageHeader pageKey="speakers" />
      <SpeakerProfile />
      <ConferenceBanner />
    </>
  );
}
