import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReFeed - Selamatkan Makanan Lezat, Hemat Hingga 70% & Jaga Bumi",
  description: "Aplikasi mobile resmi ReFeed: Hubungkan restoran, bakery, dan supermarket favoritmu untuk menyelamatkan makanan berlebih lezat dengan diskon hingga 70%, Waste Hub, dan donasi komunitas.",
  keywords: [
    "ReFeed",
    "Food Waste Indonesia",
    "Surplus Food",
    "Surprise Bag",
    "Aplikasi Penyelamat Makanan",
    "Zero Waste Cooking",
    "Waste Hub",
    "Food Hero",
    "Mitra ReFeed",
  ],
  authors: [{ name: "ReFeed Indonesia" }],
  openGraph: {
    title: "ReFeed - Save Food, Share Good, Protect Our Planet",
    description: "Selamatkan makanan surplus berkualitas dari bakery & restoran favorit dengan potongan harga hingga 70% di aplikasi ReFeed.",
    type: "website",
    locale: "id_ID",
    url: "https://refeed.id",
    siteName: "ReFeed Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReFeed - Solusi Penyelamat Surplus Makanan",
    description: "Hemat hingga 70% belanja kuliner & kurangi jejak karbon bersama aplikasi mobile ReFeed.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col text-[#16241C] font-sans"
        suppressHydrationWarning
      >
        <div className="bg-mesh-canvas" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
