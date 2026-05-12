import React, { useEffect, useState } from 'react';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="dot"></span> RSDT Team.
        </a>
        <ul className="nav-links">
          <li><a href="#solutions">Radar Solutions</a></li>
          <li><a href="#design-services">Design Services</a></li>
          <li><a href="#semiconductors">Semiconductors</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;