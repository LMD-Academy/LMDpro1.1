
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, Tag, Menu, BookOpen, Users, Briefcase, Moon, Sun, ChevronDown, Lightbulb, Zap, Languages, HelpCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mainNavLinks = [
  { href: "/pricing", label: "Pricing", icon: Tag },
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/about", label: "About Us", icon: Users },
];

const courseFields = [
  {
    name: "Technology Development",
    icon: Zap, 
    courses: [
      { title: "Python for Data Science", href: "/courses?category=TECH_DEV&course=PYTHON_DS" },
      { title: "Autonomous AI Agent Development", href: "/courses?category=AI_SPEC&course=AI_AGENT_DEV" },
      { title: "Cybersecurity Specialization L3", href: "/courses?category=PROF_L3&course=CY_L3" },
    ]
  },
  {
    name: "Business & Management",
    icon: Briefcase,
    courses: [
      { title: "Executive Leadership Capstone L5", href: "/courses?category=EXEC_L5&course=GM_L5_CAP" },
      { title: "Agile Business Specialization L3", href: "/courses?category=PROF_L3&course=AB_L3" },
      { title: "Foundational Business Skills L1", href: "/courses?category=CORE_L1&course=FBS_L1" },
    ]
  },
  {
    name: "Leadership Fundamentals",
    icon: Lightbulb,
    courses: [
      { title: "Foundations of Effective Leadership", href: "/courses?category=LEAD_MGMT_FUND&course=LEAD_FOUND" },
      { title: "Applied Management & Communication L2", href: "/courses?category=CORE_L2&course=AMC_L2" },
      { title: "General Management Advanced L4", href: "/courses?category=SENIOR_L4&course=GM_L4" },
    ]
  }
];


export default function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Placeholder, manage with auth context
  const [currentLanguage, setCurrentLanguage] = useState("English"); // Language state

  useEffect(() => {
    // Theme initialization
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setCurrentTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
       console.warn("Could not load theme preference from localStorage", error);
       document.documentElement.classList.remove("dark");
    };
    // Auth state check placeholder
    // const loggedIn = localStorage.getItem('lmdpro-auth-token'); // Example check
    // setIsAuthenticated(!!loggedIn);
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
      "sticky top-2 md:top-4 z-50 w-[calc(100%-1rem)] md:w-full md:max-w-6xl mx-auto rounded-xl shadow-lg",
      "bg-card/80 backdrop-blur-sm"
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
            <DropdownMenuContent className="w-[550px] p-4" align="start">
              <DropdownMenuLabel className="font-headline text-lg mb-2">Courses by Field</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courseFields.map((field) => (
                  <DropdownMenuGroup key={field.name}>
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
                      <field.icon className="h-4 w-4 text-primary" />
                      {field.name}
                    </div>
                    {field.courses.map((course) => (
                      <DropdownMenuItem key={course.title} asChild>
                        <Link href={course.href} className="text-xs text-muted-foreground hover:text-primary pl-6 cursor-pointer">
                          {course.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ))}
              </div>
               <DropdownMenuSeparator className="my-3" />
               <Link href="/courses" passHref>
                <DropdownMenuItem asChild>
                  <a className="font-semibold text-primary hover:underline cursor-pointer">View All Courses & Learning Paths &rarr;</a>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map(link => (
            <Link key={link.label} href={link.href} passHref>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" title="Change Language">
                    <Languages className="h-5 w-5"/>
                    <span className="sr-only">Change Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrentLanguage("English")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentLanguage("Arabic")}>العربية (Arabic)</DropdownMenuItem>
            </DropdownMenuContent>
           </DropdownMenu>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="@user" data-ai-hint="user avatar"/>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard" passHref><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                <Link href="/account?tab=profile" passHref><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                <Link href="/account" passHref><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {setIsAuthenticated(false);}}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register" passHref>
                <Button className="button-animated-gradient animate-glow">Get Started Free</Button>
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
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for the LMDpro platform.</SheetDescription>
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  <span className="text-xl font-headline font-bold animated-text-gradient">LMDpro</span>
                </Link>
                <Link href="/courses" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  <BookOpen className="h-5 w-5" />
                  Explore Courses
                </Link>
                {mainNavLinks.map(link => (
                  <Link key={link.label} href={link.href} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <link.icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                ))}
                 <Link href="/support" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <HelpCircle className="h-5 w-5" />
                    Support
                </Link>
                <hr className="my-2" />
                {isAuthenticated ? (
                    <>
                     <Link href="/dashboard" passHref>
                        <Button variant="outline" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                           Dashboard
                        </Button>
                     </Link>
                     <Link href="/account?tab=profile" passHref>
                        <Button variant="ghost" className="w-full justify-start text-lg gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                           Account
                        </Button>
                     </Link>
                     <Button variant="ghost" className="w-full justify-start text-lg gap-3" onClick={() => {setIsAuthenticated(false); setIsMobileMenuOpen(false);}}>
                        Logout
                    </Button>
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
