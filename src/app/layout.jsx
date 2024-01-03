import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sam Ebadi Sobi',
	description: 'Web Developer Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nav />
				<main className="main">{children}</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
