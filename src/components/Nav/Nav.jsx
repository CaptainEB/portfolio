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
	const navbtn = useRef(null);

	function showNav() {
		const openNav = smallNav.current.getAttribute('aria-expanded');
		if (openNav === 'true') smallNav.current.setAttribute('aria-expanded', 'false');
		else smallNav.current.setAttribute('aria-expanded', 'true');

		const openBtn = navbtn.current.getAttribute('aria-expanded');
		if (openBtn === 'true') navbtn.current.setAttribute('aria-expanded', 'false');
		else navbtn.current.setAttribute('aria-expanded', 'true');
	}

	return (
		<nav className={`${styles.nav} ${londrina.className}`}>
			<div className={styles.logo}>
				<Link href="/">
					<Image className={styles.logo} src={logo} alt="logo" />
				</Link>
			</div>
			<div className={styles.navigation} ref={smallNav} aria-expanded="false">
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
			<button className={styles.navBtn} onClick={showNav} ref={navbtn} aria-expanded="false">
				<div className={styles.top}></div>
				<div className={styles.middle}></div>
				<div className={styles.bottom}></div>
			</button>
		</nav>
	);
}
