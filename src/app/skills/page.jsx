import { majorMono } from '@/components/Fonts';
import Image from 'next/image';

// Icons
import cssIcon from 'public/icons/css.svg';
import expressIcon from 'public/icons/express.svg';
import handlebarsIcon from 'public/icons/handlebars.png';
import htmlIcon from 'public/icons/html.svg';
import jsIcon from 'public/icons/js.svg';
import mongodbIcon from 'public/icons/mongo.svg';
import mongooseIcon from 'public/icons/mongoose.png';
import mysqlIcon from 'public/icons/mysql.png';
import nextIcon from 'public/icons/nextjs.svg';
import nodeIcon from 'public/icons/node.png';
import reactIcon from 'public/icons/react-icon.png';
import sassIcon from 'public/icons/sass.png';
import sequelizeIcon from 'public/icons/sequelize.png';
import tailwindIcon from 'public/icons/tailwind.png';
import styles from './page.module.scss';

export default function page() {
	return (
		<section>
			<section className={styles.barGraph}>
				<div className={styles.titles}>
					<h3 className={majorMono.className}>Developer</h3>
					<h3 className={majorMono.className}>Engineer</h3>
					<h3 className={majorMono.className}>Guitar Player</h3>
				</div>
				<div className={styles.bars}>
					<div className={styles.devBar}></div>
					<div className={styles.engineerBar}></div>
					<div className={styles.gamerBar}></div>
				</div>
				<div className={styles.spans}>
					<span className={majorMono.className}>96</span>
					<span className={majorMono.className}>75</span>
					<span className={majorMono.className}>60</span>
				</div>
			</section>
			<div className={styles.skillsSection}>
				<section>
					<h2 className={majorMono.className}>Front end</h2>
					<p>
						As a dedicated and skilled front-end developer, I bring a wealth of experience and expertise in crafting engaging and user-friendly
						interfaces. Proficient in a diverse array of front-end technologies, I excel in transforming design concepts into seamless and interactive
						web applications.
					</p>
					<div className={styles.Icons}>
						<Image src={htmlIcon} alt="HTML5 icon" />
						<Image src={cssIcon} alt="CSS3 icon" />
						<Image src={jsIcon} alt="JavaScript icon" />
						<Image src={reactIcon} alt="React icon" />
						<Image src={handlebarsIcon} alt="Handlebars icon" />
						<Image src={sassIcon} alt="Sass icon" />
						<Image src={tailwindIcon} alt="Tailwind icon" />
					</div>
				</section>
				<section>
					<h2 className={majorMono.className}>Back end</h2>
					<p>
						As an adept backend developer, I can utilize powerful technologies such as Node.js, Express, and Next.js. Leveraging the robust
						capabilities of Node.js, I create efficient and scalable server-side solutions.
					</p>
					<div className={styles.Icons}>
						<Image src={nodeIcon} alt="Node.js icon" />
						<Image src={nextIcon} alt="Next.js icon" />
						<Image src={expressIcon} alt="Express icon" />
					</div>
				</section>
				<section>
					<h2 className={majorMono.className}>Database</h2>
					<p>
						As a proficient database developer, I command a strong understanding of both SQL and NoSQL databases, specializing in MySQL and MongoDB.
					</p>
					<div className={styles.Icons}>
						<Image src={mysqlIcon} alt="MySQL icon" />
						<Image src={mongodbIcon} alt="MongoDB icon" />
						<Image src={sequelizeIcon} alt="Sequelize icon" />
						<Image src={mongooseIcon} alt="Mongoose icon" />
					</div>
				</section>
			</div>
		</section>
	);
}
