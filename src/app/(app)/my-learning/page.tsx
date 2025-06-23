
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MyLearningRedirect() {
  const router = useRouter();

  useEffect(() => {
    // This page is merged into the dashboard, so we redirect there.
    router.replace('/dashboard');
  }, [router]);

  return null;
}
