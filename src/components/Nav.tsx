// src/components/Nav.tsx
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем дропдаун при смене маршрута
  useEffect(() => {
    setIsSolutionsOpen(false);
  }, [location.pathname]);

  const radarSolutions = [
    { name: 'ROAS', path: '/roas' },
    { name: 'Master Sensor/Unit', path: '/master-sensor-unit' },
    { name: 'Unified Sensor 6634', path: '/unified-sensor-6634' },
    { name: 'Low power sensor', path: '/low-power-sensor' },
    { name: 'Medical sensor', path: '/medical-sensor' },
    { name: 'UWB sensor', path: '/uwb-sensor' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${anchor}`;
      return;
    }
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const navHeight = 64 + 16;
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
          {/* Кнопка Radar Solutions теперь раскрывается в дропдаун */}
          <li className={`dropdown ${isSolutionsOpen ? 'open' : ''}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSolutionsOpen((prev) => !prev);
              }}
              className="dropdown-toggle"
            >
              Radar Solutions
            </a>
            <ul className="dropdown-menu">
              {radarSolutions.map((solution) => (
                <li key={solution.path}>
                  <NavLink
                    to={solution.path}
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {solution.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li><a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>Design Services</a></li>
          <li><a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-cta">Contact Us</a></li>
        </ul>

        {/* Бургер-меню (стили уже есть в global.css) */}
        <button className="burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;