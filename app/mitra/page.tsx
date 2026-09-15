'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DaftarMitraPage from '../daftar-mitra/page';

export default function MitraRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/daftar-mitra');
  }, [router]);

  return <DaftarMitraPage />;
}
