
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, FileCode, Mic, Paperclip, Search, ThumbsUp, ThumbsDown, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ResearchMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  sources?: { title: string; url: string }[];
}

const initialMessages: ResearchMessage[] = [
  { 
    id: "1", 
    text: "Welcome to the LMDpro Academic Research Agent! What topic, subject, or module would you like to explore today? I can help you find information, summarize articles, and discuss complex concepts.", 
    sender: "ai", 
    timestamp: new Date(Date.now() - 60000 * 2) 
  },
];

const getInitials = (name: string) => name.split(' ').map((n) => n[0]).join('').toUpperCase();

export default function AcademicResearchPage() {
  const [messages, setMessages] = useState<ResearchMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(prev => prev ? `${prev} ${transcript}`: transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        toast({ title: "Speech Recognition Error", description: event.error, variant: "destructive" });
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [toast]);

  const handleVoiceInput = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
      setIsListening(true);
      toast({title: "Listening...", description: "Please start speaking."});
    } else if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      toast({ title: "Speech Recognition Not Supported", description: "Your browser does not support the Web Speech API.", variant: "destructive" });
    }
  };


  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollViewport = scrollAreaRef.current.querySelector('div[style*="overflow: scroll hidden;"]');
      if (scrollViewport) {
        scrollViewport.scrollTop = scrollViewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    setIsTyping(true);

    const newUserMessage: ResearchMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    const currentQuery = inputValue;
    setInputValue("");

    // Simulate AI research and response
    // In a real app, this would call a Genkit flow
    setTimeout(() => {
      const aiResponse: ResearchMessage = {
        id: (Date.now() + 1).toString(),
        text: `Okay, I'm researching "${currentQuery.substring(0, 50)}...". This might take a moment. I'll provide a summary and key sources.`,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      
      // Simulate longer research time and then a detailed response
      setTimeout(() => {
        const detailedResponse: ResearchMessage = {
            id: (Date.now() + 2).toString(),
            text: `Based on my research for "${currentQuery.substring(0,50)}...", here's a summary: [AI-generated summary would go here, discussing key findings, different perspectives, and relevant data. This would be a few paragraphs long.] I've also identified a few key sources that might be helpful for further reading.`,
            sender: "ai",
            timestamp: new Date(),
            sources: [
                { title: "Example Source 1: A Comprehensive Overview", url: "#" },
                { title: "Example Source 2: Recent Developments in the Field", url: "#" },
                { title: "Example Source 3: Critical Analysis and Future Directions", url: "#" },
            ]
        }
        setMessages((prev) => [...prev, detailedResponse]);
        setIsTyping(false);
      }, 3000);

    }, 1000);
  };

  return (
    <div className="space-y-8 flex flex-col h-[calc(100vh-var(--header-height,8rem))]"> {/* Adjust 8rem based on actual header height */}
      <section className="flex-shrink-0">
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">AI Academic Research Agent</h1>
        <p className="text-lg text-muted-foreground">
          Engage in live conversations, research topics, and explore academic materials with your AI research partner.
        </p>
      </section>

      <Card className="shadow-lg flex-grow flex flex-col overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-x-3 border-b">
          <div className="flex items-center gap-3">
            <FileCode className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="font-headline">Research Chat</CardTitle>
              <CardDescription>Ask about specific topics, subjects, or modules.</CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm"><Search className="mr-2 h-4 w-4"/> Past Searches</Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender === "ai" && (
                    <Avatar className="h-9 w-9 shrink-0">
                       <AvatarImage src="https://placehold.co/100x100.png?text=AI" alt="AI Avatar" data-ai-hint="research ai avatar"/>
                       <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[75%] rounded-lg p-3 shadow-sm",
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted rounded-bl-none"
                    )}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    {message.sources && message.sources.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-muted-foreground/20">
                            <h4 className="text-xs font-semibold mb-1">Sources:</h4>
                            <ul className="space-y-1">
                                {message.sources.map((source, idx) => (
                                    <li key={idx} className="text-xs">
                                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400 dark:text-blue-300">
                                            {idx+1}. {source.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className={cn("text-xs mt-2 flex items-center gap-2", message.sender === "user" ? "text-primary-foreground/70 justify-end" : "text-muted-foreground/70 justify-start")}>
                        <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        {message.sender === "ai" && message.id !== "1" && ( // Don't show for initial greeting
                            <>
                            <Button variant="ghost" size="icon" className="h-6 w-6"><Copy className="h-3 w-3"/></Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6"><ThumbsUp className="h-3 w-3"/></Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6"><ThumbsDown className="h-3 w-3"/></Button>
                            </>
                        )}
                    </div>
                  </div>
                   {message.sender === "user" && (
                    <Avatar className="h-9 w-9 shrink-0">
                       <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                       <AvatarFallback>{getInitials("User")}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-9 w-9 shrink-0">
                       <AvatarImage src="https://placehold.co/100x100.png?text=AI" alt="AI Avatar" data-ai-hint="research ai typing"/>
                       <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="max-w-[75%] rounded-lg p-3 shadow-sm bg-muted rounded-bl-none">
                        <p className="text-sm italic">AI is typing...</p>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex w-full items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Attach file">
                <Paperclip className="h-5 w-5" />
            </Button>
            <Input
              type="text"
              placeholder="Ask about any topic, e.g., 'Explain quantum entanglement'..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
              className="flex-1 focus-gradient-outline"
              disabled={isTyping || isListening}
            />
            <Button variant="ghost" size="icon" aria-label="Use voice input" onClick={handleVoiceInput} disabled={isTyping} className={cn(isListening && "text-destructive animate-pulse")}>
                <Mic className="h-5 w-5" />
            </Button>
            <Button type="submit" onClick={handleSendMessage} className="button-animated-gradient" disabled={isTyping || isListening}>
              <Send className="h-4 w-4 mr-2" /> Send
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
