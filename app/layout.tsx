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
  metadataBase: new URL("https://refeed-indonesia.com"),
  title: {
    default: "ReFeed - Selamatkan Makanan Lezat, Hemat Hingga 70% & Jaga Bumi",
    template: "%s | ReFeed Indonesia",
  },
  description:
    "Aplikasi mobile resmi ReFeed: Hubungkan restoran, bakery, dan supermarket favoritmu untuk menyelamatkan surplus makanan lezat diskon 50-70%, penukaran sampah organik ke Waste Hub, dan aksi nyata nol sampah makanan (Zero Food Waste) di Indonesia.",
  keywords: [
    "ReFeed",
    "ReFeed Indonesia",
    "Aplikasi Surplus Makanan",
    "Food Waste Indonesia",
    "Surprise Bag Makanan",
    "Aplikasi Penyelamat Makanan",
    "Zero Food Waste",
    "Waste Hub Jakarta",
    "Makanan Diskon 70%",
    "Mitra ReFeed Resto",
    "PKM-KC ReFeed",
    "Circular Economy Makanan",
    "Eco Points Indonesia",
    "Kuliner Hemat Ramah Lingkungan",
  ],
  authors: [{ name: "ReFeed Indonesia", url: "https://refeed-indonesia.com" }],
  creator: "Tim PKM-KC ReFeed Universitas Tarumanagara",
  publisher: "ReFeed Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://refeed-indonesia.com/",
    languages: {
      "id-ID": "https://refeed-indonesia.com/",
      "x-default": "https://refeed-indonesia.com/",
    },
  },
  openGraph: {
    title: "ReFeed - Save Food, Share Good, Protect Our Planet",
    description:
      "Selamatkan makanan surplus berkualitas dari bakery & restoran favorit dengan potongan harga hingga 70% di aplikasi ReFeed.",
    type: "website",
    locale: "id_ID",
    url: "https://refeed-indonesia.com/",
    siteName: "ReFeed Indonesia",
    images: [
      {
        url: "/images/nature_story_banner.webp",
        width: 1200,
        height: 630,
        alt: "ReFeed Indonesia - Gerakan Penyelamat Surplus Makanan & Circular Economy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReFeed - Solusi Penyelamat Surplus Makanan Indonesia",
    description:
      "Hemat hingga 70% belanja kuliner & kurangi jejak karbon bersama aplikasi mobile ReFeed.",
    creator: "@pkmkc.refeed",
    images: ["/images/nature_story_banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "cm8M5zlfkecT_bE5fpywJ30VGvJAHbvgvAOUhiqWa7U",
  },
  other: {
    // GEO (Geographic & Location-based SEO)
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta, Indonesia",
    "geo.position": "-6.175392;106.827153",
    "ICBM": "-6.175392, 106.827153",
    "target-country": "ID",
    "distribution": "Global",
    "rating": "General",
  },
};

// AEO & GEO Structured Data (JSON-LD Knowledge Graph)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://refeed-indonesia.com/#website",
      "url": "https://refeed-indonesia.com",
      "name": "ReFeed Indonesia",
      "description":
        "Platform digital circular economy penyelamat surplus makanan dan pengolahan limbah organik terintegrasi di Indonesia.",
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://refeed-indonesia.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://refeed-indonesia.com/#organization",
      "name": "ReFeed Indonesia",
      "url": "https://refeed-indonesia.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://refeed-indonesia.com/favicon.ico",
        "caption": "ReFeed Indonesia Logo",
      },
      "description":
        "Inovasi platform digital penyelamat surplus makanan dan pengelolaan limbah organik berbasis circular economy oleh mahasiswa Universitas Tarumanagara yang didanai Kemendikbudristek PKM-KC.",
      "email": "pkmkc.refeed@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jakarta Barat",
        "addressRegion": "DKI Jakarta",
        "addressCountry": "ID",
      },
      "sameAs": ["https://www.instagram.com/pkmkc.refeed/"],
      "sponsor": [
        {
          "@type": "Organization",
          "name": "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia",
          "url": "https://kemdikbud.go.id",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Universitas Tarumanagara",
          "url": "https://untar.ac.id",
        },
      ],
    },
    {
      "@type": "MobileApplication",
      "@id": "https://refeed-indonesia.com/#app",
      "name": "ReFeed",
      "operatingSystem": "Android, iOS",
      "applicationCategory": "Food & Drink, LifestyleApplication",
      "description":
        "Aplikasi penyelamat makanan surplus dari restoran, bakery, dan kafe dengan diskon 50-70% serta drop point limbah organik ke Waste Hub untuk ditukar Eco-Points.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "IDR",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://refeed-indonesia.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa itu ReFeed dan bagaimana cara kerjanya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "ReFeed adalah aplikasi mobile penyelamat surplus makanan dan pengelolaan limbah organik. Konsumen dapat membeli makanan lezat layak makan dari restoran & bakery mitra dengan diskon 50-70%, serta menyalurkan sampah organik ke Waste Hub untuk diolah jadi energi terbarukan.",
          },
        },
        {
          "@type": "Question",
          "name": "Apakah makanan surplus di ReFeed terjamin aman dan higienis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Sangat aman 100%. Makanan yang dijual di ReFeed adalah kelebihan produksi atau stok display hari itu yang belum terjual, BUKAN sisa piring atau makanan basi. Semua mitra wajib mematuhi standar higienitas dan keamanan pangan.",
          },
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara menyetor sampah organik ke Waste Hub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              'Buka menu "Waste" di aplikasi ReFeed, pilih Drop Point terdekat atau jadwalkan penjemputan. Anda akan menerima Eco-Points setelah setoran ditimbang dan diverifikasi oleh tim Waste Hub.',
          },
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara mendaftarkan usaha kuliner menjadi mitra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              'Pendaftaran merchant gratis dan tanpa biaya bulanan. Klik tombol "Gabung Mitra" di website ini, dan tim ReFeed akan menghubungi via WhatsApp dalam 1x24 jam untuk aktivasi.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col text-[#16241C] font-sans"
        suppressHydrationWarning
      >
        <div className="bg-mesh-canvas" aria-hidden="true" />
        {/* Structured Data for SEO, AEO, & GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}