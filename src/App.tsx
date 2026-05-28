import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import RsdtBanner from './components/RsdtBanner';
import ParallaxTransition from './components/ParallaxTransition';
import DualBlocksSection from './components/DualBlocksSection';
import RadarAdvantageSection from './components/RadarAdvantageSection';
import NewsPreview from './components/NewsPreview';
import SpecsStrip from './components/SpecsStrip';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import useSmoothScroll from './hooks/useSmoothScroll';
import ROAS from './pages/ROAS';
import UWB from './pages/UWB';
import MEDICAL from './pages/MedicalSensor';
import BABYSIM from './pages/BabysimInfo';
import MasterSensorUnit from './pages/MasterSensorUnit';
import ABOUTHISTORY from './pages/About_History';
import EMBEDDEDHARD from './pages/EmbeddedHardware';
import US6634 from './pages/US6634';
import LPS from './pages/LowPowerSensor';
import EMBEDDEDSOFT from './pages/EmbeddedSoftware';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import AntennaDesign from './pages/AntennaDesign';
import WhyARadarSensors from './pages/WhyARadarSensors';
import BABYSIMMAIN from './pages/BabysimInfoMain'
import ABOUTOURRADARS from './pages/AboutOurRadars'
import EmbeddedTesting from './pages/EmbeddedTesting';
import NotFound from './pages/NotFound';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import AdminNewsPage from './pages/AdminNewsPage';
import DriverPassengersMonitoring from './pages/DriverPassengersMonitoring';
import IntrusionDetection from './pages/IntrusionDetection';

const pageTitles: Record<string, string> = {
  '/': 'MW-Sensor | Microwave Sensors Development',
  '/about': 'MW-Sensor | About',
  '/roas': 'MW-Sensor | Rear Occupancy Alert Sensor',
  '/master-sensor-unit': 'MW-Sensor | Master Sensor Unit',
  '/unified-sensor-6634': 'MW-Sensor | Unified Sensor 6634',
  '/low-power-sensor': 'MW-Sensor | Low Power Sensor',
  '/medical-sensor': 'MW-Sensor | Medical Sensor',
  '/uwb-sensor': 'MW-Sensor | Ultra-Wide Band Sensor',
  '/babysim': 'MW-Sensor | BabySim',
  '/about-history': 'MW-Sensor | History',
  '/main': 'MW-Sensor | Microwave Sensors Development',
  '/embedded-hardware': 'MW-Sensor | Embedded Hardware',
  '/embedded-software': 'MW-Sensor | Embedded Software',
  '/contact': 'MW-Sensor | Contact Us',
  '/antenna-design': 'MW-Sensor | Antenna Design',
  '/embedded-testing': 'MW-Sensor | Embedded Testing',
  '/semiconductors': 'MW-Sensor | Semiconductors',
  '/news': 'MW-Sensor | News',
  '/admin/news': 'MW-Sensor | News Editor',
  '/why-radars': 'MW-Sensor | Why Radar',
  '/about-our-radars': 'MW-Sensor | About Our Radars',
  '/driver-passengers-monitoring': 'MW-Sensor | Driver & Passangers Monitoring System',
  '/cabin-intrusion': 'MW-Sensor | Intrusion Detection',
  '*' : 'MW-Sensor | 404 - Page Not Found'
};

const App: React.FC = () => {
  const location = useLocation();

  // Скролл вверх при смене маршрута
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Динамический title (исправленная версия)
  useEffect(() => {
    const currentPath = location.pathname;
    const title = pageTitles[currentPath] || pageTitles['*'] || 'MMW-Sensor | Microwave Sensors Development';
    document.title = title;
  }, [location.pathname]);

  useSmoothScroll();

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <RsdtBanner />
            <ParallaxTransition />
            <DualBlocksSection />
            <RadarAdvantageSection />
            <AdvantagesSection />
            <NewsPreview />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/roas" element={<ROAS />} />
        <Route path="/master-sensor-unit" element={<MasterSensorUnit />} />
        <Route path="/unified-sensor-6634" element={<US6634 />} />
        <Route path="/low-power-sensor" element={<LPS />} />
        <Route path="/medical-sensor" element={<MEDICAL />} />
        <Route path="/uwb-sensor" element={<UWB />} />
        <Route path="/babysim" element={<BABYSIM />} />
        <Route path="/about-history" element={<ABOUTHISTORY />} />
        <Route path="/main" element={<Hero />} />
        <Route path="/embedded-hardware" element={<EMBEDDEDHARD />} />
        <Route path="/embedded-software" element={<EMBEDDEDSOFT />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/antenna-design" element={<AntennaDesign />} />
        <Route path="/embedded-testing" element={<EmbeddedTesting />} />
        <Route path="/why-radars" element={<WhyARadarSensors />} / >
        <Route path="/about-our-radars" element={<ABOUTOURRADARS />} / >
        <Route path="/news" element={<NewsPage />} />
        <Route path="/admin/news" element={<AdminNewsPage />} />
        <Route path="/driver-passengers-monitoring" element={<DriverPassengersMonitoring />} />
        <Route path="/cabin-intrusion" element={<IntrusionDetection />} />
{/*        <Route path="/semiconductors" element={< />} /> */}
{/*        <Route path="/careers" element={<CareersPage />} />      */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
