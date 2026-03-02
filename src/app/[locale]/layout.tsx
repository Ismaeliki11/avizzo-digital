import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfitDisplay = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avizzo Digital - Marketing Agency",
  description: "Um Novo Jeito De Conectar Seu Condomínio Em Belém. Agência de comunicação especializada em experiência moderna e clara.",
  icons: {
    icon: "/favicon_fixed_large.webp"
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        className={`${interSans.variable} ${outfitDisplay.variable} antialiased selection:bg-[#1BCC94]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

