
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle, LogIn, LayoutDashboard, Info, Tag, FileText, Menu, BookOpen, Users, Briefcase, Moon, Sun, ShoppingBag, ChevronDown, Lightbulb, Zap } from "lucide-react"; // Added Lightbulb and Zap
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const mainNavLinks = [
  // Explore Courses is now a DropdownMenu
  { href: "/pricing", label: "Pricing", icon: Tag },
  { href: "/docs", label: "Docs & Guides", icon: BookOpen }, // Consolidated Docs
  { href: "/about", label: "About Us", icon: Users },
];

// Example course structure for megamenu placeholder
const courseFields = [
  {
    name: "Technology Development",
    icon: Briefcase, // Using Briefcase for general Tech/Career Dev
    courses: [
      { title: "Python for Data Science", href: "/courses/python-ds" },
      { title: "Full-Stack Web Development", href: "/courses/full-stack-web" },
      { title: "Cybersecurity Fundamentals", href: "/courses/cybersec-intro" },
    ]
  },
  {
    name: "Business & Management",
    icon: LayoutDashboard, // Maintained for Business
    courses: [
      { title: "Executive Leadership Program", href: "/courses/exec-leadership" },
      { title: "Agile Project Management", href: "/courses/agile-pm" },
      { title: "Strategic Marketing", href: "/courses/strategic-marketing" },
    ]
  },
  {
    name: "AI Specializations",
    icon: Lightbulb, // Using Lightbulb specifically for AI
    courses: [
      { title: "Autonomous AI Agent Development", href: "/courses/ai-agent-dev" },
      { title: "Machine Learning Foundations", href: "/courses/ml-foundations" },
      { title: "Natural Language Processing", href: "/courses/nlp" },
    ]
  }
];


export default function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const isAuthenticated = false; // Placeholder

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setCurrentTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
         // Default to light theme if nothing is saved or value is invalid
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
       console.warn("Could not load theme preference from localStorage", error);
       document.documentElement.classList.remove("dark"); // Fallback to light
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    try {
      localStorage.setItem('lmdpro-theme', newTheme);
    } catch (error) {
      console.warn("Could not save theme preference to localStorage", error);
    }
  };

  return (
    <header className={cn(
      "sticky top-4 z-50 w-full max-w-5xl mx-auto rounded-xl shadow-lg",
      "bg-card" // Solid background for non-translucency
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <span className="text-2xl font-headline font-bold animated-text-gradient">LMDpro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                Explore Courses <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[500px] p-4" align="start"> {/* Wide content area */}
              <DropdownMenuLabel className="font-headline text-lg mb-2">Courses by Field</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseFields.map((field) => (
                  <DropdownMenuGroup key={field.name}>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
                      <field.icon className="h-4 w-4 text-primary" />
                      {field.name}
                    </div>
                    {field.courses.map((course) => (
                      <Link href={course.href} key={course.title} passHref legacyBehavior>
                        <DropdownMenuItem asChild>
                          <a className="text-xs text-muted-foreground hover:text-primary pl-6">{course.title}</a>
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </div>
               <DropdownMenuSeparator className="my-3" />
               <Link href="/courses" passHref legacyBehavior>
                <DropdownMenuItem asChild>
                  <a className="font-semibold text-primary hover:underline">View All Courses & Learning Paths &rarr;</a>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map(link => (
            <Link key={link.label} href={link.href} legacyBehavior>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
           <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle Theme">
            {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" passHref>
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/account?tab=profile" passHref>
                 <Button variant="ghost" size="icon" aria-label="Account">
                    <UserCircle className="h-5 w-5" />
                 </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register" passHref>
                <Button className="button-animated-gradient">Get Started Free</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
           <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle Theme">
            {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
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
                <Link href="/courses" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShoppingBag className="h-5 w-5" /> {/* Using ShoppingBag for Explore Courses */}
                  Explore Courses
                </Link>
                {mainNavLinks.map(link => (
                  <Link key={link.label} href={link.href} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2" />
                {isAuthenticated ? (
                    <>
                     <Link href="/dashboard" passHref>
                        <Button variant="outline" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                            <LayoutDashboard className="h-5 w-5"/> Dashboard
                        </Button>
                     </Link>
                     <Link href="/account?tab=profile" passHref>
                        <Button variant="ghost" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                            <UserCircle className="h-5 w-5" /> Account
                        </Button>
                     </Link>
                    </>
                ) : (
                    <>
                        <Link href="/login" passHref>
                        <Button variant="outline" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                            <LogIn className="h-5 w-5" /> Login
                        </Button>
                        </Link>
                        <Link href="/register" passHref>
                        <Button className="w-full button-animated-gradient justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                            Get Started Free
                        </Button>
                        </Link>
                    </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    