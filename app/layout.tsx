import '@/styles/globals.css';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';
import type React from 'react';
import { lifeOfApple, thinkMusic, gontserratBlack, kodeMonoRegular } from './fonts';

const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Alpha One Solutions - Solar Energy Insights Platform',
  description:
    'Empower your solar investments with data-driven predictions and real-time market insights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${lifeOfApple.variable} ${thinkMusic.variable} ${gontserratBlack.variable} ${kodeMonoRegular.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import './globals.css';
