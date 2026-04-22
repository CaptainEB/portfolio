import { manrope, notoSerif } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from './projectFromRight.module.scss';

export default function projectFromRight({ title, shortDescription, githubUrl, liveUrl, image, tech }) {
	return (
		<div className={styles.project}>
			<div className={styles.imgWrapper}>
				<Image className={styles.img} src={image} alt="project picture" fill />
			</div>
			<div className={`${styles.description} ${manrope.className}`}>
				<h2 className={`${styles.title} ${notoSerif.className}`}>{title}</h2>
				<p className={styles.shortDescription}>{shortDescription}</p>
				<div className={styles.tech}>
					{tech.map((t, index) => (
						<span key={index}>{t}</span>
					))}
				</div>
				<div className={styles.links}>
					<Link href={githubUrl}>Github</Link>
					<Link href={liveUrl}>Live</Link>
				</div>
			</div>
		</div>
	);
}
