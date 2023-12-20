'use client';
import Image from 'next/image';
import Link from 'next/link';
import githubIcon from 'public/icons/github-mark.png';
import linkedinIcon from 'public/icons/linkedin.png';
import logo from 'public/logo.svg';
import { useRef } from 'react';
import { londrina } from '../Fonts';
import styles from './Nav.module.scss';

export default function Nav() {
	const smallNav = useRef(null);

	function showNav() {
		smallNav.current.classList.toggle(styles.showNav);
	}

	return (
		<nav className={`${styles.nav} ${londrina.className}`}>
			<div className={styles.logo}>
				<Link href="/">
					<Image className={styles.logo} src={logo} alt="logo" />
				</Link>
			</div>
			<div className={styles.navigation} ref={smallNav}>
				<ul className={styles.links}>
					<li className={styles.row1}>
						<Link href="/projects">Projects</Link>
					</li>
					<li className={styles.row2}>
						<Link href="/skills">Skills</Link>
					</li>
					<li className={styles.row3}>
						<Link href="/about">About</Link>
					</li>
				</ul>
				<ul className={styles.icons}>
					<li className={styles.row4}>
						<Link href="https://github.com/CaptainEB">
							<Image className={styles.icon} src={githubIcon} alt="github icon" width={50} height={50} />
						</Link>
					</li>
					<li className={styles.row5}>
						<Link href="https://www.linkedin.com/in/sam-ebadi-sobi-543a14161/">
							<Image className={styles.icon} src={linkedinIcon} alt="linkedin icon" width={50} height={50} />
						</Link>
					</li>
				</ul>
			</div>
			<button className={styles.navBtn} onClick={showNav}>
				<div className={styles.navBtn1}></div>
				<div className={styles.navBtn2}></div>
				<div className={styles.navBtn3}></div>
			</button>
		</nav>
	);
}
