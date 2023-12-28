import { majorMono } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import projects from 'projects-data.json';
import styles from './Example_projects.module.scss';

export default function Example_projects() {
	const { tacoTap, binge } = projects;
	return (
		<section className={styles.exampleProjects}>
			<h2 className={majorMono.className}>Example Projects</h2>
			<div className={styles.projects}>
				<div className={styles.project}>
					<div className={styles.imgWrapper}>
						<Image className={styles.projectImage} src={tacoTap.image} alt="Project 1" fill />
					</div>
					<div className={styles.projectLinks}>
						<Link href={tacoTap.liveUrl}>Live URL</Link>
						<Link href={tacoTap.githubUrl}>Github</Link>
					</div>
				</div>
				<div className={styles.project}>
					<div className={styles.imgWrapper}>
						<Image className={styles.projectImage} src={binge.image} alt="Project 2" fill />
					</div>
					<div className={styles.projectLinks}>
						<Link href={binge.liveUrl}>Live URL</Link>
						<Link href={binge.githubUrl}>Github</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
