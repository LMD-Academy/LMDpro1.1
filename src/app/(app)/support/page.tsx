
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, MessageSquare, LifeBuoy, ThumbsUp, ThumbsDown, Copy, FileQuestion, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { supportChat, type SupportChatOutput } from "@/ai/flows/support-chat";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  { id: "1", content: "Welcome to LMDpro Support! How can I help you today regarding technical issues, billing, or course navigation?", role: "model", timestamp: new Date(Date.now() - 60000 * 5) },
];

const faqItems = [
    {
        id: "faq1",
        question: "How do I reset my LMDpro account password?",
        answer: "You can reset your password by clicking the 'Forgot Password?' link on the login page. You'll receive an email with instructions. If you don't receive it, check your spam folder or contact us directly."
    },
    {
        id: "faq2",
        question: "Where can I find my billing information and invoices?",
        answer: "Your billing information and past invoices are available in your Account Settings page, under the 'Subscription & Billing' tab. You can view current plan details, manage payment methods, and download PDF invoices there."
    },
    {
        id: "faq3",
        question: "How do I use the AI Resume Builder effectively?",
        answer: "Start by importing your LinkedIn profile data or pasting your existing resume. Then, input the target job description. Our AI will provide suggestions to tailor your resume. Experiment with different templates and use the ATS score to optimize for applicant tracking systems."
    },
    {
        id: "faq4",
        question: "What are the video creation limits per subscription plan?",
        answer: "The Community plan allows basic video creation with watermarks and limited avatars. Premium plans offer advanced features, no watermarks, more avatars, and custom branding. Teams and Enterprise plans have further collaborative features and higher limits. Please see our Pricing page for full details."
    },
    {
        id: "faq5",
        question: "How are personalized learning paths generated?",
        answer: "Our AI analyzes your stated role, interests, and goals. It then leverages its knowledge base and real-time internet research capabilities to construct a tailored learning path, suggesting relevant LMDpro courses and modules to help you achieve your objectives."
    }
];

const getInitials = (name: string) => {
  if (!name) return "U";
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};


export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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
  }, [messages, isAiTyping]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    
    const currentQuery = inputValue;
    setInputValue("");
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: currentQuery,
      role: "user",
      timestamp: new Date(),
    };
    
    const updatedMessages: Message[] = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsAiTyping(true);

    try {
      const chatHistory = updatedMessages.slice(1).map(m => ({ role: m.role, content: m.content }));
      const result: SupportChatOutput = await supportChat({ query: currentQuery, history: chatHistory });
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: result.response,
        role: "model",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);

    } catch (error) {
      console.error("Support chat error:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I encountered an issue and can't respond right now. Please try again in a moment.",
        role: "model",
        timestamp: new Date(),
      };
       setMessages((prev) => [...prev, errorResponse]);
       toast({ title: "AI Error", description: "Could not get a response from the support agent.", variant: "destructive" });
    } finally {
      setIsAiTyping(false);
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">LMDpro AI Support Center</h1>
        <p className="text-lg text-muted-foreground">
          Get 24/7 instant support for technical issues, billing, and course navigation via our AI chat, or browse our FAQ and contact options.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <Card className="shadow-lg h-[75vh] flex flex-col rounded-xl">
            <CardHeader className="flex flex-row items-center space-x-3 border-b">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="font-headline">AI Support Chat</CardTitle>
                <CardDescription>Live assistance for your queries. Conversation history is saved.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex items-start gap-3 max-w-full", 
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === "model" && (
                        <Avatar className="h-9 w-9 shrink-0">
                           <AvatarImage src="https://placehold.co/100x100.png?text=AI" alt="AI Support Avatar" data-ai-hint="support ai avatar"/>
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-[75%] rounded-lg p-3 text-sm shadow-md",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-none"
                            : "bg-muted rounded-bl-none"
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <div className={cn("text-xs mt-2 flex items-center gap-2", message.role === "user" ? "text-primary-foreground/70 justify-end" : "text-muted-foreground/70 justify-start")}>
                            <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            {message.role === "model" && message.id !== "1" && (
                                <>
                                <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-black/10 dark:hover:bg-white/10"><Copy className="h-3 w-3"/></Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-black/10 dark:hover:bg-white/10"><ThumbsUp className="h-3 w-3"/></Button>
                                <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-black/10 dark:hover:bg-white/10"><ThumbsDown className="h-3 w-3"/></Button>
                                </>
                            )}
                        </div>
                      </div>
                       {message.role === "user" && (
                        <Avatar className="h-9 w-9 shrink-0">
                           <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user learning" />
                           <AvatarFallback>{getInitials("User")}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isAiTyping && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-9 w-9 shrink-0">
                           <AvatarImage src="https://placehold.co/100x100.png?text=AI" alt="AI Avatar" data-ai-hint="ai support typing"/>
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="max-w-[75%] rounded-lg p-3 shadow-md bg-muted rounded-bl-none">
                            <p className="text-sm italic text-muted-foreground">AI is typing...</p>
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isAiTyping && handleSendMessage()}
                  className="flex-1 focus-gradient-outline"
                  disabled={isAiTyping}
                />
                <Button type="submit" onClick={handleSendMessage} className="button-animated-gradient" disabled={isAiTyping}>
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <FileQuestion className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Frequently Asked Questions</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map(item => (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger className="text-sm text-left hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-sm text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
             <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <div className="flex items-center gap-3">
                         <LifeBuoy className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Contact Human Support</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                    <p className="text-muted-foreground">If the AI Assistant or FAQ couldn't resolve your issue, our human support team is here to help.</p>
                    <Button variant="outline" className="w-full focus-gradient-outline">
                        <Mail className="mr-2 h-4 w-4"/> Email Support (support@lmdpro.com)
                    </Button>
                     <Button variant="outline" className="w-full focus-gradient-outline">
                        <Phone className="mr-2 h-4 w-4"/> Call Us: +1 (800) 555-LMDPRO
                    </Button>
                    <p className="text-xs text-muted-foreground">Human support hours: Mon-Fri, 9 AM - 6 PM (EST)</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
