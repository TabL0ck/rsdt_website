// src/App.tsx (обновлённый)
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import RsdtBanner from './components/RsdtBanner';
import ParallaxTransition from './components/ParallaxTransition';
import DualBlocksSection from './components/DualBlocksSection';
import SpecsStrip from './components/SpecsStrip';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import useSmoothScroll from './hooks/useSmoothScroll';
import ROAS from './pages/ROAS';
import UWB from './pages/UWB';
import MEDICAL from './pages/MedicalSensor';
import BABYSIM from './pages/BabysimInfo';
import MasterSensorUnit from './pages/MasterSensorUnit'
import ABOUTHISTORY from './pages/About_History'
import EMBEDDEDSOFT from './pages/EmbeddedHardware'
import US6634 from './pages/US6634';
import LPS from './pages/LowPowerSensor';
import ScrollToTop from './components/ScrollToTop';

const PlaceholderSolution: React.FC<{ title: string }> = ({ title }) => (
  <div className="about-page" style={{ paddingTop: '80px' }}>
    <section className="about-section" style={{ minHeight: '60vh' }}>
      <div className="about-container">
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
          {title}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '800px' }}>
          Страница продукта {title}. Здесь будет полное описание, технические характеристики, изображения и CTA-кнопки.<br />
          (Плейсхолдер — замените на отдельный .tsx-файл в папке pages/ когда будет готов контент)
        </p>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--orange)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 600,
            marginTop: '2rem'
          }}
        >
          ← Вернуться на главную
        </a>
      </div>
    </section>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  // Скролл вверх при смене маршрута
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useSmoothScroll(); // обрабатывает якорные ссылки (хеши) после скролла

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
            <SpecsStrip />
            <AdvantagesSection />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/roas" element={<ROAS />} />
        <Route path="/master-sensor-unit" element={<MasterSensorUnit />} />
        <Route path="/unified-sensor-6634" element={<US6634 />} />
        <Route path="/low-power-sensor" element={<LPS />} />
        <Route path="/medical-sensor" element={<MEDICAL/>} />
        <Route path="/uwb-sensor" element={<UWB/>} />
        <Route path="/babysim" element={<BABYSIM/>} />
        <Route path="/about-history" element={<ABOUTHISTORY/>} />
        <Route path="/main" element={<Hero/>} />
        <Route path="/embedded-hardware" element={<EMBEDDEDSOFT/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;