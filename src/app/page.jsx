import { londrina, majorMono } from '@/components/Fonts';
import Image from 'next/image';
import cssIcon from 'public/icons/css.svg';
import expressIcon from 'public/icons/express.svg';
import htmlIcon from 'public/icons/html.svg';
import mongoIcon from 'public/icons/mongo.svg';
import nextIcon from 'public/icons/nextjs.svg';
import reactIcon from 'public/icons/react-icon.png';
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
			<section className={styles.notableSkills}>
				<Image src={reactIcon} alt="React Icon" />
				<Image src={nextIcon} alt="NextJS Icon" />
				<Image src={mongoIcon} alt="MongoDB Icon" />
				<Image src={expressIcon} alt="ExpressJS Icon" />
				<Image src={cssIcon} alt="CSS Icon" />
				<Image src={htmlIcon} alt="HTML Icon" />
			</section>
		</main>
	);
}
