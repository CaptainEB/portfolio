'use client';

import Image from 'next/image';
import expressIcon from 'public/icons/express.svg';
import mongoIcon from 'public/icons/mongo.svg';
import nodeIcon from 'public/icons/node.png';
import reactIcon from 'public/icons/react-icon.png';
import styles from './Mern.module.scss';

export default function Mern() {
	if (typeof window !== 'undefined') {
		let wrapperEl = document.getElementById('container');
		let rotationalForce = 0;
		let speed = 7;

		setInterval(() => {
			rotationalForce++;
			wrapperEl.style.transform = `rotate(${rotationalForce / speed}deg)`;
		}, 20);

		for (let i = 0; i < wrapperEl.children.length; i++) {
			setInterval(() => {
				wrapperEl.children[i].style.transform = `rotate(${(rotationalForce / speed) * -1}deg)`;
			}, 20);
		}
	}

	return (
		<div className={styles.outerContainer}>
			<div id="container" className={styles.container}>
				<Image className={styles.mongo} src={mongoIcon} alt="MongoDB" width={100} height={100} />
				<Image className={styles.express} src={expressIcon} alt="Express" width={100} height={100} />

				<div className={styles.mernTextWrapper}>
					<h3>MERN</h3>
				</div>
				<Image className={styles.react} src={reactIcon} alt="React" width={100} height={100} />
				<Image className={styles.node} src={nodeIcon} alt="Node" width={100} height={100} />
			</div>
		</div>
	);
}
