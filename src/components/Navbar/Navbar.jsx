import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import { useLanguage } from '../../i18n/useLanguage';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🛒 <span>DigiStore</span>
        </Link>
        <div className="navbar-right">
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {t('nav_home')}
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className={location.pathname === '/catalog' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {t('nav_catalog')}
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
          <CurrencySwitcher />
          <ThemeToggle />
          <button
            className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
