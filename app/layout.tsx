import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Sites — Diseño web premium en Costa Rica",
  description:
    "Creamos sitios web modernos, rápidos y elegantes para negocios que quieren verse profesionales desde el primer clic.",
  keywords: ["diseño web", "Costa Rica", "landing page", "sitios web", "web design"],
  openGraph: {
    title: "Quantum Sites — Diseño web premium en Costa Rica",
    description:
      "Creamos sitios web modernos, rápidos y elegantes para negocios que quieren verse profesionales desde el primer clic.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
