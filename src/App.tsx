import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import RsdtBanner from './components/RsdtBanner';
import ParallaxTransition from './components/ParallaxTransition';
import DualBlocksSection from './components/DualBlocksSection';
import SpecsStrip from './components/SpecsStrip';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import SensorDetailPage from './pages/SensorDetailPage';
import useSmoothScroll from './hooks/useSmoothScroll';

const App: React.FC = () => {
  useSmoothScroll();

  return (
    <>
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
        <Route path="/sensor/:sensorId" element={<SensorDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;