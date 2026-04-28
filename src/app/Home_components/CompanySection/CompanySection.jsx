import { manrope, notoSerif } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import projects from 'projects-data.json';
import sarianBanner from 'public/img/sarian_primary_dark.png';
import styles from './CompanySection.module.scss';

export default function CompanySection() {
	const { mythicalAtlas } = projects;

	return (
		<section className={styles.companySection}>
			{/* Dark brand band */}
			<div className={styles.brandBand}>
				<div className={styles.bannerWrapper}>
					<Image src={sarianBanner} alt="Sarian LLC" fill className={styles.bannerImg} sizes="(max-width: 1320px) 100vw, 1320px" />
				</div>
				<div className={styles.brandText}>
					<p className={`${manrope.className} ${styles.tagline}`}>Built to Last. Made to Enjoy.</p>
					<p className={`${manrope.className} ${styles.mission}`}>
						Sarian builds SaaS products that are rock-solid in performance, honest in design, and built with enough personality to make them genuinely
						pleasant to use.
					</p>
					<p className={`${manrope.className} ${styles.aboutNote}`}>
						Sarian is a solo LLC. I own the full product lifecycle end-to-end: product design, engineering, deployment, marketing, and finance.
					</p>
					<Link
						href="https://sarianstudio.com"
						target="_blank"
						rel="noopener noreferrer"
						className={`${manrope.className} ${styles.sarianLink}`}
					>
						VISIT SARIANSTUDIO.COM
					</Link>
				</div>
			</div>

			{/* Featured product */}
			<div className={styles.featuredSection}>
				<span className={`${manrope.className} ${styles.exploreLabel}`}>Explore Products</span>
				<article className={styles.productRow}>
					<div className={styles.productImageWrapper}>
						<div className={styles.productImgFrame}>
							<Image src={mythicalAtlas.image} alt={mythicalAtlas.title} fill className={styles.productImg} sizes="(max-width: 850px) 90vw, 45vw" />
						</div>
					</div>
					<div className={styles.productInfo}>
						<span className={`${manrope.className} ${styles.productLabel}`}>Sarian</span>
						<h3 className={`${notoSerif.className} ${styles.productTitle}`}>{mythicalAtlas.title.toUpperCase()}</h3>
						<p className={`${manrope.className} ${styles.productDesc}`}>{mythicalAtlas.shortDescription}</p>
						<div className={styles.techChips}>
							{mythicalAtlas.tech.map((t) => (
								<span key={t} className={`${manrope.className} ${styles.chip}`}>
									{t}
								</span>
							))}
						</div>
						<Link href={mythicalAtlas.liveUrl} target="_blank" rel="noopener noreferrer" className={`${manrope.className} ${styles.visitBtn}`}>
							VISIT SITE
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}
