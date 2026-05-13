// src/components/Nav.tsx
import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  // Скролл шапки
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при смене страницы
  useEffect(() => {
    setMenuOpen(false);
    setIsSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSolutionsOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          <span className="dot"></span> RSDTeam.
        </NavLink>

        {/* Десктоп */}
        <ul className="nav-links desktop-menu">
          <li className={`dropdown ${isSolutionsOpen ? 'open' : ''}`}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsSolutionsOpen(!isSolutionsOpen); }}
              className="dropdown-toggle"
            >
              Radar Solutions
            </a>
            <ul className="dropdown-menu">
              {radarSolutions.map((s) => (
                <li key={s.path}>
                  <NavLink to={s.path} onClick={() => setIsSolutionsOpen(false)}>{s.name}</NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li><a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>Design Services</a></li>
          <li><a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-cta">Contact Us</a></li>
        </ul>

        {/* Бургер */}
        <button 
          className={`burger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ touchAction: 'manipulation' }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="mobile-menu" style={{ zIndex: 1100 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 0.5rem 0.5rem' }}>
            <button 
              onClick={closeMenu} 
              style={{ 
                background: 'none', 
                border: 'none', 
                fontSize: '1.8rem', 
                color: 'var(--text)', 
                cursor: 'pointer',
                padding: '0.3rem'
              }}
            >
              ✕
            </button>
          </div>

          <ul>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setMobileSolutionsOpen(!mobileSolutionsOpen); }}
                style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}
              >
                Radar Solutions 
                <span>{mobileSolutionsOpen ? '▲' : '▼'}</span>
              </a>
              {mobileSolutionsOpen && (
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                  {radarSolutions.map((s) => (
                    <li key={s.path}>
                      <NavLink to={s.path} onClick={closeMenu}>{s.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>Design Services</a></li>
            <li><a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-cta">Contact Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;