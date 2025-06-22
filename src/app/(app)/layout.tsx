
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
  SidebarMenuButton
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  LayoutDashboard,
  GraduationCap,
  Settings,
  UserCircle,
  Search,
  MessageSquare,
  StickyNote,
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
  Download,
  Sparkles,
  Languages,
  Send,
  FileVideo,
  LogOut,
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
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  { href: "/resume-builder", label: "Resume Builder", icon: ClipboardList },
  { href: "/academic-research", label: "Academic Research", icon: Library },
  { href: "/api-management", label: "API Management", icon: Network },
  { href: "/docs", label: "App Documentation", icon: Info }, 
  { href: "/account", label: "Account Settings", icon: Settings2 },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

interface AiMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

export default function AppLayout({ children: layoutChildren }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isMobile } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState("light"); 
  const [notepadContent, setNotepadContent] = React.useState("");
  const [aiChatMessages, setAiChatMessages] = React.useState<AiMessage[]>([{id: 'init', text: "Hello! How can I help you learn today?", sender: 'ai'}]);
  const [aiChatInput, setAiChatInput] = React.useState("");
  const { toast } = useToast();
  const [currentLanguage, setCurrentLanguage] = React.useState("English");
  const [isAiReplying, setIsAiReplying] = React.useState(false);

  React.useEffect(() => {
    // Set language on the HTML element for CSS targeting
    document.documentElement.lang = currentLanguage === 'Arabic' ? 'ar' : 'en';
    document.documentElement.dir = currentLanguage === 'Arabic' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

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
      
      const savedAiChat = localStorage.getItem('lmdpro-ai-chat');
      if(savedAiChat) {
          setAiChatMessages(JSON.parse(savedAiChat));
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
  
  const handleAiChatSubmit = () => {
    if(!aiChatInput.trim()) return;
    const newMessages: AiMessage[] = [...aiChatMessages, {id: Date.now().toString(), text: aiChatInput, sender: 'user'}];
    setAiChatMessages(newMessages);
    setAiChatInput("");
    setIsAiReplying(true);
    // Simulate AI response
    setTimeout(() => {
        const aiResponse: AiMessage = {id: (Date.now() + 1).toString(), text: "I'm processing your request... (This is a placeholder AI response).", sender: 'ai'};
        const updatedMessages = [...newMessages, aiResponse];
        setAiChatMessages(updatedMessages);
        try {
            localStorage.setItem('lmdpro-ai-chat', JSON.stringify(updatedMessages));
        } catch (error) {
            console.warn("Could not save AI chat history to localStorage", error);
        }
        setIsAiReplying(false);
    }, 1500);
  };

  const askAiAboutNotepad = () => {
    if (notepadContent.trim().length < 10) {
        toast({title: "Notepad Too Short", description: "Please write more in your notepad before asking AI.", variant: "destructive"});
        return;
    }
    toast({ title: "AI Analysis (Notepad)", description: "AI is analyzing your notes... (This is a placeholder for the Genkit flow call)"});
  };

  const handleLogout = () => {
    // In a real app, clear auth tokens, etc.
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
              <span className="text-xl font-headline font-bold animated-text-gradient group-data-[collapsible=icon]:hidden">LMDpro</span>
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
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="@user" />
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

      {/* Right Tools Sidebar */}
      <aside className="hidden lg:flex flex-col w-14 border-l bg-card py-4 items-center justify-between">
          <div className="flex flex-col items-center space-y-4">
              <Popover>
                  <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" title="AI Assistant">
                          <Sparkles className="h-6 w-6"/>
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent side="left" align="end" className="w-96 flex flex-col h-[70vh] p-0">
                      <CardHeader className="flex-shrink-0">
                          <CardTitle className="text-lg font-headline flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> AI Assistant</CardTitle>
                          <CardDescription>Your intelligent learning partner.</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-y-auto p-4 space-y-4" style={{backgroundImage: isAiReplying ? `url(/BG-Loading.gif)`: 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          {aiChatMessages.map(msg => (
                              <div key={msg.id} className={cn("flex gap-2 text-sm", msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                                  {msg.sender === 'ai' && <Avatar className="h-7 w-7"><AvatarFallback>AI</AvatarFallback></Avatar>}
                                  <p className={cn("max-w-[85%] rounded-lg px-3 py-2", msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>{msg.text}</p>
                              </div>
                          ))}
                      </CardContent>
                      <CardFooter className="pt-4 border-t">
                          <div className="flex w-full items-center gap-2">
                              <Input placeholder="Ask anything..." value={aiChatInput} onChange={(e) => setAiChatInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleAiChatSubmit()} disabled={isAiReplying}/>
                              <Button size="icon" onClick={handleAiChatSubmit} disabled={isAiReplying}><Send className="h-4 w-4"/></Button>
                          </div>
                      </CardFooter>
                  </PopoverContent>
              </Popover>

              <Popover>
                  <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" title="Notepad">
                          <StickyNote className="h-6 w-6"/>
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent side="left" align="end" className="w-96 p-0">
                      <Card className="flex-grow flex flex-col min-h-0 shadow-md rounded-xl border-0">
                          <CardHeader>
                              <CardTitle className="text-lg font-headline flex items-center gap-2"><StickyNote className="h-5 w-5 text-primary" /> Notepad</CardTitle>
                              <CardDescription>Notes are saved automatically in your browser.</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col min-h-0">
                              <Textarea 
                                  placeholder="Take notes here... they will persist across pages." 
                                  className="flex-1 h-full min-h-[250px] focus-gradient-outline"
                                  value={notepadContent}
                                  onChange={handleNotepadChange}
                              />
                          </CardContent>
                          <CardFooter className="gap-2 pt-4 border-t">
                              <Button variant="outline" size="sm" className="flex-1" onClick={exportNotepadContent} title="Export notes as a .txt file">
                                  <Download className="h-4 w-4 mr-1"/> Export
                              </Button>
                              <Button size="sm" className="flex-1 button-animated-gradient" onClick={askAiAboutNotepad}>
                                  <Sparkles className="h-4 w-4 mr-1"/> Ask AI
                              </Button>
                          </CardFooter>
                      </Card>
                  </PopoverContent>
              </Popover>
          </div>
          
          <div className="flex flex-col items-center">
              <Popover>
                  <PopoverTrigger asChild>
                        <Button variant="ghost" size="icon" title="Help & Support">
                          <HelpCircle className="h-6 w-6"/>
                      </Button>
                  </PopoverTrigger>
                    <PopoverContent side="left" align="end" className="w-96">
                      <h4 className="font-semibold mb-2">Need Help?</h4>
                      <p className="text-sm text-muted-foreground mb-4">Our AI can help with most platform questions, or you can visit our full support center.</p>
                      <Link href="/support"><Button className="w-full">Go to Support Center</Button></Link>
                    </PopoverContent>
              </Popover>
          </div>
      </aside>
    </div>
  );
}
