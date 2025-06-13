import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '[x]ble',
  description: '[x]ble',
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // Adjust weights as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
