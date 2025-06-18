"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, MessageSquare, LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const initialMessages: Message[] = [
  { id: "1", text: "Welcome to LMDpro Support! How can I help you today?", sender: "ai", timestamp: new Date(Date.now() - 60000 * 5) },
  { id: "2", text: "I'm having trouble navigating to the video creation page.", sender: "user", timestamp: new Date(Date.now() - 60000 * 4) },
  { id: "3", text: "Sure, I can help with that! You can find the Video Creation page in the left sidebar, or by clicking this link: [Video Creation](/video-creation). Is there anything else?", sender: "ai", timestamp: new Date(Date.now() - 60000 * 3) },
];

// Helper to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};


export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thanks for your message: "${newUserMessage.text.substring(0,30)}...". I'm currently processing your request. For common issues, you can also check our FAQ.`,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">AI Support Center</h1>
        <p className="text-lg text-muted-foreground">
          Get 24/7 instant support for technical issues, billing, and course navigation via our AI chat.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="shadow-lg h-[70vh] flex flex-col">
            <CardHeader className="flex flex-row items-center space-x-3">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="font-headline">Support Chat</CardTitle>
                <CardDescription>Persistent conversation history for quick problem resolution.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-end gap-2",
                        message.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.sender === "ai" && (
                        <Avatar className="h-8 w-8">
                           <AvatarImage src="https://placehold.co/100x100.png?text=AI" alt="AI Avatar" data-ai-hint="support avatar"/>
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-[70%] rounded-lg p-3 text-sm shadow",
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <p>{message.text}</p>
                        <p className={cn(
                            "text-xs mt-1",
                            message.sender === "user" ? "text-primary-foreground/70 text-right" : "text-muted-foreground/70 text-left"
                        )}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                       {message.sender === "user" && (
                        <Avatar className="h-8 w-8">
                           <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                           <AvatarFallback>{getInitials("User")}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button type="submit" onClick={handleSendMessage} className="button-animated-gradient">
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <LifeBuoy className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Frequently Asked Questions</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary hover:underline">How do I reset my password?</a></li>
                        <li><a href="#" className="hover:text-primary hover:underline">Where can I find my billing information?</a></li>
                        <li><a href="#" className="hover:text-primary hover:underline">How to use the resume builder?</a></li>
                        <li><a href="#" className="hover:text-primary hover:underline">Video creation limits per plan?</a></li>
                    </ul>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-1">
                    <p><strong>Email:</strong> support@lmdpro.com</p>
                    <p><strong>Phone:</strong> +1 (800) 555-LMDPRO</p>
                    <p><strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM (EST)</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
