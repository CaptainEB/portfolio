import { promises as fs } from 'fs';
import projects from 'projects-data.json';
import styles from './page.module.scss';

async function getProjectData() {
	const projectData = await fs.readFile('projects-data.json', 'utf-8');
	return JSON.parse(projectData);
}

export default async function page() {
	//method 1
	// const projects = await getProjectData();
	// const { project2 } = projects;

	//method 2
	const { project1 } = projects;

	return <div>{project1.title}</div>;
}
