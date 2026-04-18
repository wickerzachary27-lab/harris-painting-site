import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harris Painting LLC — Eugene, Oregon Painters",
  description:
    "Licensed interior and exterior painting in Eugene, Springfield, and Lane County. Free color consultations, fair pricing, careful work. CCB# 198322.",
  metadataBase: new URL("https://harrispaintingllc.com"),
  openGraph: {
    title: "Harris Painting LLC — Eugene, Oregon Painters",
    description:
      "Turn a house into a beautiful home. Interior, exterior, cabinets, staining, and pressure washing across Lane County.",
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
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
