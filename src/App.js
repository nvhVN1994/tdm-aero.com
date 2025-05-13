import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CompanyPage from './Pages/CompanyPage';
import LeadershipPage from './Pages/LeadershipPage';
import QualityPage from './Pages/QualityPage';
import NewsPage from './Pages/NewsPage';
import CareersPage from './Pages/CareersPage';

import WhatWeDoPage from './Pages/WhatWeDoPage';
import SparesPage from './Pages/SparesPage';
import ServicesPage from './Pages/ServicesPage';
import SolutionsPage from './Pages/SolutionsPage';

import PlatformsPage from './Pages/PlatformsPage';
import FighterPage from './Pages/FighterPage';
import TransportPage from './Pages/TransportPage';
import PatrolPage from './Pages/PatrolPage';
import RotorcraftPage from './Pages/RotorcraftPage';

import OEMPartnersPage from './Pages/OEMPartnersPage';
import TradeShowsPage from './Pages/TradeShowsPage';
import ContactPage from './Pages/ContactPage';
import FeedbackPage from './Pages/FeedbackPage';
import PortalPage from './Pages/PortalPage';

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
    <Route path="/about/leadership" element={<LeadershipPage />} />
    <Route path="/about/quality" element={<QualityPage />} />
    <Route path="/about/news" element={<NewsPage />} />
    <Route path="/about/careers" element={<CareersPage />} />

    {/* WHAT WE DO */}
    <Route path="/what-we-do" element={<WhatWeDoPage />} />
    <Route path="/what-we-do/spares" element={<SparesPage />} />
    <Route path="/what-we-do/services" element={<ServicesPage />} />
    <Route path="/what-we-do/solutions" element={<SolutionsPage />} />

    {/* PLATFORMS */}
    <Route path="/platforms" element={<PlatformsPage />} />
    <Route path="/platforms/fighter" element={<FighterPage />} />
    <Route path="/platforms/transport" element={<TransportPage />} />
    <Route path="/platforms/patrol" element={<PatrolPage />} />
    <Route path="/platforms/rotorcraft" element={<RotorcraftPage />} />

    {/* OTHER ROUTES */}
    <Route path="/oem-partners" element={<OEMPartnersPage />} />
    <Route path="/trade-shows" element={<TradeShowsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/contact/feedback" element={<FeedbackPage />} />
    <Route path="/portal" element={<PortalPage />} />
  </Routes>
</Router>

  );
}

export default App;
