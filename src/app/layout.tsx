import type { Metadata } from 'next';
import './globals.css';
import { manrope } from '@/utils';
import Sidebar from '@/components/layout/Sidebar';

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
    <html suppressHydrationWarning lang="en">
      <body className={`${manrope.className}`}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
