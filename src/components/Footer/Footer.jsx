import Image from 'next/image';
import Link from 'next/link';
import githubIcon from 'public/icons/github-mark.png';
import linkedinIcon from 'public/icons/linkedin.png';
import { majorMono } from '../Fonts';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={majorMono.className}>Copyright © 2023 all rights reserved</p>
			<h2 className={majorMono.className}>Sam ebadi sobi</h2>
			<div className={styles.icons}>
				<Link href="https://github.com/CaptainEB">
					<Image className={styles.icon} src={githubIcon} alt="github icon" width={50} height={50} />
				</Link>
				<Link href="https://www.linkedin.com/in/sam-ebadi-sobi-543a14161/">
					<Image className={styles.icon} src={linkedinIcon} alt="linkedin icon" width={50} height={50} />
				</Link>
			</div>
		</footer>
	);
}
