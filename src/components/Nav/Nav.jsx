'use client';
import { manrope } from '@/components/Fonts';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import githubIcon from 'public/icons/github-mark.png';
import linkedinIcon from 'public/icons/linkedin.png';
import logo from 'public/logo.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.scss';

export default function Nav() {
	const smallNav = useRef(null);
	const navbtn = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	function toggleNav() {
		setIsOpen((prev) => !prev);
	}

	function closeNav() {
		setIsOpen(false);
	}

	// Close the menu whenever the route changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Close the menu when clicking/tapping outside of it
	useEffect(() => {
		if (!isOpen) return;

		function handlePointerDown(event) {
			if (smallNav.current && !smallNav.current.contains(event.target) && navbtn.current && !navbtn.current.contains(event.target)) {
				setIsOpen(false);
			}
		}

		function handleKeyDown(event) {
			if (event.key === 'Escape') setIsOpen(false);
		}

		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen]);

	return (
		<header className={styles.navWrapper}>
			<nav className={`${styles.nav} ${manrope.className}`}>
				<div className={styles.logoWrapper}>
					<Link href="/">
						<Image className={styles.logo} src={logo} alt="logo" />
					</Link>
				</div>
				<div className={styles.navigation} ref={smallNav} aria-expanded={isOpen}>
					<ul className={styles.links}>
						<li className={styles.row1}>
							<Link href="/projects" onClick={closeNav}>
								Projects
							</Link>
						</li>
						<li className={styles.row2}>
							<Link href="/skills" onClick={closeNav}>
								Skills
							</Link>
						</li>
						<li className={styles.row3}>
							<Link href="/about" onClick={closeNav}>
								About
							</Link>
						</li>
					</ul>
					<ul className={styles.icons}>
						<li className={styles.row4}>
							<Link href="https://github.com/CaptainEB" onClick={closeNav}>
								<Image className={styles.icon} src={githubIcon} alt="github icon" width={50} height={50} />
							</Link>
						</li>
						<li className={styles.row5}>
							<Link href="https://www.linkedin.com/in/sam-ebadi-sobi-543a14161/" onClick={closeNav}>
								<Image className={styles.icon} src={linkedinIcon} alt="linkedin icon" width={50} height={50} />
							</Link>
						</li>
					</ul>
				</div>
				<button className={styles.navBtn} onClick={toggleNav} ref={navbtn} aria-expanded={isOpen}>
					<svg viewBox="0 0 100 100" width="30" height="30">
						<rect className={`${styles.top} ${styles.line}`} width="80" height="10" x={10} y={25} rx={5}></rect>
						<rect className={`${styles.middle} ${styles.line}`} width="80" height="10" x={10} y={50} rx={5}></rect>
						<rect className={`${styles.bottom} ${styles.line}`} width="80" height="10" x={10} y={75} rx={5}></rect>
					</svg>
				</button>
			</nav>
		</header>
	);
}
