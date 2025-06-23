
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn, Tag, Menu, BookOpen, Users, Briefcase, Moon, Sun, ChevronDown, Lightbulb, Zap, HelpCircle, UserCircle, LogOut, GraduationCap, Info } from "lucide-react";
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
import { getAllCourses } from "@/lib/course-data";
import Image from 'next/image';

const allCourses = getAllCourses();

const courseFields = [
  {
    name: "Core Foundations",
    icon: GraduationCap,
    courses: allCourses.filter(c => ['FBS_L1', 'AMC_L2', 'MGMT_INTRO', 'LEAD_FOUND'].includes(c.id)).slice(0, 4)
  },
  {
    name: "Technology & AI",
    icon: Zap,
    courses: allCourses.filter(c => ['AI_AGENT_DEV', 'CS_L3', 'DS_L3', 'PYTHON_DS'].includes(c.id)).slice(0, 4)
  },
  {
    name: "Business & Strategy",
    icon: Briefcase,
    courses: allCourses.filter(c => ['AB_L3', 'ENT_L3', 'FA_L3', 'OMS_L3'].includes(c.id)).slice(0, 4)
  },
  {
    name: "Executive Leadership",
    icon: Users,
    courses: allCourses.filter(c => ['GM_L5_CAP', 'HR_L5_CAP', 'CY_L5_CAP', 'FA_L5_CAP'].includes(c.id)).slice(0, 4)
  }
];


export default function PublicHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    // Theme initialization
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme') || 'light';
      setCurrentTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } catch (error) {
       console.warn("Could not load theme preference from localStorage", error);
       document.documentElement.classList.remove("dark");
    };
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
  
   useEffect(() => {
    const loggedIn = typeof window !== 'undefined' ? localStorage.getItem('lmdpro_auth_status') === 'true' : false;
    setIsAuthenticated(loggedIn);
  }, []);

  const handleLogout = () => {
     if (typeof window !== 'undefined') {
        localStorage.removeItem('lmdpro_auth_status');
        localStorage.removeItem('lmdpro_user_is_admin');
     }
     setIsAuthenticated(false);
     window.location.href = "/login";
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/LMDpro Logo Black.svg" alt="LMDpro Logo" width={40} height={40} className="dark:hidden" />
          <Image src="/LMDpro Logo White.svg" alt="LMDpro Logo" width={40} height={40} className="hidden dark:block" />
          <span className="text-2xl font-headline font-bold text-foreground">LMDpro</span>
        </Link>
        
        {/* Floating Nav for Desktop */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-background/50 backdrop-blur-sm rounded-full border shadow-lg p-1">
            <nav className="flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-foreground/5 dark:hover:bg-background/20 rounded-full h-9 px-4">
                    Explore Courses <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[850px] p-4 rounded-xl" align="center">
                  <DropdownMenuLabel className="font-headline text-lg mb-2">Courses by Field</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {courseFields.map((field) => (
                      <DropdownMenuGroup key={field.name}>
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
                          <field.icon className="h-4 w-4 text-primary" />
                          {field.name}
                        </div>
                        {field.courses.map((course) => (
                          <DropdownMenuItem key={course.id} asChild>
                            <Link href={`/courses/${course.id}`} className="text-xs text-muted-foreground hover:text-primary pl-6 cursor-pointer">
                              {course.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    ))}
                  </div>
                   <DropdownMenuSeparator className="my-3" />
                    <DropdownMenuItem asChild>
                      <Link href="/courses" className="font-semibold text-primary hover:underline cursor-pointer">
                          View All Courses & Learning Paths &rarr;
                      </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/pricing" passHref>
                  <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-foreground/5 dark:hover:bg-background/20 rounded-full h-9 px-4">
                    Pricing
                  </Button>
                </Link>
                <Link href="/docs" passHref>
                  <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-foreground/5 dark:hover:bg-background/20 rounded-full h-9 px-4">
                    Docs
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button variant="ghost" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-foreground/5 dark:hover:bg-background/20 rounded-full h-9 px-4">
                    About Us
                  </Button>
                </Link>
            </nav>
          </div>
        </div>


        <div className="hidden md:flex items-center gap-3">
           <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle Theme">
            {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                  <UserCircle className="h-6 w-6 text-muted-foreground"/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl">
                {isAuthenticated ? (
                    <>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <Link href="/dashboard" passHref><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                      <Link href="/account?tab=profile" passHref><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <Link href="/login" passHref><DropdownMenuItem>Login</DropdownMenuItem></Link>
                      <Link href="/register" passHref><DropdownMenuItem>Sign Up</DropdownMenuItem></Link>
                    </>
                  )}
              </DropdownMenuContent>
            </DropdownMenu>
          
            {!isAuthenticated && (
                 <Link href="/register" passHref>
                    <Button className="button-animated-gradient rounded-full">Get Started Free</Button>
                  </Link>
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
                  <Image src="/LMDpro Logo Black.svg" alt="LMDpro Logo" width={28} height={28} className="dark:hidden" />
                  <Image src="/LMDpro Logo White.svg" alt="LMDpro Logo" width={28} height={28} className="hidden dark:block" />
                </Link>
                <Link href="/courses" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  <BookOpen className="h-5 w-5" />
                  Explore Courses
                </Link>
                <Link href="/pricing" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  <Tag className="h-5 w-5" />
                  Pricing
                </Link>
                <Link href="/docs" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  <Info className="h-5 w-5" />
                  Docs
                </Link>
                 <Link href="/support" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <HelpCircle className="h-5 w-5" />
                    Support
                </Link>
                 <Link href="/about" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                    <Users className="h-5 w-5" />
                    About Us
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
                    <Button variant="ghost" className="w-full justify-start text-lg gap-3" onClick={handleLogout}>
                        <LogOut className="h-5 w-5" /> Logout
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
