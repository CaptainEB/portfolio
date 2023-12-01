import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<div></div>
			<ul>
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
			<ul>
				<li>
					<Link>Github</Link>
				</li>
				<li></li>
			</ul>
		</nav>
	);
}
