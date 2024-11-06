import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'DashDev',
  description: 'DashDev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
