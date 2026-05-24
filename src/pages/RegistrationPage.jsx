import { RegistrationSection } from '../components/RegistrationSection.jsx';
import { PageHeader } from './PageHeader.jsx';

export function RegistrationPage() {
  return (
    <>
      <PageHeader pageKey="registration" />
      <RegistrationSection />
    </>
  );
}
