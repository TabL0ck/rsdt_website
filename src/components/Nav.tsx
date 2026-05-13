import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1025;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const openMenu = () => {
    if (!isMobile) setMenuOpen(true);
  };

  const scheduleClose = () => {
    if (!isMobile) {
      closeTimer.current = setTimeout(() => setMenuOpen(false), 180);
    }
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${anchor}`;
      return;
    }
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="dot"></span> RSDTeam
        </NavLink>

        {/* ←←← Это важно! Обёртка + кнопка */}
        <div className="burger-wrapper">
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <div
              className="dropdown-menu"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <ul>
                <li><a href="/#solutions" onClick={(e) => handleAnchorClick(e, 'solutions')}>Radar Solutions</a></li>
                <li><a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>Design Services</a></li>
                <li><a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>Semiconductors</a></li>
                <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                <li>
                  <a href="/#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="nav-cta">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;