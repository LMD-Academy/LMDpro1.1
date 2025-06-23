
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquare, Book, Sparkles, HelpCircle, Send, Loader2, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { supportChat, SupportChatOutput } from "@/ai/flows/support-chat";
import { analyzeNotes } from "@/ai/flows/analyze-notes";


interface ChatMessage {
  role: "user" | "model";
  content: string;
}

export default function RightToolBar() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([{ role: "model", content: "Hello! I'm your LMDpro AI Assistant. How can I help you learn today?" }]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  const [notes, setNotes] = useState("");
  const [isNotesLoading, setIsNotesLoading] = useState(false);
  const [noteAnalysis, setNoteAnalysis] = useState("");

  const { toast } = useToast();
  const chatScrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem("lmdpro-notepad");
      if (savedNotes) {
        setNotes(savedNotes);
      }
    } catch (error) {
        console.warn("Could not access localStorage for notepad:", error);
    }
  }, []);

  const handleSaveNotes = () => {
    try {
        localStorage.setItem("lmdpro-notepad", notes);
        toast({ title: "Notes Saved!", description: "Your notes have been saved locally." });
    } catch (error) {
        toast({ title: "Save Failed", description: "Could not save notes to local storage.", variant: "destructive" });
    }
  };
  
  const scrollToBottom = () => {
    if (chatScrollAreaRef.current) {
        const scrollViewport = chatScrollAreaRef.current.querySelector('div');
        if (scrollViewport) {
          scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isChatLoading]);

  const handleSendChatMessage = async () => {
    if (!chatInput.trim()) return;

    const newMessages: ChatMessage[] = [...chatMessages, { role: "user", content: chatInput }];
    setChatMessages(newMessages);
    const currentQuery = chatInput;
    setChatInput("");
    setIsChatLoading(true);
    
    try {
      const history = newMessages.slice(1).map(m => ({ role: m.role, content: m.content }));
      const result: SupportChatOutput = await supportChat({ query: currentQuery, history });
      setChatMessages(prev => [...prev, { role: "model", content: result.response }]);
    } catch (error) {
      console.error("AI Assistant error:", error);
      setChatMessages(prev => [...prev, { role: "model", content: "I'm having trouble connecting right now. Please try again later." }]);
      toast({ title: "AI Error", description: "Could not get a response from the AI assistant.", variant: "destructive" });
    } finally {
      setIsChatLoading(false);
    }
  };
  
  const handleAnalyzeNotes = async () => {
      if (!notes.trim()) {
          toast({ title: "Empty Notes", description: "Please write some notes before asking for an analysis.", variant: "destructive"});
          return;
      }
      setIsNotesLoading(true);
      setNoteAnalysis("");
      try {
          const result = await analyzeNotes({ notes });
          setNoteAnalysis(result.analysis);
      } catch (error) {
          console.error("Note analysis error:", error);
          toast({ title: "Analysis Failed", description: "The AI could not analyze your notes.", variant: "destructive" });
      } finally {
          setIsNotesLoading(false);
      }
  }

  const toolbarItems = [
    {
        id: 'assistant',
        icon: MessageSquare,
        tooltip: 'AI Assistant',
        content: (
            <Card className="flex-1 flex flex-col h-full shadow-md w-full">
             <CardHeader className="p-3 border-b">
                <CardTitle className="font-headline text-base">AI Assistant</CardTitle>
             </CardHeader>
             <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="h-full p-3" ref={chatScrollAreaRef}>
                    <div className="space-y-4 pr-3">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className={cn("flex items-start gap-2", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                        <p className={cn("text-sm p-2 rounded-lg max-w-[85%]", msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                          {msg.content}
                        </p>
                      </div>
                    ))}
                    {isChatLoading && (
                        <div className="flex items-start gap-2 justify-start">
                            <p className="text-sm p-2 rounded-lg bg-muted italic">AI is thinking...</p>
                        </div>
                    )}
                    </div>
                </ScrollArea>
             </CardContent>
             <CardFooter className="p-2 border-t">
                <div className="flex w-full items-center gap-2">
                    <Input 
                      placeholder="Ask anything..." 
                      className="h-9 focus-gradient-outline"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && !isChatLoading && handleSendChatMessage()}
                      disabled={isChatLoading}
                    />
                    <Button size="icon" className="h-9 w-9" onClick={handleSendChatMessage} disabled={isChatLoading}>
                        <Send className="h-4 w-4"/>
                    </Button>
                </div>
             </CardFooter>
           </Card>
        )
    },
    {
        id: 'notepad',
        icon: Book,
        tooltip: 'Notepad',
        content: (
            <Card className="flex-1 flex flex-col h-full shadow-md w-full">
                <CardHeader className="p-3 border-b">
                    <CardTitle className="font-headline text-base">Notepad</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                    <Textarea 
                      placeholder="Jot down your thoughts, ideas, or key takeaways here..."
                      className="w-full h-full border-0 rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                </CardContent>
                {noteAnalysis && (
                    <CardContent className="p-3 border-t">
                        <p className="text-xs font-semibold mb-1 text-primary">AI Insights:</p>
                        <p className="text-xs text-muted-foreground italic">{noteAnalysis}</p>
                    </CardContent>
                )}
                <CardFooter className="p-2 border-t flex justify-between">
                     <Button variant="outline" size="sm" onClick={handleAnalyzeNotes} disabled={isNotesLoading}>
                        {isNotesLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Sparkles className="mr-2 h-4 w-4" />}
                        Ask AI About Notes
                     </Button>
                    <Button variant="default" size="sm" onClick={handleSaveNotes}>
                        <Save className="mr-2 h-4 w-4"/> Save Notes
                    </Button>
                </CardFooter>
           </Card>
        )
    },
    {
        id: 'support',
        icon: HelpCircle,
        tooltip: 'Help & Support',
        content: (
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-headline text-base">AI Support</CardTitle>
                <CardContent className="p-2">
                  <p className="text-sm text-muted-foreground">Having trouble? Ask our AI Support chatbot for help with your account, billing, or navigating the platform.</p>
                  <Link href="/support"><Button size="sm" className="w-full mt-3">Go to Full Support Page</Button></Link>
                </CardContent>
              </CardHeader>
            </Card>
        )
    }
  ];

  return (
    <div className="hidden lg:flex flex-col w-16 items-center border-l bg-card/60 p-2 gap-2 fixed top-16 right-0 h-[calc(100vh-4rem)] z-30">
      <TooltipProvider delayDuration={0}>
        {toolbarItems.map(item => (
            <Popover key={item.id}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg">
                                <item.icon className="h-5 w-5" />
                            </Button>
                        </PopoverTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        <p>{item.tooltip}</p>
                    </TooltipContent>
                </Tooltip>
                <PopoverContent side="left" align="end" className="w-80 h-[calc(100vh-5rem)] flex flex-col p-0 mr-2">
                    {item.content}
                </PopoverContent>
            </Popover>
        ))}
      </TooltipProvider>
    </div>
  );
}
