import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  useSmoothScroll(); // теперь хук внутри HashRouter

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
      </Routes>
      <Footer />
    </>
  );
};

export default App;