import { londrina, majorMono, manrope, montserrat, notoSerif } from '@/components/Fonts';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sam Ebadi Sobi',
	description: 'Web Developer Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${londrina.variable} ${majorMono.variable} ${montserrat.variable} ${notoSerif.variable} ${manrope.variable}`}
		>
			<body className={inter.className} suppressHydrationWarning>
				<Nav />
				<main className="main">{children}</main>
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
