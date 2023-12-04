import { Londrina_Solid, Major_Mono_Display, Montserrat } from 'next/font/google';

export const londrina = Londrina_Solid({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const majorMono = Major_Mono_Display({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const montserrat = Montserrat({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});
