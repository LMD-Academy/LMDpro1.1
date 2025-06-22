
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AppPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard page when the root of the authenticated app is accessed.
    router.replace('/dashboard');
  }, [router]);

  // Return a loading state or null while redirecting
  return null; 
}
