import type { Metadata } from "next";
import { Gilda_Display } from 'next/font/google';
import "./globals.css";
import "./card-nav.css";

const gildaDisplay = Gilda_Display({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-gilda',
});

export const metadata: Metadata = {
  title: "Loft Mobile Golf Studio | Premium Golf Simulator Experience",
  description: "Experience world-class golf simulation with Loft's mobile golf studio. Professional-grade technology that comes to you, featuring 18+ championship courses and instant setup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gildaDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}

