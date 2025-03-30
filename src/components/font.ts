import { Manrope, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' });

// local font
const geistMono = localFont({
  src: '../app/fonts/GeistMonoVF.woff',
});

export { manrope, roboto, geistMono };
