
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
  FileText as ResumeIcon,
  BookOpen,
  LifeBuoy,
  Settings,
  UserCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  KeyRound,
  Briefcase,
  MessageSquare,
  StickyNote,
  BookCopy,
  ClipboardList,
  HelpCircle,
  Lightbulb, 
  Video, 
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
  { href: "/learning-paths", label: "Learning Paths", icon: Lightbulb },
  { href: "/courses", label: "Course Catalog", icon: GraduationCap },
  { href: "/video-creation", label: "Video Creation", icon: Video },
  { href: "/resume-builder", label: "Resume Builder", icon: ResumeIcon },
  { href: "/my-learning", label: "My Learning", icon: Briefcase }, 
  { href: "/academic-research", label: "Academic Research", icon: BookCopy },
  { href: "/api-management", label: "API Management", icon: KeyRound },
  { href: "/docs", label: "Documentations", icon: BookOpen }, 
  { href: "/account", label: "Account Settings", icon: Settings },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { open, toggleSidebar, isMobile, state } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [isSidebarFixedOpen, setIsSidebarFixedOpen] = React.useState(false);

  const effectiveSidebarOpen = isMobile ? open : (isSidebarFixedOpen || state === 'expanded');


  return (
    <div className={cn("flex min-h-screen app-area-background")}>
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="icon"
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
          {!isMobile && (
             <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarFixedOpen(!isSidebarFixedOpen)}
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
                <Link href={item.href} asChild>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                  >
                    <a>
                      <item.icon />
                      <span className={cn(
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

      <SidebarInset className="flex flex-1">
        <div className="flex flex-col flex-1">
            <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
                {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span className="sr-only">Toggle Menu</span>
                </Button>

                <div className="hidden md:block">
                    <SidebarTrigger onClick={() => setIsSidebarFixedOpen(false)} />
                </div>

                <div className="relative flex items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className={cn("sm:flex", isSearchExpanded && "hidden")}
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
                    !isSearchExpanded && !isMobile && "sm:opacity-100 sm:w-52 sm:px-3 sm:py-2 sm:h-10 sm:border"
                    )}
                    onFocus={() => !isMobile && setIsSearchExpanded(true)}
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

        <aside className="hidden lg:flex flex-col w-72 border-l bg-card p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
            <div className="flex-1 space-y-4">
                 {/* AI Assistant Panel */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" /> AI Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">AI chat and tools will appear here. (Inspired by Google Gemini)</p>
                         <Button variant="outline" size="sm" className="w-full mt-2">Ask AI</Button>
                    </CardContent>
                </Card>

                {/* Notepad */}
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

            {/* Support Panel */}
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
