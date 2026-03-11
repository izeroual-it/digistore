import { FiUsers, FiPackage, FiThumbsUp, FiAward } from 'react-icons/fi';
import { useLanguage } from '../../i18n/useLanguage';
import './StatsBar.css';

function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { icon: <FiUsers />, value: '10,000+', label: t('stat_customers') },
    { icon: <FiPackage />, value: '35+', label: t('stat_services') },
    { icon: <FiThumbsUp />, value: '99.9%', label: t('stat_satisfaction') },
    { icon: <FiAward />, value: 'Up to 85%', label: t('stat_savings') },
  ];

  return (
    <section className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
