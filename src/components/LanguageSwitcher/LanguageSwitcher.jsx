import { useLanguage } from '../../i18n/useLanguage';
import './LanguageSwitcher.css';

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'ع' },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher">
      {langs.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${lang === l.code ? 'active' : ''}`}
          onClick={() => setLang(l.code)}
          aria-label={l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;

