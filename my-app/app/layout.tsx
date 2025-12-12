import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marz Software | Desarrollo de Software para PYMES y Empresas",
  description:
    "Creamos software para PYMES y empresas. Sistemas de gestión, páginas web, aplicaciones e integraciones con metodologías ágiles.",
  keywords:
    "desarrollo software, PYMES, sistemas gestión, páginas web, aplicaciones, integraciones",
  openGraph: {
    title: "Marz Software",
    description:
      "Creemos que el buen software sigue existiendo pero está en marte",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
