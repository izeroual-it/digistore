import { FiShield, FiLock, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../../i18n/useLanguage';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-trust">
        <div className="footer-trust-container">
          <span><FiShield /> {t('footer_secure')}</span>
          <span><FiLock /> {t('footer_privacy')}</span>
          <span><FiCheckCircle /> {t('footer_seller')}</span>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-brand">
          <h3>🛒 DigiStore</h3>
          <p>{t('footer_brand')}</p>
        </div>
        <div className="footer-links">
          <h4>{t('footer_links_title')}</h4>
          <ul>
            <li><a href="#/">{t('nav_home')}</a></li>
            <li><a href="#/catalog">{t('nav_catalog')}</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>{t('footer_contact_title')}</h4>
          <p>{t('footer_contact_text')}</p>
          <p>📧 contact@digistore.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DigiStore. {t('footer_rights')}</p>
      </div>
    </footer>
  );
}

export default Footer;
