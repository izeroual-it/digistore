import { FiStar, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../../i18n/useLanguage';
import './Testimonials.css';

function Testimonials() {
	const { t } = useLanguage();

	const testimonials = [
		{
			name: t('testimonial1_name'),
			role: t('testimonial1_role'),
			text: t('testimonial1_text'),
			rating: 5,
			avatar: 'YB',
		},
		{
			name: t('testimonial2_name'),
			role: t('testimonial2_role'),
			text: t('testimonial2_text'),
			rating: 5,
			avatar: 'AK',
		},
		{
			name: t('testimonial3_name'),
			role: t('testimonial3_role'),
			text: t('testimonial3_text'),
			rating: 5,
			avatar: 'OT',
		},
	];

	return (
		<section className="testimonials">
			<div className="section-container">
				<h2 className="section-title">{t('testimonials_title')}</h2>
				<p className="section-subtitle">{t('testimonials_subtitle')}</p>
				<div className="testimonials-grid">
					{testimonials.map((tst, index) => (
						<div className="testimonial-card" key={index}>
							<div className="testimonial-stars">
								{[...Array(tst.rating)].map((_, i) => (
									<FiStar key={i} className="star-filled" />
								))}
							</div>
							<p className="testimonial-text">"{tst.text}"</p>
							<div className="testimonial-author">
								<div className="testimonial-avatar">{tst.avatar}</div>
								<div className="testimonial-info">
									<h4>{tst.name}</h4>
									<p>{tst.role}</p>
								</div>
								<span className="verified-badge">
									<FiCheckCircle /> {t('verified')}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
