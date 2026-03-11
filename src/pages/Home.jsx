import Hero from '../components/Hero/Hero';
import TrustBadges from '../components/TrustBadges/TrustBadges';
import ProductCard from '../components/ProductCard/ProductCard';
import Testimonials from '../components/Testimonials/Testimonials';
import StatsBar from '../components/StatsBar/StatsBar';
import { useLanguage } from '../i18n/useLanguage';
import products from '../data/products';
import './Home.css';

function Home() {
  const featuredProducts = products.slice(0, 8);
  const { t } = useLanguage();

  return (
    <div className="home">
      <Hero />
      <TrustBadges />

      <section className="featured-section">
        <div className="section-container">
          <h2 className="section-title">{t('featured_title')}</h2>
          <p className="section-subtitle">{t('featured_subtitle')}</p>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <StatsBar />

      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">{t('how_title')}</h2>
          <p className="section-subtitle">{t('how_subtitle')}</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">🔍</div>
              <h3>{t('step1_title')}</h3>
              <p>{t('step1_text')}</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📝</div>
              <h3>{t('step2_title')}</h3>
              <p>{t('step2_text')}</p>
            </div>
            <div className="step-card">
              <div className="step-icon">⚡</div>
              <h3>{t('step3_title')}</h3>
              <p>{t('step3_text')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
