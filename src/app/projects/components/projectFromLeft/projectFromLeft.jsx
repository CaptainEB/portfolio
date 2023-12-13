import { majorMono, montserrat } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from './projectFromLeft.module.scss';

export default function projectFromLeft({ title, shortDescription, githubUrl, liveUrl, image, tech }) {
	return (
		<div className={styles.project}>
			<Image className={styles.img} src={image} alt="project picture" width={600} height={325} />
			<h2 className={`${styles.title} ${majorMono.className}`}>{title}</h2>
			<div className={`${styles.description} ${montserrat.className}`}>
				<p className={styles.shortDescription}>{shortDescription}</p>
				<div className={styles.tech}>
					{tech.map((tech, index) => (
						<span key={index}>{tech}</span>
					))}
				</div>
				<div className={styles.links}>
					<Link href={githubUrl}>Gihub Link</Link>
					<Link href={liveUrl}>Live Link</Link>
				</div>
			</div>
		</div>
	);
}
