import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('site_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileDesignOpen, setMobileDesignOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('site_theme', theme);
  }, [theme]);

  // Закрываем меню при смене страницы
  useEffect(() => {
    setMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsDesignOpen(false);
    setIsAboutOpen(false);
    setMobileSolutionsOpen(false);
    setMobileDesignOpen(false);
    setMobileAboutOpen(false);
  }, [location.pathname]);

  // Блокировка скролла при открытом мобильном меню
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

  useEffect(() => {
    const closeDesktopDropdowns = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navRef.current?.contains(target)) return;

      setIsSolutionsOpen(false);
      setIsDesignOpen(false);
      setIsAboutOpen(false);
    };

    document.addEventListener('mousedown', closeDesktopDropdowns);
    document.addEventListener('touchstart', closeDesktopDropdowns);

    return () => {
      document.removeEventListener('mousedown', closeDesktopDropdowns);
      document.removeEventListener('touchstart', closeDesktopDropdowns);
    };
  }, []);

  const radarSolutions = [
    { name: 'ROAS', path: '/roas' },
    { name: 'Master Sensor/Unit', path: '/master-sensor-unit' },
    { name: 'Unified Sensor 6634', path: '/unified-sensor-6634' },
    { name: 'Low power sensor', path: '/low-power-sensor' },
    { name: 'Medical sensor', path: '/medical-sensor' },
    { name: 'UWB sensor', path: '/uwb-sensor' },
  ];

  const designServices = [
    { name: 'Embedded Software', path: '/embedded-software' },
    { name: 'Embedded Hardware', path: '/embedded-hardware' },
    { name: 'Embedded Testing', path: '/embedded-testing' },
    { name: 'Antenna Design', path: '/antenna-design' },
  ];

  const aboutLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'History', path: '/about-history' },
    { name: 'Careers', path: '/careers' },
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
    setMobileDesignOpen(false);
    setMobileAboutOpen(false);
  };
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    navigate('/');
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };
  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  return (
    <nav ref={navRef} className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src="/logo.svg"
            alt="MW-Sensor Logo"
            className="nav-logo-icon"
            style={{ height: '40px', width: 'auto' }}
          />
        </NavLink>

        {/* Десктопное меню */}
        <ul className="nav-links desktop-menu">
          {/* Radar Solutions */}
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

          {/* Design Services – теперь выпадающий */}
          <li className={`dropdown ${isDesignOpen ? 'open' : ''}`}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsDesignOpen(!isDesignOpen); }}
              className="dropdown-toggle"
            >
              Design Services
            </a>
            <ul className="dropdown-menu">
              {designServices.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} onClick={() => setIsDesignOpen(false)}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li><a href="/semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>

          {/* About */}
          <li className={`dropdown ${isAboutOpen ? 'open' : ''}`}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsAboutOpen(!isAboutOpen); }}
              className="dropdown-toggle"
            >
              About
            </a>
            <ul className="dropdown-menu">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} onClick={() => setIsAboutOpen(false)}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li><NavLink to='/contact' className="nav-cta">Contact Us</NavLink></li>
        </ul>

        <button
          type="button"
          className="theme-toggle desktop-theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          aria-pressed={theme === 'dark'}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
          </span>
          <span className="theme-toggle-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>

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
              type="button"
              className="theme-toggle mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={theme === 'dark'}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" />
              </span>
              <span className="theme-toggle-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
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
            {/* Radar Solutions */}
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

            {/* Design Services */}
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setMobileDesignOpen(!mobileDesignOpen); }}
                style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}
              >
                Design Services
                <span>{mobileDesignOpen ? '▲' : '▼'}</span>
              </a>
              {mobileDesignOpen && (
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                  {designServices.map((item) => (
                    <li key={item.path}>
                      <NavLink to={item.path} onClick={closeMenu}>{item.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><a href="/semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>

            {/* About */}
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setMobileAboutOpen(!mobileAboutOpen); }}
                style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}
              >
                About
                <span>{mobileAboutOpen ? '▲' : '▼'}</span>
              </a>
              {mobileAboutOpen && (
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                  {aboutLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink to={link.path} onClick={closeMenu}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><NavLink to='/contact' >Contact Us</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
