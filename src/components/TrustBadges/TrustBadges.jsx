import { FiShield, FiZap, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import { useLanguage } from '../../i18n/useLanguage';
import './TrustBadges.css';

function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: <FiShield />, title: t('trust_verified_title'), text: t('trust_verified_text') },
    { icon: <FiZap />, title: t('trust_instant_title'), text: t('trust_instant_text') },
    { icon: <FiRefreshCw />, title: t('trust_guarantee_title'), text: t('trust_guarantee_text') },
    { icon: <FiHeadphones />, title: t('trust_support_title'), text: t('trust_support_text') },
  ];

  return (
    <section className="trust-badges">
      <div className="trust-badges-container">
        {badges.map((badge, index) => (
          <div className="trust-badge" key={index}>
            <div className="trust-badge-icon">{badge.icon}</div>
            <div className="trust-badge-text">
              <h4>{badge.title}</h4>
              <p>{badge.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBadges;
