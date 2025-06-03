import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CompanyPage from './Pages/CompanyPage';
import QualityPage from './Pages/QualityPage';
import NewsPage from './Pages/NewsPage';
import CareersPage from './Pages/CareersPage';

import WhatWeDoPage from './Pages/WhatWeDoPage';
import SparesPage from './Pages/SparesPage';
import ServicesPage from './Pages/ServicesPage';
import SolutionsPage from './Pages/SolutionsPage';
import LogisticsAndDeliveryPage from './Pages/LogisticsAndDelivery';

import PlatformsPage from './Pages/PlatformsPage';
import CivilPage from './Pages/Civil';
import MilitaryPage from './Pages/Military';
import MissionTrainerAndPatrolPage from './Pages/MissionTrainerAndPatrol';
import HelicopterPage from './Pages/Helicopters';

import OEMPartnersPage from './Pages/OEMPartnersPage';
import TradeShowsPage from './Pages/TradeShowsPage';
import ContactPage from './Pages/ContactPage';
import ESGCommitment from './Pages/ESGCommitment';

import TermsAndConditions from './Pages/TermsAndConditions';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RequestAQuote from './Pages/RequestAQuote';

function App() {
  return (
    <Router>
  <NavBar />
  <Routes>
    {/* Home */}
    <Route path="/" element={<HomePage />} />

    {/* ABOUT */}
    <Route path="/about" element={<AboutPage />} />
    <Route path="/about/company" element={<CompanyPage />} />
    <Route path="/about/quality" element={<QualityPage />} />
    <Route path="/about/news" element={<NewsPage />} />
    <Route path="/about/careers" element={<CareersPage />} />

    {/* WHAT WE DO */}
    <Route path="/what-we-do" element={<WhatWeDoPage />} />
    <Route path="/what-we-do/spares" element={<SparesPage />} />
    <Route path="/what-we-do/services" element={<ServicesPage />} />
    <Route path="/what-we-do/solutions" element={<SolutionsPage />} />
    <Route path="/what-we-do/logistics-and-delivery" element={<LogisticsAndDeliveryPage />} />

    {/* PLATFORMS */}
    <Route path="/platforms" element={<PlatformsPage />} />
    <Route path="/platforms/civil" element={<CivilPage />} />
    <Route path="/platforms/military" element={<MilitaryPage />} />
    <Route path="/platforms/mission-trainer-and-patrol" element={<MissionTrainerAndPatrolPage />} />
    <Route path="/platforms/helicopters" element={<HelicopterPage />} />
    
    
    {/* OTHER ROUTES */}
    <Route path="/partners" element={<OEMPartnersPage />} />
    <Route path="/trade-shows" element={<TradeShowsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/ESG-Commitment" element={<ESGCommitment />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/request-a-quote" element={<RequestAQuote />} />
  </Routes>
</Router>

  );
}

export default App;
