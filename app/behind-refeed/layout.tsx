import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami & Tim Pengembang Re-Feed Indonesia | Mahasiswa & Dosen FTI UNTAR',
  description:
    'Kenali profil lengkap tim pengembang inovasi Re-Feed Indonesia: Ocean Charlie Gunawan, Chandra Wijaya, Jessica, Akemi Belva Sutanto, Danniel, dan dosen pembimbing Tony, Ph.D. dari Fakultas Teknologi Informasi Universitas Tarumanagara (UNTAR) yang didanai Kemendikbudristek PKM-KC.',
  keywords: [
    'Ocean Charlie Gunawan',
    'Ocean Charlie',
    'Chandra Wijaya',
    'Jessica',
    'Jessica Re-Feed',
    'Akemi Belva Sutanto',
    'Akemi Belva',
    'Danniel',
    'Danniel Re-Feed',
    'Tony Untar',
    'Tony Ph.D Untar',
    'Tony FTI Untar',
    'Tony Lie Untar',
    'Tim Pengembang Re-Feed',
    'Tim Re-Feed Indonesia',
    'Mahasiswa UNTAR PKM-KC',
    'PKM-KC Untar Re-Feed',
    'Fakultas Teknologi Informasi Universitas Tarumanagara',
    'Front End Developer Ocean Charlie Gunawan',
    'UI UX Designer Chandra Wijaya',
    'Project Manager Jessica',
    'Integration Engineer Akemi Belva Sutanto',
    'Back End Developer Danniel',
    'Dosen Pembimbing Tony Ph.D',
    'Kemendikbudristek PKM',
    'Circular Economy Indonesia',
    'Inovasi Food Waste Indonesia',
  ],
  authors: [
    { name: 'Ocean Charlie Gunawan', url: 'https://www.linkedin.com/in/oceancharliegunawan/' },
    { name: 'Chandra Wijaya', url: 'https://www.linkedin.com/in/chandra-wijaya' },
    { name: 'Jessica', url: 'https://www.linkedin.com/in/jessica-jessica' },
    { name: 'Akemi Belva Sutanto', url: 'https://www.linkedin.com/in/akemi-belva-sutanto-064061296/' },
    { name: 'Danniel', url: 'https://www.linkedin.com/in/danniel-a5a918252/' },
    { name: 'Tony, Ph.D.', url: 'https://www.linkedin.com/in/tony-lie-b57a195/' },
  ],
  alternates: {
    canonical: 'https://refeed-indonesia.com/behind-refeed/',
  },
  openGraph: {
    title: 'Tim Pengembang Re-Feed Indonesia - Inovasi Circular Economy PKM-KC Untar',
    description:
      'Kenali profil Ocean Charlie Gunawan, Chandra Wijaya, Jessica, Akemi Belva Sutanto, Danniel, dan Tony, Ph.D. di balik Re-Feed Indonesia.',
    url: 'https://refeed-indonesia.com/behind-refeed/',
    type: 'profile',
    siteName: 'Re-Feed Indonesia',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1920,
        height: 1080,
        type: 'image/png',
        alt: 'Tim Pengembang Re-Feed Indonesia - Behind the Scenes PKM-KC Untar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tim Pengembang Re-Feed Indonesia - Inovasi Circular Economy PKM-KC Untar',
    description:
      'Profil lengkap mahasiswa FTI Universitas Tarumanagara dan dosen pembimbing di balik aplikasi Re-Feed Indonesia.',
    site: '@pkmkc.refeed',
    creator: '@pkmkc.refeed',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1920,
        height: 1080,
        alt: 'Tim Pengembang Re-Feed Indonesia - Behind the Scenes PKM-KC Untar',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'Tentang Tim Re-Feed',
          item: 'https://refeed-indonesia.com/behind-refeed/',
        },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://refeed-indonesia.com/behind-refeed/#webpage',
      url: 'https://refeed-indonesia.com/behind-refeed/',
      name: 'Tentang Kami & Tim Pengembang Re-Feed Indonesia',
      description:
        'Profil dan portofolio tim pengembang inovasi PKM-KC Universitas Tarumanagara di balik aplikasi Re-Feed Indonesia.',
      mainEntity: {
        '@type': 'ItemList',
        name: 'Daftar Tim Pengembang & Penasihat Re-Feed Indonesia',
        itemListElement: [
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#ocean-charlie-gunawan',
            name: 'Ocean Charlie Gunawan',
            alternateName: 'Ocean Charlie',
            jobTitle: 'Front End Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Re-Feed Indonesia',
              url: 'https://refeed-indonesia.com/',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/ocean.webp',
            sameAs: 'https://www.linkedin.com/in/oceancharliegunawan/',
            knowsAbout: [
              'React Native',
              'Next.js',
              'Expo',
              'Tailwind CSS',
              'Front End Development',
              'Mobile App Development',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#ocean-charlie-gunawan',
          },
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#chandra-wijaya',
            name: 'Chandra Wijaya',
            jobTitle: 'UI/UX Designer',
            worksFor: {
              '@type': 'Organization',
              name: 'Re-Feed Indonesia',
              url: 'https://refeed-indonesia.com/',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/chandra.webp',
            sameAs: 'https://www.linkedin.com/in/chandra-wijaya',
            knowsAbout: [
              'UI/UX Design',
              'Figma',
              'Design System',
              'User Flow',
              'Mobile UI Design',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#chandra-wijaya',
          },
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#jessica',
            name: 'Jessica',
            jobTitle: 'Project Manager',
            worksFor: {
              '@type': 'Organization',
              name: 'Re-Feed Indonesia',
              url: 'https://refeed-indonesia.com/',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/jes.webp',
            sameAs: 'https://www.linkedin.com/in/jessica-jessica',
            knowsAbout: [
              'Project Management',
              'Product Roadmap',
              'Agile Development',
              'Operations',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#jessica',
          },
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#akemi-belva-sutanto',
            name: 'Akemi Belva Sutanto',
            alternateName: 'Akemi Belva',
            jobTitle: 'Integration Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Re-Feed Indonesia',
              url: 'https://refeed-indonesia.com/',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/akemi.webp',
            sameAs: 'https://www.linkedin.com/in/akemi-belva-sutanto-064061296/',
            knowsAbout: [
              'API Pipeline',
              'Cloud Services',
              'Data Synchronization',
              'System Integration',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#akemi-belva-sutanto',
          },
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#danniel',
            name: 'Danniel',
            jobTitle: 'Back End Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'Re-Feed Indonesia',
              url: 'https://refeed-indonesia.com/',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/danniel.webp',
            sameAs: 'https://www.linkedin.com/in/danniel-a5a918252/',
            knowsAbout: [
              'Spring Boot',
              'MySQL',
              'REST API',
              'Backend Architecture',
              'Java',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#danniel',
          },
          {
            '@type': 'Person',
            '@id': 'https://refeed-indonesia.com/behind-refeed/#tony-lie',
            name: 'Tony, Ph.D.',
            alternateName: ['Ir. Tony, Ph.D.', 'Tony Lie'],
            jobTitle: 'Strategic Advisor & Dosen Pembimbing PKM-KC',
            worksFor: {
              '@type': 'EducationalOrganization',
              name: 'Fakultas Teknologi Informasi Universitas Tarumanagara',
              url: 'https://untar.ac.id',
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
            },
            affiliation: {
              '@type': 'EducationalOrganization',
              name: 'Universitas Tarumanagara',
            },
            image: 'https://refeed-indonesia.com/images/tony.webp',
            sameAs: 'https://www.linkedin.com/in/tony-lie-b57a195/',
            knowsAbout: [
              'Information Technology',
              'Strategic Advisory',
              'Circular Economy',
              'Academic Research',
            ],
            url: 'https://refeed-indonesia.com/behind-refeed/#tony-lie',
          },
        ],
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
