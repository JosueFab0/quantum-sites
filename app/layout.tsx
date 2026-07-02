import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { headers } from "next/headers";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // nonce is generated per-request in middleware.ts and passed via x-nonce header.
  // Next.js applies it automatically to its own inline hydration scripts.
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" {...(nonce ? { nonce } : {})}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
