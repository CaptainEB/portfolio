import { londrina, majorMono } from '@/components/Fonts';
import Image from 'next/image';
import heroImage from 'public/img/hero-image-1x1.jpg';
import styles from './page.module.scss';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.hero}>
				<div className={styles.flexCenter}>
					<Image className={styles.heroImage} src={heroImage} alt="Hero Image" />
				</div>
				<div className={`${styles.heroText} ${majorMono.className}`}>
					<h1 className={londrina.className}>SAM</h1>
					<h2>Developer | Engineer</h2>
					<h2>FullStack</h2>
				</div>
			</section>
		</main>
	);
}
