import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'LMDpro - AI-Powered Learning & Career Growth',
  description: 'Personalized learning paths, AI video creation, intelligent resume building, and 24/7 AI support to supercharge your career.',
  icons: {
    icon: '/LMDpro Favi White.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;500&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased flex flex-col min-h-screen bg-background")}>
        <SidebarProvider defaultOpen={true}>
          <div className="relative z-10 flex flex-col flex-1">
            {children}
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
