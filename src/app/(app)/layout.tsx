
"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  GraduationCap,
  FileText,
  BookOpen,
  LifeBuoy,
  Settings,
  UserCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  KeyRound, // Kept for potential future use if different from ShieldCheck
  Briefcase, // For My Learning
  MessageSquare,
  StickyNote,
  // BookCopy, // Replaced by FileCode or ScrollText
  ClipboardList, // Can be used for tasks/assessments if needed
  HelpCircle,
  Lightbulb, 
  Video,
  Bell,
  Moon,
  Sun,
  Users, 
  FileCode, // For Academic Research
  ShieldCheck, // For API Management
  ScrollText, // For App Documentations
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-learning", label: "My Learning", icon: Briefcase },
  { href: "/learning-paths", label: "Learning Paths", icon: Lightbulb },
  { href: "/courses", label: "Course Catalog", icon: GraduationCap },
  { href: "/video-creation", label: "Video Creation", icon: Video },
  { href: "/resume-builder", label: "Resume Builder", icon: FileText },
  { href: "/academic-research", label: "Academic Research", icon: FileCode },
  { href: "/api-management", label: "API Management", icon: ShieldCheck },
  { href: "/docs", label: "App Documentations", icon: ScrollText },
  { href: "/account", label: "Account Settings", icon: Settings },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { open, toggleSidebar, isMobile, state } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isSidebarFixedOpen, setIsSidebarFixedOpen] = React.useState(false); // For pinning sidebar
  const [currentTheme, setCurrentTheme] = React.useState("light"); // Default theme

  // Determine effective sidebar open state for responsive label hiding
  const effectiveSidebarOpen = isMobile ? open : (isSidebarFixedOpen || state === 'expanded');

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
  
  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setCurrentTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
    } catch (error) {
       console.warn("Could not load theme preference from localStorage", error);
    }
  }, []);


  return (
    <div className={cn("flex min-h-screen app-area-background")}>
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="icon" // Default to icon-only view, hover expands
        className="border-r"
      >
        <SidebarHeader className="p-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 group">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <h1 className={cn(
                "text-2xl font-headline font-bold animated-text-gradient",
                (!effectiveSidebarOpen && !isMobile && !isSidebarFixedOpen && state === 'collapsed') && "hidden"
              )}>
              LMDpro
            </h1>
          </Link>
          {/* Pin/Unpin button for desktop */}
          {!isMobile && (
             <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarFixedOpen(!isSidebarFixedOpen)}
              className={cn((state === 'collapsed' && !isSidebarFixedOpen) && "hidden group-hover/sidebar-wrapper:flex", (state === 'expanded' || isSidebarFixedOpen) && "flex" )}
              title={isSidebarFixedOpen ? "Unpin Sidebar (Icon View)" : "Pin Sidebar (Expanded View)"}
            >
              {isSidebarFixedOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
            </Button>
          )}
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} passHref asChild>
                  <SidebarMenuButton
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                  >
                      <item.icon />
                      <span className={cn(
                        (!effectiveSidebarOpen && !isMobile && !isSidebarFixedOpen && state === 'collapsed') && "hidden"
                      )}>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex flex-1">
        <div className="flex flex-col flex-1">
            <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="flex items-center gap-2">
                {/* Mobile Menu Toggle */}
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
                {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span className="sr-only">Toggle Menu</span>
                </Button>

                {/* Desktop Sidebar Toggle (when not pinned) */}
                <div className="hidden md:block">
                    <SidebarTrigger onClick={() => setIsSidebarFixedOpen(false)} />
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className={cn("sm:flex", isSearchExpanded && "hidden")}
                    aria-label="Open search"
                >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <Input
                    type="search"
                    placeholder="Search LMDpro..."
                    className={cn(
                    "transition-all duration-300 ease-in-out",
                    isSearchExpanded ? "w-60 sm:w-72 opacity-100 px-3 py-2 h-10" : "w-0 opacity-0 p-0 border-none",
                    !isSearchExpanded && !isMobile && "sm:opacity-100 sm:w-52 sm:px-3 sm:py-2 sm:h-10 sm:border" // Default visible on larger screens
                    )}
                    onFocus={() => !isMobile && setIsSearchExpanded(true)} // Expand on focus for desktop
                    onBlur={() => setIsSearchExpanded(false)} // Collapse on blur
                />
                </div>
            </div>

            <div className="flex items-center gap-3">
                 <Button variant="ghost" size="icon" title="Notifications">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={toggleTheme} title="Toggle Theme">
                    {currentTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    <span className="sr-only">Toggle Theme</span>
                  </Button>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="@user" data-ai-hint="user avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/account?tab=profile" passHref>
                        <DropdownMenuItem><UserCircle className="mr-2"/>Profile</DropdownMenuItem>
                    </Link>
                    <Link href="/account" passHref>
                         <DropdownMenuItem><Settings className="mr-2"/>Account Settings</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem> {/* Add logout functionality later */}
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
            </main>
        </div>

        {/* Right-hand Utility Column */}
        <aside className="hidden lg:flex flex-col w-72 border-l bg-card p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
            {/* AI Assistant Panel */}
            <Card className="flex-shrink-0">
                <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" /> AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                        Your intelligent learning partner. Ask questions about course content, get summaries, or brainstorm ideas for your projects.
                    </p>
                     <Button variant="outline" size="sm" className="w-full">Chat with AI</Button>
                </CardContent>
            </Card>

            {/* Notepad Panel */}
            <Card className="flex-grow flex flex-col min-h-0">
                <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center gap-2"><StickyNote className="h-5 w-5 text-primary" /> Notepad</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col min-h-0">
                    <Textarea 
                        placeholder="Take notes here... they will persist across pages. Use for quick thoughts, reminders, or drafting content." 
                        className="flex-1 h-full min-h-[150px] focus-gradient-outline" 
                    />
                </CardContent>
                <CardFooter className="gap-2 pt-4 flex-col sm:flex-row">
                    <Button variant="outline" size="sm" className="flex-1 w-full sm:w-auto">Export Notes (.txt)</Button>
                    <Button size="sm" className="flex-1 button-animated-gradient w-full sm:w-auto">Ask AI About Notes</Button>
                </CardFooter>
            </Card>
            
            {/* Support Chat Panel */}
            <Card className="flex-shrink-0 mt-auto">
                <CardHeader>
                    <CardTitle className="text-base font-headline flex items-center gap-2"><LifeBuoy className="h-5 w-5 text-primary"/> Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">Need help? Chat with our AI Support for instant assistance with technical issues, billing, or platform navigation.</p>
                    <Button variant="outline" size="sm" className="w-full">Open Support Chat</Button>
                </CardContent>
            </Card>
        </aside>

      </SidebarInset>
    </div>
  );
}
