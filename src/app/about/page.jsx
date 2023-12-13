import { majorMono, montserrat } from '@/components/Fonts';
import styles from './page.module.scss';

export default function page() {
	return (
		<section>
			<p className={`${montserrat.className} ${styles.p} ${styles.intro}`}>
				On this page, I aim to provide insights into my past professional experiences and meticulously detail the tech stack employed in constructing
				this website.
			</p>
			<div className={styles.aboutMe}>
				<h2 className={`${majorMono.className} ${styles.h2}`}>About me</h2>
				<p className={`${montserrat.className} ${styles.p}`}>
					After graduating high school I pursued a degree in Computer Science. during my time in college i learned C++ and code theory. My dream was
					to be a functional software engineer who programs video game mechanics, I even worked on unity engine games as hobby on the side. Although I
					never finished my formal college education to acquire a degree, I went back to school at University of California, Irvine. At the boot camp
					offered by UCI I acquired the Full Stack certification. I obtained many skills in front end development including multiple frameworks and
					libraries, NodeJS and Express for back end development, and I learned both relational and non-relational databases through MySQL and
					MongoDB. We also learned Sequlize ORM and Mongoose ODM to work with those databases in a JavaScript environment. The boot camp proved to be
					a invaluable resource outside normal class hours since the instructor was also a senior developer himself, from him I learned best coding
					practices and standards.
				</p>
				<p className={`${montserrat.className} ${styles.p}`}>
					Outside of programming I also like to play games. One of my greatest gaming achievements was getting to diamond league in Starcraft 2.
					Spending time with friends playing the newest games out is my favorite pastime. I also like to play guitar. I have been paying since 2020
					and I enjoy learning some of my favorite songs to play.
				</p>
			</div>
			<div className={styles.aboutSite}>
				<h2 className={`${majorMono.className} ${styles.h2}`}>About this site</h2>
				<p className={`${montserrat.className} ${styles.p}`}>
					After the boot camp I decided to remake my portfolio since the original site was made with plain HTML and CSS. I decided to use react for
					front end because ever since I started using react I have fallen in love with this component based framework. As for back end, I’m using
					NextJS and that may seems like I’m over engineering this website and to an extent it’s true, but it makes routing a breeze , also it uses
					server side rendering which helps make sure the meta data of the site are correct at first page load for seo purposes. For styling the page
					I’m using sass. I like to write my own css instead of using something like bootstrap or tailwind because it keeps my component page clean
					and separates my styles from my functional code.
				</p>
			</div>
		</section>
	);
}
