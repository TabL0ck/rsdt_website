import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import RsdtBanner from './components/RsdtBanner';
import ParallaxTransition from './components/ParallaxTransition';
import DualBlocksSection from './components/DualBlocksSection';
import SpecsStrip from './components/SpecsStrip';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <RsdtBanner />
      <ParallaxTransition />
      <DualBlocksSection />
      <SpecsStrip />
      <AdvantagesSection />
      <Footer />
    </>
  );
};

export default App;