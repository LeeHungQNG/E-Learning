import type { Metadata } from 'next';
import './globals.css';
import { geistMono, manrope, roboto } from '@/components/font';

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
      {/* Local Font */}
      <body className={`${geistMono.className}`}>{children}</body>

      {/* Google Font */}
      {/* <body className={`${manrope.variable} ${roboto.variable} font-primary`}>{children}</body> */}
    </html>
  );
}
