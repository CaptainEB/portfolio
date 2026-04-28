import { manrope, notoSerif } from '@/components/Fonts';
import Image from 'next/image';
import heroImage from 'public/img/circleHeroImage.png';
import CompanySection from './Home_components/CompanySection';
import Example_Projects from './Home_components/Example_Projects';
import HomeSkills from './Home_components/HomeSkills';
import styles from './page.module.scss';

export default function Home() {
	return (
		<section>
			<section className={styles.hero}>
				<div className={styles.heroImageWrapper}>
					<Image className={styles.heroImage} src={heroImage} alt="Sam Ebadi Sobi" priority fill sizes="(max-width: 850px) 40vw, 18vw" />
				</div>
				<h1 className={`${notoSerif.className} ${styles.heroName}`}>SAM</h1>
				<p className={`${manrope.className} ${styles.heroRole}`}>
					DEVELOPER <span className={styles.divider}>|</span> ENGINEER
				</p>
				<p className={`${manrope.className} ${styles.heroRole}`}>FULLSTACK</p>
			</section>
			<HomeSkills />
			<Example_Projects />
			<CompanySection />
		</section>
	);
}
