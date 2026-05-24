import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { ConferencePage } from './pages/ConferencePage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ProgramsPage } from './pages/ProgramsPage.jsx';
import { ProgramDetailPage } from './pages/ProgramDetailPage.jsx';
import { RegistrationPage } from './pages/RegistrationPage.jsx';
import { SpeakerDetailPage } from './pages/SpeakerDetailPage.jsx';
import { SpeakersPage } from './pages/SpeakersPage.jsx';

export function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main" aria-label="Main content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:programId" element={<ProgramDetailPage />} />
          <Route path="/conference" element={<ConferencePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/speakers/:speakerId" element={<SpeakerDetailPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
