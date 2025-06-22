
"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenu,
  useSidebar,
  SidebarTrigger,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  GraduationCap,
  Settings,
  UserCircle,
  Search,
  HelpCircle,
  Lightbulb,
  Bell,
  Moon,
  Sun,
  ClipboardList,
  Settings2,
  BookMarked,
  Library,
  Network,
  Info,
  LogOut,
  Languages,
  Film
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import RightToolBar from "@/components/layout/RightToolBar";
import { useLanguage } from "@/context/LanguageContext"; 

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-learning", label: "My Learning", icon: BookMarked },
  { href: "/learning-paths", label: "Learning Paths", icon: Lightbulb },
  { href: "/courses", label: "Course Catalog", icon: GraduationCap },
  { href: "/video-creation", label: "Video Creation", icon: Film },
  { href: "/resume-builder", label: "Resume Builder", icon: ClipboardList },
  { href: "/academic-research", label: "Academic Research", icon: Library },
  { href: "/api-management", label: "API Management", icon: Network },
  { href: "/docs", label: "App Documentation", icon: Info }, 
  { href: "/account", label: "Account Settings", icon: Settings2 },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function AppLayout({ children: layoutChildren }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMobile } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const { language, setLanguage } = useLanguage(); 

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setCurrentTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
    } catch (error) {
       console.warn("Could not access localStorage:", error);
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

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('lmdpro_auth_status');
    }
    window.location.href = "/"; 
  };

  return (
    <div className="flex flex-1 overflow-hidden relative">
      <Sidebar
        side="left"
        variant="sidebar"
        collapsible="icon" 
        className="border-r"
      >
        <SidebarHeader className="p-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 group">
              <img src="/LMDpro Logo Black.svg" alt="LMDpro Logo" className="h-10 w-auto dark:hidden" />
              <img src="/LMDpro Logo White.svg" alt="LMDpro Logo" className="h-10 w-auto hidden dark:block" />
              <span className="text-xl font-headline font-bold text-foreground group-data-[collapsible=icon]:hidden">LMDpro</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                  >
                      <item.icon />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
         <SidebarFooter className="p-2">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                        <LogOut />
                        <span className="group-data-[collapsible=icon]:hidden">Logout</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="flex items-center gap-2">
                <SidebarTrigger />
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
                      "transition-all duration-300 ease-in-out focus-gradient-outline",
                      isSearchExpanded ? "w-60 sm:w-72 opacity-100 px-3 py-2 h-10" : "w-0 opacity-0 p-0 border-none",
                      !isSearchExpanded && !isMobile && "sm:opacity-100 sm:w-52 sm:px-3 sm:py-2 sm:h-10 sm:border" 
                      )}
                      onFocus={() => !isMobile && setIsSearchExpanded(true)} 
                      onBlur={() => setIsSearchExpanded(false)} 
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
                        <AvatarImage src="/img/user-avatar.png" alt="@user" data-ai-hint="user avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard" passHref>
                        <DropdownMenuItem><UserCircle className="mr-2"/>Profile</DropdownMenuItem>
                    </Link>
                    <Link href="/account" passHref>
                          <DropdownMenuItem><Settings className="mr-2"/>Account Settings</DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}><LogOut className="mr-2"/>Logout</DropdownMenuItem> 
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8">
          <div className="min-w-0">
            {layoutChildren}
          </div>
        </main>
      </div>
      <RightToolBar />
    </div>
  );
}
