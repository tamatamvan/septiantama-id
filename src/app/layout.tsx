import { Analytics } from '@vercel/analytics/react';

import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';

const bodyFont = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
