import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FiShield, FiZap, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../i18n/useLanguage';
import { useCurrency } from '../i18n/useCurrency';
import products from '../data/products';
import { WHATSAPP_NUMBER } from '../config/whatsapp';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedPlan, setSelectedPlan] = useState(0);
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>{t('product_not_found')}</h2>
        <Link to="/catalog">{t('back_to_catalog')}</Link>
      </div>
    );
  }

  const currentPlan = product.plans[selectedPlan];

  const handleBuyNow = () => {
    const message =
      `${t('wa_message_intro')}\n\n` +
      `📦 *${product.title}*\n` +
      `⏱ ${t('wa_message_plan')}: *${currentPlan.label}*\n` +
      `💰 ${t('wa_message_price')}: *${formatPrice(currentPlan.price)}*\n\n` +
      `${t('wa_message_outro')}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-detail">
      <div className="detail-container">
        <Link to="/catalog" className="back-link">
          {t('back_to_catalog')}
        </Link>

        <div className="detail-grid">
          <div className="detail-image">
            <img src={product.image} alt={product.title} />
            <span className="detail-category">{product.category}</span>
          </div>

          <div className="detail-info">
            <h1>{product.title}</h1>
            <p className="detail-price">{formatPrice(currentPlan.price)}</p>

            {product.plans.length > 1 && (
              <div className="plan-selector">
                <h3>{t('choose_plan')}</h3>
                <div className="plan-options">
                  {product.plans.map((plan, index) => (
                    <button
                      key={index}
                      className={`plan-option ${selectedPlan === index ? 'active' : ''}`}
                      onClick={() => setSelectedPlan(index)}
                    >
                      <span className="plan-label">{plan.label}</span>
                      <span className="plan-price">{formatPrice(plan.price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="detail-description">{t(`p${product.id}_desc`)}</p>

            <div className="detail-features">
              <h3>{t('whats_included')}</h3>
              <ul>
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n}>✅ {t(`p${product.id}_f${n}`)}</li>
                ))}
              </ul>
            </div>

            <button className="buy-btn" onClick={handleBuyNow}>
              {t('order_whatsapp')} — {formatPrice(currentPlan.price)}
            </button>

            <div className="detail-trust">
              <span><FiShield /> {t('trust_detail_verified')}</span>
              <span><FiZap /> {t('trust_detail_instant')}</span>
              <span><FiCheckCircle /> {t('trust_detail_guarantee')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
