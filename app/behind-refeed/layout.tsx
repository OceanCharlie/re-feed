import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami & Inovasi PKM-KC Untar | Tim Pengembang ReFeed',
  description:
    'Kenali visi, teknologi, dan tim mahasiswa Universitas Tarumanagara di balik ReFeed: Inovasi circular economy penyelamat surplus makanan yang didanai Kemendikbudristek PKM-KC.',
  keywords: [
    'Tentang ReFeed',
    'Tim ReFeed',
    'PKM-KC Untar ReFeed',
    'Universitas Tarumanagara',
    'Kemendikbudristek PKM',
    'Inovasi Food Waste Indonesia',
    'Ocean Charlie Gunawan',
    'Circular Economy Indonesia',
  ],
  alternates: {
    canonical: 'https://refeed-indonesia.com/behind-refeed/',
  },
  openGraph: {
    title: 'Tentang ReFeed - Inovasi Circular Economy PKM-KC Untar',
    description:
      'Kenali tim mahasiswa Universitas Tarumanagara dan dedikasi di balik platform penyelamat surplus makanan ReFeed.',
    url: 'https://refeed-indonesia.com/behind-refeed/',
    type: 'article',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1920,
        height: 1080,
        type: 'image/png',
        alt: 'Tim ReFeed Indonesia - Behind the Scenes PKM-KC Untar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang ReFeed - Inovasi Circular Economy PKM-KC Untar',
    description:
      'Kenali tim mahasiswa Universitas Tarumanagara dan dedikasi di balik platform penyelamat surplus makanan ReFeed.',
    site: '@pkmkc.refeed',
    creator: '@pkmkc.refeed',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1920,
        height: 1080,
        alt: 'Tim ReFeed Indonesia - Behind the Scenes PKM-KC Untar',
      },
    ],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://refeed-indonesia.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tentang ReFeed',
      item: 'https://refeed-indonesia.com/behind-refeed/',
    },
  ],
};

export default function BehindReFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
