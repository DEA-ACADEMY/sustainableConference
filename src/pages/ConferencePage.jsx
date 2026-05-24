import { ConferenceBanner } from '../components/ConferenceBanner.jsx';
import { ConferenceOverview } from '../components/ConferenceOverview.jsx';
import { TimelineSection } from '../components/TimelineSection.jsx';
import { PageHeader } from './PageHeader.jsx';

export function ConferencePage() {
  return (
    <>
      <PageHeader pageKey="conference" />
      <ConferenceOverview />
      <ConferenceBanner />
      <TimelineSection />
    </>
  );
}
