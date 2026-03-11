import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/useLanguage';
import './Hero.css';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        <Link to="/catalog" className="hero-btn">
          {t('hero_btn')}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
