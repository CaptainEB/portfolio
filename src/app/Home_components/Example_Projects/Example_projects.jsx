import { majorMono } from '@/components/Fonts';
import Image from 'next/image';
import project1 from 'public/img/project1.png';
import project2 from 'public/img/project2.png';
import styles from './Example_projects.module.scss';

export default function Example_projects() {
	return (
		<section className={styles.exampleProjects}>
			<h2 className={majorMono.className}>Example Projects</h2>
			<div className={styles.projects}>
				<Image src={project1} alt="Project 1" />
				<Image src={project2} alt="Project 2" />
			</div>
		</section>
	);
}
