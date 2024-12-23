import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@/providers';
import { Sidebar, SidebarProvider, Header, SnackBar } from '@/components';

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
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <Sidebar />
              <main className="flex bg-muted flex-col w-full h-screen max-h-screen overflow-hidden">
                <Header />
                {children}
              </main>
              <SnackBar />
            </SidebarProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
