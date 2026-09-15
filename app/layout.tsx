import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#105e3a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://refeed-indonesia.com"),
  manifest: "/manifest.json",
  title: {
    default: "Re-Feed Indonesia - Selamatkan Makanan Lezat, Hemat Hingga 70% & Jaga Bumi",
    template: "%s | Re-Feed Indonesia",
  },
  description:
    "Aplikasi mobile resmi Re-Feed: Hubungkan restoran, bakery, dan supermarket favoritmu untuk menyelamatkan surplus makanan lezat diskon 50-70%, penukaran sampah organik ke Waste Hub, dan aksi nyata nol sampah makanan (Zero Food Waste) di Indonesia.",
  keywords: [
    "Re-Feed",
    "Re-Feed Indonesia",
    "ReFeed",
    "ReFeed Indonesia",
    "Aplikasi Surplus Makanan",
    "Food Waste Indonesia",
    "Surprise Bag Makanan",
    "Aplikasi Penyelamat Makanan",
    "Zero Food Waste",
    "Waste Hub Jakarta",
    "Makanan Diskon 70%",
    "Mitra Re-Feed Resto",
    "PKM-KC Re-Feed",
    "Circular Economy Makanan",
    "Eco Points Indonesia",
    "Kuliner Hemat Ramah Lingkungan",
    "Ocean Charlie Gunawan",
    "Chandra Wijaya",
    "Jessica",
    "Akemi Belva Sutanto",
    "Danniel",
    "Tony Untar",
    "SDGs Indonesia",
    "Sustainable Development Goals",
    "SDG 12 Food Waste",
    "SDG 2 Zero Hunger",
    "SDG 13 Climate Action",
    "SDG 7 Energi Terbarukan",
  ],
  authors: [
    { name: "Ocean Charlie Gunawan", url: "https://www.linkedin.com/in/oceancharliegunawan/" },
    { name: "Chandra Wijaya", url: "https://www.linkedin.com/in/chandra-wijaya" },
    { name: "Jessica", url: "https://www.linkedin.com/in/jessica-jessica" },
    { name: "Akemi Belva Sutanto", url: "https://www.linkedin.com/in/akemi-belva-sutanto-064061296/" },
    { name: "Danniel", url: "https://www.linkedin.com/in/danniel-a5a918252/" },
    { name: "Tony, Ph.D.", url: "https://www.linkedin.com/in/tony-lie-b57a195/" },
    { name: "Re-Feed Indonesia", url: "https://refeed-indonesia.com" },
  ],
  creator: "Tim PKM-KC Re-Feed Universitas Tarumanagara",
  publisher: "Re-Feed Indonesia",
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
    title: "Re-Feed - Save Food, Share Good, Protect Our Planet",
    description:
      "Selamatkan makanan surplus berkualitas dari bakery & restoran favorit dengan potongan harga hingga 70% di aplikasi Re-Feed.",
    type: "website",
    locale: "id_ID",
    url: "https://refeed-indonesia.com/",
    siteName: "Re-Feed Indonesia",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1920,
        height: 1080,
        type: "image/png",
        alt: "Re-Feed Indonesia - Integrated Circular Food System & Resource Recovery Application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Feed - Solusi Penyelamat Surplus Makanan Indonesia",
    description:
      "Hemat hingga 70% belanja kuliner & kurangi jejak karbon bersama aplikasi mobile Re-Feed.",
    site: "@pkmkc.refeed",
    creator: "@pkmkc.refeed",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1920,
        height: 1080,
        alt: "Re-Feed Indonesia - Integrated Circular Food System & Resource Recovery Application",
      },
    ],
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
      "url": "https://refeed-indonesia.com/",
      "name": "Re-Feed Indonesia",
      "alternateName": [
        "ReFeed Indonesia",
        "Re-Feed",
        "ReFeed",
        "refeed-indonesia.com"
      ],
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
      "name": "Re-Feed Indonesia",
      "alternateName": [
        "ReFeed Indonesia",
        "Re-Feed",
        "ReFeed"
      ],
      "url": "https://refeed-indonesia.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://refeed-indonesia.com/favicon.ico",
        "caption": "Re-Feed Indonesia Logo",
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
      "member": [
        {
          "@type": "Person",
          "name": "Ocean Charlie Gunawan",
          "jobTitle": "Front End Developer",
          "sameAs": "https://www.linkedin.com/in/oceancharliegunawan/",
          "image": "https://refeed-indonesia.com/images/ocean.webp"
        },
        {
          "@type": "Person",
          "name": "Chandra Wijaya",
          "jobTitle": "UI/UX Designer",
          "sameAs": "https://www.linkedin.com/in/chandra-wijaya",
          "image": "https://refeed-indonesia.com/images/chandra.webp"
        },
        {
          "@type": "Person",
          "name": "Jessica",
          "jobTitle": "Project Manager",
          "sameAs": "https://www.linkedin.com/in/jessica-jessica",
          "image": "https://refeed-indonesia.com/images/jes.webp"
        },
        {
          "@type": "Person",
          "name": "Akemi Belva Sutanto",
          "jobTitle": "Integration Engineer",
          "sameAs": "https://www.linkedin.com/in/akemi-belva-sutanto-064061296/",
          "image": "https://refeed-indonesia.com/images/akemi.webp"
        },
        {
          "@type": "Person",
          "name": "Danniel",
          "jobTitle": "Back End Developer",
          "sameAs": "https://www.linkedin.com/in/danniel-a5a918252/",
          "image": "https://refeed-indonesia.com/images/danniel.webp"
        },
        {
          "@type": "Person",
          "name": "Tony, Ph.D.",
          "jobTitle": "Strategic Advisor & Dosen Pembimbing",
          "sameAs": "https://www.linkedin.com/in/tony-lie-b57a195/",
          "image": "https://refeed-indonesia.com/images/tony.webp"
        }
      ],
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
      "knowsAbout": [
        "Sustainable Development Goals (SDGs)",
        "SDG 2 Zero Hunger",
        "SDG 7 Clean Energy",
        "SDG 12 Responsible Consumption",
        "SDG 13 Climate Action",
        "Food Waste Reduction",
        "Circular Economy"
      ],
    },
    {
      "@type": "MobileApplication",
      "@id": "https://refeed-indonesia.com/#app",
      "name": "Re-Feed",
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
          "name": "Apa itu Re-Feed dan bagaimana cara kerjanya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Re-Feed adalah aplikasi mobile penyelamat surplus makanan dan pengelolaan limbah organik. Konsumen dapat membeli makanan lezat layak makan dari restoran & bakery mitra dengan diskon 50-70%, serta menyalurkan sampah organik ke Waste Hub untuk diolah jadi energi terbarukan.",
          },
        },
        {
          "@type": "Question",
          "name": "Apakah makanan surplus di Re-Feed terjamin aman dan higienis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Sangat aman 100%. Makanan yang dijual di Re-Feed adalah kelebihan produksi atau stok display hari itu yang belum terjual, BUKAN sisa piring atau makanan basi. Semua mitra wajib mematuhi standar higienitas dan keamanan pangan.",
          },
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara menyetor sampah organik ke Waste Hub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              'Buka menu "Waste" di aplikasi Re-Feed, pilih Drop Point terdekat atau jadwalkan penjemputan. Anda akan menerima Eco-Points setelah setoran ditimbang dan diverifikasi oleh tim Waste Hub.',
          },
        },
        {
          "@type": "Question",
          "name": "Bagaimana cara mendaftarkan usaha kuliner menjadi mitra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              'Pendaftaran merchant gratis dan tanpa biaya bulanan. Klik tombol "Gabung Mitra" di website ini, dan tim Re-Feed akan menghubungi via WhatsApp dalam 1x24 jam untuk aktivasi.',
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