import { manrope, notoSerif } from '@/components/Fonts';
import { Database, Monitor, Server } from 'lucide-react';
import styles from './HomeSkills.module.scss';

const competencies = [
	{
		label: 'Frontend',
		icon: Monitor,
		chips: [
			{ name: 'React.js', highlight: true },
			{ name: 'Next.js', highlight: true },
			{ name: 'TypeScript', highlight: false },
			{ name: 'Tailwind CSS', highlight: false },
			{ name: 'Redux Toolkit', highlight: false },
		],
	},
	{
		label: 'Data & Ops',
		icon: Database,
		chips: [
			{ name: 'MongoDB', highlight: true },
			{ name: 'Mongoose', highlight: false },
			{ name: 'AWS', highlight: true },
		],
	},
	{
		label: 'Backend',
		icon: Server,
		chips: [
			{ name: 'Node.js', highlight: true },
			{ name: 'Express', highlight: true },
			{ name: 'GraphQL', highlight: false },
			{ name: 'REST APIs', highlight: false },
			{ name: 'WebSockets', highlight: false },
		],
	},
];

export default function HomeSkills() {
	return (
		<section className={styles.coreCompetencies}>
			<h2 className={`${notoSerif.className} ${styles.sectionTitle}`}>Core Competencies</h2>
			<div className={styles.cards}>
				{competencies.map(({ label, icon: Icon, chips }) => (
					<div key={label} className={styles.card}>
						<div className={styles.cardIcon}>
							<Icon size={16} strokeWidth={1.75} color="#ffffff" />
						</div>
						<h3 className={`${manrope.className} ${styles.cardTitle}`}>{label}</h3>
						<div className={styles.chips}>
							{chips.map(({ name, highlight }) => (
								<span key={name} className={`${manrope.className} ${styles.chip}${highlight ? ` ${styles.chipHighlight}` : ''}`}>
									{name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
