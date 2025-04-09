import type { Metadata } from 'next';
import './globals.css';
import { manrope } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body className={`${manrope.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <ToastContainer autoClose={2000} position="top-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
