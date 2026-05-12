import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для плавного скролла к якорю (будем использовать в onClick)
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    // Если мы не на главной – сначала перейдём на главную, а потом скролл выполнит эффект
    if (location.pathname !== '/') {
      // Переход на главную с хешем
      window.location.href = '/#/' + anchor;
      return;
    }
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const navHeight = 64 + 16; // высота шапки + отступ
      const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          <span className="dot"></span> RSDTeam.
        </NavLink>
        <ul className="nav-links">
          <li><a href="/#solutions" onClick={(e) => handleAnchorClick(e, 'solutions')}>Radar Solutions</a></li>
          <li><a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>Design Services</a></li>
          <li><a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-cta">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;