import { manrope, notoSerif } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import projects from 'projects-data.json';
import styles from './Example_projects.module.scss';

export default function Example_projects() {
	const { tacoTap, binge } = projects;
	const featured = [tacoTap, binge];

	return (
		<section className={styles.selectedProjects}>
			<h2 className={`${notoSerif.className} ${styles.sectionTitle}`}>Selected Projects</h2>
			<div className={styles.projectList}>
				{featured.map((project, i) => (
					<article key={project.title} className={`${styles.projectRow} ${i % 2 === 1 ? styles.reverse : ''}`}>
						<div className={styles.projectImage}>
							<div className={styles.imgWrapper}>
								<Image src={project.image} alt={project.title} fill className={styles.img} sizes="(max-width: 850px) 90vw, 45vw" />
							</div>
						</div>
						<div className={styles.projectInfo}>
							<span className={`${manrope.className} ${styles.caseLabel}`}>PROJECT {String(i + 1).padStart(2, '0')}</span>
							<h3 className={`${notoSerif.className} ${styles.projectTitle}`}>{project.title.toUpperCase()}</h3>
							<p className={`${manrope.className} ${styles.projectDesc}`}>{project.shortDescription}</p>
							<Link href={project.liveUrl} className={`${manrope.className} ${styles.viewBtn}`}>
								VIEW PROJECT
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
