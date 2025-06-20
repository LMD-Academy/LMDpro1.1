"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle, LogIn, LayoutDashboard, Info, Tag, FileText, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pricing", label: "Pricing", icon: Tag },
  { href: "/api-docs", label: "API Docs", icon: FileText },
  { href: "/about", label: "About Us", icon: Info },
];

export default function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <span className="text-2xl font-headline font-bold animated-text-gradient">LMDpro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" passHref>
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register" passHref>
            <Button className="button-animated-gradient">Get Started</Button>
          </Link>
          <Link href="/account" passHref>
             <Button variant="outline" size="icon" aria-label="Account">
                <UserCircle className="h-5 w-5" />
             </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  <span className="text-xl font-headline font-bold animated-text-gradient">LMDpro</span>
                </Link>
                {navLinks.map(link => (
                  <Link key={link.label} href={link.href} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2" />
                <Link href="/login" passHref>
                  <Button variant="outline" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <LogIn className="h-5 w-5" /> Login
                  </Button>
                </Link>
                <Link href="/register" passHref>
                  <Button className="w-full button-animated-gradient justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Button>
                </Link>
                 <Link href="/account" passHref>
                  <Button variant="ghost" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <UserCircle className="h-5 w-5" /> Account
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
