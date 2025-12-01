import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

