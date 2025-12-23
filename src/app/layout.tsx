import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marz Software | Desarrollo de Software a Medida",
  description: "Marz Software - Soluciones de software innovadoras y desarrollo a medida para impulsar tu negocio al siguiente nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
