import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/useLanguage';
import './ProductCard.css';

function ProductCard({ product }) {
  const { t } = useLanguage();
  const lowestPrice = Math.min(...product.plans.map((p) => p.price));
  const hasMultiplePlans = product.plans.length > 1;

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="product-card-category">{product.category}</span>
      </div>
      <div className="product-card-body">
        <h3>{product.title}</h3>
        <p>{t(`p${product.id}_short`)}</p>
        <div className="product-card-footer">
          <span className="product-card-price">
            {hasMultiplePlans ? `${t('from')} ` : ''}${lowestPrice.toFixed(2)}
          </span>
          <Link to={`/product/${product.id}`} className="product-card-btn">
            {t('view_details')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
