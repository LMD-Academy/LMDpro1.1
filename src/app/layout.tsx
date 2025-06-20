import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider } from '@/components/ui/sidebar';
import AnimatedGradientBackground from '@/components/layout/AnimatedGradientBackground';
// PublicHeader and PublicFooter removed from root layout
// They will be imported by specific public pages (/, /login, /register, etc.)
// The (app) group layout will handle the authenticated app shell.
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'LMDpro - AI-Powered Learning & Career Growth',
  description: 'Personalized learning paths, AI video creation, intelligent resume building, and 24/7 AI support to supercharge your career.',
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
        {/* Updated to include all weights as specified in globals.css for Inter and Space Grotesk */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased flex flex-col min-h-screen")}>
        {/* AnimatedGradientBackground will apply to public pages by default. 
            App layout can override its background. */}
        <AnimatedGradientBackground /> 
        <SidebarProvider defaultOpen={true}> {/* SidebarProvider wraps everything for context availability */}
          <div className="relative z-10 flex flex-col flex-1">
            {children}
          </div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
