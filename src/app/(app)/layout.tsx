
"use client";

import React, { useState, useEffect } from "react";
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
  BookOpen,
  Settings,
  UserCircle,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  KeyRound, 
  Briefcase, 
  MessageSquare,
  StickyNote,
  HelpCircle,
  Lightbulb, 
  FileVideo,
  Bell,
  Moon,
  Sun,
  Users, 
  FileCode, 
  ShieldCheck, 
  ScrollText,
  ClipboardList,
  Settings2,
  BookMarked,
  Brain,
  Library,
  Network,
  Info,
  Download,
  Share2
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
import { useToast } from "@/hooks/use-toast";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-learning", label: "My Learning", icon: BookMarked },
  { href: "/learning-paths", label: "Learning Paths", icon: Lightbulb },
  { href: "/courses", label: "Course Catalog", icon: GraduationCap },
  { href: "/video-creation", label: "Video Creation", icon: FileVideo },
  { href: "/resume-builder", label: "Resume Builder", icon: ClipboardList },
  { href: "/academic-research", label: "Academic Research", icon: Library },
  { href: "/api-management", label: "API Management", icon: Network },
  { href: "/docs", label: "App Documentation", icon: Info }, 
  { href: "/account", label: "Account Settings", icon: Settings2 },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function AppLayout({ children: layoutChildren }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { open, toggleSidebar, isMobile } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState("light"); 
  const [notepadContent, setNotepadContent] = React.useState("");
  const { toast } = useToast();

  React.useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('lmdpro-theme');
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setCurrentTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      }
      const savedNotepadContent = localStorage.getItem('lmdpro-notepad');
      if (savedNotepadContent) {
        setNotepadContent(savedNotepadContent);
      }
    } catch (error) {
       console.warn("Error accessing localStorage for theme or notepad:", error);
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

  const handleNotepadChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;
    setNotepadContent(newContent);
    try {
      localStorage.setItem('lmdpro-notepad', newContent);
    } catch (error) {
      console.warn("Could not save notepad content to localStorage", error);
    }
  };

  const exportNotepadContent = () => {
    if (!notepadContent.trim()) {
      toast({title: "Notepad Empty", description: "There is no content to export.", variant: "destructive"});
      return;
    }
    const blob = new Blob([notepadContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'lmdpro_notes.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    toast({ title: "Notepad Exported", description: "Your notes have been downloaded as lmdpro_notes.txt."});
  };

  const askAiAboutNotepad = () => {
    if (notepadContent.trim().length < 10) {
        toast({title: "Notepad Too Short", description: "Please write more in your notepad before asking AI.", variant: "destructive"});
        return;
    }
    toast({ title: "AI Analysis (Notepad)", description: "AI is analyzing your notes... (This is a placeholder for the Genkit flow call)"});
  };

  const handleLogout = () => {
    window.location.href = "/login"; 
  };


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
            <h1 className="text-2xl font-headline font-bold animated-text-gradient group-data-[collapsible=icon]:hidden">
              LMDpro
            </h1>
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
      </Sidebar>

      <SidebarInset className="flex flex-1">
        <div className="flex flex-col flex-1 min-w-0">
            <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-card/80 backdrop-blur-sm px-4 md:px-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
                {open ? <PanelLeftClose /> : <PanelLeftOpen />}
                <span className="sr-only">Toggle Menu</span>
                </Button>

                <div className="hidden md:block">
                    <SidebarTrigger />
                </div>

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
                        <AvatarImage src="" alt="@user" />
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
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem> 
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </header>
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8">
            {layoutChildren}
            </main>
        </div>

        <aside className="hidden lg:flex flex-col w-72 border-l bg-card p-4 space-y-4 sticky top-0 h-screen overflow-y-auto">
            <Card className="flex-shrink-0 shadow-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" /> AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                        Your intelligent learning partner. Ask questions about course content, get summaries, or brainstorm ideas for your projects.
                    </p>
                     <Button variant="outline" size="sm" className="w-full" onClick={() => toast({title: "AI Assistant", description: "AI Assistant chat opened (placeholder)."})}>Chat with AI</Button>
                </CardContent>
            </Card>

            <Card className="flex-grow flex flex-col min-h-0 shadow-md rounded-xl">
                <CardHeader>
                    <CardTitle className="text-lg font-headline flex items-center gap-2"><StickyNote className="h-5 w-5 text-primary" /> Notepad</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col min-h-0">
                    <Textarea 
                        placeholder="Take notes here... they will persist across pages." 
                        className="flex-1 h-full min-h-[150px] focus-gradient-outline"
                        value={notepadContent}
                        onChange={handleNotepadChange}
                    />
                </CardContent>
                <CardFooter className="gap-2 pt-4 flex-col sm:flex-row">
                    <Button variant="outline" size="sm" className="flex-1 w-full sm:w-auto" onClick={exportNotepadContent} title="Export notes as a .txt file">
                        <Download className="h-4 w-4 mr-1"/> Export
                    </Button>
                    <Button size="sm" className="flex-1 button-animated-gradient w-full sm:w-auto" onClick={askAiAboutNotepad}>
                        <Sparkles className="h-4 w-4 mr-1"/> Ask AI
                    </Button>
                </CardFooter>
            </Card>
            
            <Button 
                variant="outline" 
                size="lg" 
                className="w-full mt-auto flex-shrink-0 button-animated-gradient"
                onClick={() => toast({title: "AI Support", description:"AI Support Chat opened (placeholder). For detailed help, navigate to the Help & Support page."})}
            >
                <HelpCircle className="mr-2 h-5 w-5"/> AI Support Chat
            </Button>
        </aside>

      </SidebarInset>
    </div>
  );
}
