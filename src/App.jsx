import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import DisclosurePage from './pages/DisclosurePage';
import ClientLoginPage from './pages/ClientLoginPage';
import AdvisorLoginPage from './pages/AdvisorLoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/disclosure" element={<DisclosurePage />} />
        <Route path="/login/client" element={<ClientLoginPage />} />
        <Route path="/login/advisor" element={<AdvisorLoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}