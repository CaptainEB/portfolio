import { Londrina_Solid, Major_Mono_Display, Manrope, Montserrat, Noto_Serif } from 'next/font/google';

export const londrina = Londrina_Solid({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-londrina',
});

export const majorMono = Major_Mono_Display({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-major-mono',
});

export const montserrat = Montserrat({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const notoSerif = Noto_Serif({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-noto-serif',
});

export const manrope = Manrope({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-manrope',
});
