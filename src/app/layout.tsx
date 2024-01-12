import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import type { ReactNode } from 'react';

import '@/app/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  general: ReactNode;
  story: ReactNode;
}

const RootLayout = ({ general, story }: RootLayoutProps) => (
  <html lang="en">
    <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
      <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
        {general}
        {story}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
