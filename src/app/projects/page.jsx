import projects from 'projects-data.json';
import FromLeft from './components/projectFromLeft';
import FromRight from './components/projectFromRight';
import styles from './page.module.scss';

export default async function page() {
	const { tacoTap, binge, basketBistro } = projects;

	return (
		<section className={styles.projects}>
			<FromLeft {...tacoTap} />
			<FromRight {...binge} />
			<FromLeft {...basketBistro} />
		</section>
	);
}
