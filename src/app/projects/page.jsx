import { manrope, notoSerif } from '@/components/Fonts';
import Image from 'next/image';
import projects from 'projects-data.json';
import sarianLogo from 'public/img/sarian_symbol_light.png';
import FromLeft from './components/projectFromLeft';
import FromRight from './components/projectFromRight';
import styles from './page.module.scss';

export default async function page() {
	const { tacoTap, binge, basketBistro, mythicalAtlas } = projects;

	return (
		<div className={styles.pageWrapper}>
			{/* ── Personal work ── */}
			<section className={styles.personalSection}>
				<header className={styles.sectionHeader}>
					<span className={`${manrope.className} ${styles.sectionLabel}`}>Portfolio</span>
					<h1 className={`${notoSerif.className} ${styles.sectionTitle}`}>Personal Work</h1>
					<p className={`${manrope.className} ${styles.sectionDesc}`}>Side projects and collaborative builds — explorations across the full stack.</p>
				</header>
				<div className={styles.projectsList}>
					<FromLeft {...tacoTap} />
					<FromRight {...binge} />
					<FromLeft {...basketBistro} />
				</div>
			</section>

			{/* ── Sarian LLC ── */}
			<section className={styles.businessSection}>
				<div className={styles.businessBand}>
					<div className={styles.businessBandInner}>
						<Image src={sarianLogo} alt="Sarian LLC" width={48} height={48} className={styles.businessLogo} />
						<div className={styles.businessBandText}>
							<span className={`${manrope.className} ${styles.businessLabel}`}>Company</span>
							<h2 className={`${notoSerif.className} ${styles.businessName}`}>Sarian LLC</h2>
							<p className={`${manrope.className} ${styles.businessTagline}`}>
								Built to Last. Made to Enjoy. SaaS products that are rock-solid in performance, honest in design, and genuinely pleasant to use.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.projectsList}>
					<FromLeft {...mythicalAtlas} />
				</div>
			</section>
		</div>
	);
}
