import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import { ThemeProvider } from '@/providers';
import Header from '@/components/Header/Header';

import './globals.css';

export const metadata: Metadata = {
  title: 'DashDev',
  description: 'DashDev',
};

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
