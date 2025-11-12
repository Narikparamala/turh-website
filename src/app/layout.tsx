import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Roboto, Oswald } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: 'Tirupati Universal Repair Hub',
  description: 'Expert repair services for AC, TV, Fridge, Washing Machines and more. We also offer training programs.',
  keywords: 'electronics repair, AC repair, TV repair, fridge repair, washing machine repair, Tirupati, apprenticeship, electronics training',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
