import { useState } from 'react';
import { CurrencyContext } from './CurrencyContext';

const EXCHANGE_RATE = 10; // 1 USD ≈ 10 MAD

export default function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => localStorage.getItem('currency') || 'USD');

  const toggleCurrency = (c) => {
    setCurrency(c);
    localStorage.setItem('currency', c);
  };

  const formatPrice = (priceUSD) => {
    if (currency === 'MAD') {
      return `${(priceUSD * EXCHANGE_RATE).toFixed(2)} MAD`;
    }
    return `$${priceUSD.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: toggleCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

