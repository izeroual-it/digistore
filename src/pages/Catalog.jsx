import { useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { useLanguage } from '../i18n/useLanguage';
import products, { categories } from '../data/products';
import './Catalog.css';

const categoryKeys = {
  'All': 'cat_all',
  'Streaming': 'cat_streaming',
  'Music': 'cat_music',
  'Software': 'cat_software',
  'AI Tools': 'cat_ai',
  'Education': 'cat_education',
  'Finance': 'cat_finance',
  'Marketing': 'cat_marketing',
};

function Catalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="catalog">
      <div className="catalog-header">
        <h1>{t('catalog_title')}</h1>
        <p>{t('catalog_subtitle')}</p>
      </div>

      <div className="catalog-container">
        <div className="catalog-controls">
          <div className="catalog-search">
            <input
              type="text"
              placeholder={t('search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="catalog-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t(categoryKeys[cat] || cat)}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>{t('no_results')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
