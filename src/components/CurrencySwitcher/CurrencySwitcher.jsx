import { useCurrency } from '../../i18n/useCurrency';
import './CurrencySwitcher.css';

const currencies = [
  { code: 'USD', label: '$' },
  { code: 'MAD', label: 'MAD' },
];

function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="currency-switcher">
      {currencies.map((c) => (
        <button
          key={c.code}
          className={`currency-btn ${currency === c.code ? 'active' : ''}`}
          onClick={() => setCurrency(c.code)}
          aria-label={c.code}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

export default CurrencySwitcher;

