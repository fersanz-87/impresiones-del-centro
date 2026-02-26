import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Copias e Impresiones Del Centro | Abasolo, Guanajuato",
  description:
    "Tu centro de copiado e impresión de confianza en Abasolo, Guanajuato. Copias, impresiones, diseño gráfico, engargolados y más. Calidad, rapidez y los mejores precios.",
  keywords: [
    "copias",
    "impresiones",
    "Abasolo",
    "Guanajuato",
    "diseño gráfico",
    "engargolados",
    "copias a color",
    "imprenta",
    "invitaciones",
    "tarjetas de presentación",
  ],
  openGraph: {
    title: "Copias e Impresiones Del Centro | Abasolo, Guanajuato",
    description:
      "Tu centro de copiado e impresión de confianza en Abasolo, Guanajuato. Calidad, rapidez y los mejores precios.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
