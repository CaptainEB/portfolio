'use client';

import Image from 'next/image';
import expressIcon from 'public/icons/express.svg';
import mongoIcon from 'public/icons/mongo.svg';
import nodeIcon from 'public/icons/node.png';
import reactIcon from 'public/icons/react-icon.png';
import { useEffect, useRef } from 'react';
import styles from './Mern.module.scss';

export default function Mern() {
	const wrapperEl = useRef(null);
	let rotationalForce = 0;
	const speed = 7;

	useEffect(() => {
		const interval = setInterval(() => {
			rotationalForce++;
			if (wrapperEl.current) {
				wrapperEl.current.style.transform = `rotate(${rotationalForce / speed}deg)`;
				Array.from(wrapperEl.current.children).forEach((child) => {
					child.style.transform = `rotate(${(rotationalForce / speed) * -1}deg)`;
				});
			}
		}, 20);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.outerContainer}>
			<div ref={wrapperEl} id="container" className={styles.container}>
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
