
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SidebarProvider defaultOpen={true}>
          {children}
      </SidebarProvider>
    </LanguageProvider>
  );
}
