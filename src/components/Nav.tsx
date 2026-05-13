import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1025);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ... (useEffects для scroll и resize остаются без изменений)

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Открыть меню (десктоп)
  const openMenu = () => {
    if (isDesktop) {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setMenuOpen(true);
    }
  };

  // Запланировать закрытие меню с небольшой задержкой
  const scheduleClose = () => {
    if (isDesktop) {
      closeTimer.current = setTimeout(() => {
        setMenuOpen(false);
      }, 150); // 150 мс — достаточно, чтобы успеть перевести курсор на меню
    }
  };

  // Отменить запланированное закрытие (если курсор вошёл в меню)
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Мобильный клик — переключает меню
  const toggleMenu = () => {
    if (!isDesktop) setMenuOpen(prev => !prev);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#/${anchor}`;
      return;
    }
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64 - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
    <NavLink to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
        <span className="dot"></span> RSDTeam
    </NavLink>

    {/* Обёртка для позиционирования */}
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

        {/* Dropdown теперь будет позиционироваться относительно burger-wrapper */}
        {menuOpen && (
            <div
                className="dropdown-menu"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
            >
                <ul>
                    <li>
                        <a href="/#solutions" onClick={(e) => handleAnchorClick(e, 'solutions')}>
                            Radar Solutions
                        </a>
                    </li>
                    <li>
                        <a href="/#design-services" onClick={(e) => handleAnchorClick(e, 'design-services')}>
                            Design Services
                        </a>
                    </li>
                    <li>
                        <a href="/#semiconductors" onClick={(e) => handleAnchorClick(e, 'semiconductors')}>
                            Semiconductors
                        </a>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <a
                            href="/#contact"
                            onClick={(e) => handleAnchorClick(e, 'contact')}
                            className="nav-cta"
                        >
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