import Image from 'next/image';
import Link from 'next/link';
import githubIcon from 'public/icons/github-mark.png';
import linkedinIcon from 'public/icons/linkedin.png';
import logo from 'public/logo.svg';
import { londrina } from '../Fonts';
import styles from './Nav.module.scss';

export default function Nav() {
	return (
		<nav className={`${styles.nav} ${londrina.className}`}>
			<div className={styles.logo}>
				<Link href="/">
					<Image className={styles.logo} src={logo} alt="logo" />
				</Link>
			</div>
			<ul className={styles.links}>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/skills">Skills</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
			<ul className={styles.icons}>
				<li>
					<Link href="https://github.com/CaptainEB">
						<Image className={styles.icon} src={githubIcon} alt="github icon" width={50} height={50} />
					</Link>
				</li>
				<li>
					<Link href="https://www.linkedin.com/in/sam-ebadi-sobi-543a14161/">
						<Image className={styles.icon} src={linkedinIcon} alt="linkedin icon" width={50} height={50} />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
