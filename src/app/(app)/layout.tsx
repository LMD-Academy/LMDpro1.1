
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
  FileText as ResumeIcon, // Renamed to avoid conflict if FileText is used elsewhere
  BookOpen,
  LifeBuoy,
  Settings,
  UserCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  KeyRound,
  Briefcase, // For My Learning
  MessageSquare, // For AI Support Chatbot in future
  StickyNote, // For Notepad in future
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
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
// Placeholder for right-hand AI Assistant and Notepad components
// import AiAssistantPanel from '@/components/layout/AiAssistantPanel';
// import NotepadPanel from '@/components/layout/NotepadPanel';

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-learning", label: "My Learning", icon: Briefcase },
  { href: "/courses", label: "Course Catalog", icon: GraduationCap },
  { href: "/resume-builder", label: "Resume Builder", icon: ResumeIcon },
  { href: "/api-management", label: "API Management", icon: KeyRound },
  { href: "/settings", label: "Settings", icon: Settings }, // This will map to /app/settings/page.tsx
  { href: "/support", label: "Help & Support", icon: LifeBuoy },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { open, toggleSidebar, isMobile, state } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isSidebarFixedOpen, setIsSidebarFixedOpen] = React.useState(false); // Default to icon-only
  
  // Calculate effective sidebar state for hiding text
  // For desktop: text visible if fixed open OR if temporarily expanded by hover/click
  // For mobile: text visible if mobile menu is open
  const effectiveSidebarOpen = isMobile ? open : (isSidebarFixedOpen || state === 'expanded');


  return (
    <div className={cn("flex min-h-screen app-area-background")}>
      <Sidebar 
        side="left" 
        variant="sidebar" 
        collapsible="icon" 
        className="border-r"
        // The sidebar component's internal state handles open/collapsed based on interactions
        // We use `isSidebarFixedOpen` for the persistent toggle button logic
      >
        <SidebarHeader className="p-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 group"> {/* Changed href to /dashboard */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <h1 className={cn(
                "text-2xl font-headline font-bold animated-text-gradient",
                 // Hide text if sidebar is effectively collapsed on desktop and not fixed open
                (!effectiveSidebarOpen && !isMobile && !isSidebarFixedOpen && state === 'collapsed') && "hidden"
              )}>
              LMDpro
            </h1>
          </Link>
          {!isMobile && ( // Show toggle only on desktop
             <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSidebarFixedOpen(!isSidebarFixedOpen)}
              // Hide toggle if sidebar is icon-only and not fixed-open (to prevent it from showing briefly on hover-expand)
              className={cn((state === 'collapsed' && !isSidebarFixedOpen) && "hidden group-hover/sidebar-wrapper:flex", (state === 'expanded' || isSidebarFixedOpen) && "flex" )}
              title={isSidebarFixedOpen ? "Pin Sidebar (Icon View)" : "Unpin Sidebar (Expanded View)"}
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
                    asChild // Ensures SidebarMenuButton handles the <a> tag rendering via Slot
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                  >
                    {/* The <a> tag is now the direct child as expected by Slot with asChild */}
                    <a>
                      <item.icon />
                      <span className={cn(
                        // Hide text if sidebar is effectively collapsed on desktop and not fixed open
                        (!effectiveSidebarOpen && !isMobile && !isSidebarFixedOpen && state === 'collapsed') && "hidden"
                      )}>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex flex-1"> {/* Changed to flex flex-1 for right panel */}
        <div className="flex flex-col flex-1"> {/* Main content area wrapper */}
            <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="flex items-center gap-2">
                {/* Mobile menu toggle */}
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
                {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span className="sr-only">Toggle Menu</span>
                </Button>
                
                {/* Desktop sidebar collapse/expand trigger (library default) */}
                <div className="hidden md:block">
                    <SidebarTrigger onClick={() => setIsSidebarFixedOpen(false)} />
                </div>

                {/* Search Bar */}
                <div className="relative flex items-center">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className={cn("sm:flex", isSearchExpanded && "hidden")} // Show on sm always if not expanded
                >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                <Input 
                    type="search" 
                    placeholder="Search courses, docs..." 
                    className={cn(
                    "transition-all duration-300 ease-in-out",
                    isSearchExpanded ? "w-60 sm:w-72 opacity-100 px-3 py-2 h-10" : "w-0 opacity-0 p-0 border-none",
                    !isSearchExpanded && !isMobile && "sm:opacity-100 sm:w-52 sm:px-3 sm:py-2 sm:h-10 sm:border" // Default visible on larger screens
                    )}
                    onFocus={() => !isMobile && setIsSearchExpanded(true)} // Expand on focus for desktop
                    onBlur={() => setIsSearchExpanded(false)}
                />
                </div>
            </div>
            
            <div className="flex items-center gap-4">
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
                    <Link href="/account?tab=subscription" passHref>
                         <DropdownMenuItem><Settings className="mr-2"/>Account Settings</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
            </main>
        </div>
        
        {/* Right-hand Narrow Column (Notepad & AI Assistant) - Placeholder */}
        <aside className="hidden lg:flex flex-col w-72 border-l bg-card p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
            <div className="flex-1 space-y-4">
                 {/* AI Assistant Panel Placeholder */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" /> AI Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">AI chat and tools will appear here. (Inspired by Google Gemini)</p>
                         <Button variant="outline" size="sm" className="w-full mt-2">Ask AI</Button>
                    </CardContent>
                </Card>

                {/* Notepad Panel Placeholder */}
                <Card className="flex-grow flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg font-headline flex items-center gap-2"><StickyNote className="h-5 w-5 text-primary" /> Notepad</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <Textarea placeholder="Take notes here... they will persist across pages." className="h-full min-h-[200px] focus-gradient-outline" />
                    </CardContent>
                    <CardFooter className="gap-2">
                        <Button variant="outline" size="sm" className="flex-1">Export Notes</Button>
                        <Button size="sm" className="flex-1 button-animated-gradient">Learn More</Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Help & Support Chat (bottom of right panel) Placeholder */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-base font-headline flex items-center gap-2"><LifeBuoy className="h-5 w-5 text-primary"/> Support</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">Need help? Chat with our AI Support.</p>
                    <Button variant="outline" size="sm" className="w-full">Open Support Chat</Button>
                </CardContent>
            </Card>
        </aside>

      </SidebarInset>
    </div>
  );
}
