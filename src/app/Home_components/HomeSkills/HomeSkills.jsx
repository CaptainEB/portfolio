import { majorMono } from '@/components/Fonts';
import styles from './HomeSkills.module.scss';

export default function HomeSkills() {
	return (
		<section className={styles.homeSkills}>
			<div className={styles.barGraph}>
				<div className={styles.titles}>
					<h3 className={majorMono.className}>Developer</h3>
					<h3 className={majorMono.className}>Engineer</h3>
					<h3 className={majorMono.className}>Gamer</h3>
				</div>
				<div className={styles.bars}>
					<div className={styles.devBar}></div>
					<div className={styles.engineerBar}></div>
					<div className={styles.gamerBar}></div>
				</div>
				<div className={styles.spans}>
					<span className={majorMono.className}>96</span>
					<span className={majorMono.className}>75</span>
					<span className={majorMono.className}>82</span>
				</div>
			</div>
			<div className={styles.animation}>ANIMATION</div>
		</section>
	);
}
