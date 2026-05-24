import { HeroSection } from '../components/HeroSection.jsx';
import { PartnersSection } from '../components/PartnersSection.jsx';
import { ProgramCards } from '../components/ProgramCards.jsx';
import { RegistrationSection } from '../components/RegistrationSection.jsx';
import { SpeakersSection } from '../components/SpeakersSection.jsx';
import { StatsStrip } from '../components/StatsStrip.jsx';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ProgramCards />
      <SpeakersSection />
        <PartnersSection />
        <RegistrationSection />
    </>
  );
}
