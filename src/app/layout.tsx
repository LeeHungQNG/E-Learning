import type { Metadata } from 'next';
import './globals.css';
import { manrope, roboto } from '@/components/font';

export const metadata: Metadata = {
  title: 'Ucademy',
  description: 'Nền tảng học lập trình siêu cấp vip pro',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
