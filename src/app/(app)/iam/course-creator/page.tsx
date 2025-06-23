
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, FileCode, Bot, Sparkles, Loader2, User, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Placeholder for Genkit flow
import { createCourseOutline, type CreateCourseOutlineOutput } from "@/ai/flows/course-creator";

interface CreatorMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  isPlan?: boolean;
}

const initialMessages: CreatorMessage[] = [
  { 
    id: "1", 
    text: "Welcome to the AI Course Creator! As an administrator, you can instruct me to design new courses. Simply describe the course you want to create. For example: 'Create a course on Advanced Project Management focusing on Agile methodologies for senior managers.'", 
    sender: "ai", 
  },
];

const getInitials = (name: string) => name.split(' ').map((n) => n[0]).join('').toUpperCase();

export default function CourseCreatorPage() {
  const [messages, setMessages] = useState<CreatorMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
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
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
    
    const currentQuery = inputValue;
    setInputValue("");
    
    const newUserMessage: CreatorMessage = {
      id: Date.now().toString(),
      text: currentQuery,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    
    setIsTyping(true);

    try {
      const result: CreateCourseOutlineOutput = await createCourseOutline({ objective: currentQuery });
      const aiResponse: CreatorMessage = {
        id: (Date.now() + 1).toString(),
        text: result.coursePlan,
        sender: "ai",
        isPlan: true,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch(error) {
       console.error("AI course creation failed:", error);
       const errorResponse: CreatorMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error while designing that course. Please check my connection or try rephrasing your request.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, errorResponse]);
      toast({ title: "Course Creation Failed", description: "The AI agent could not complete the request.", variant: "destructive" });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="space-y-8 flex flex-col h-[calc(100vh-var(--header-height,8rem))]">
      <section className="flex-shrink-0">
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">AI Agentic Course Creator</h1>
        <p className="text-lg text-muted-foreground">
          Instruct the autonomous agent to design, create, or adjust full course structures with modules and lessons.
        </p>
      </section>

      <Card className="shadow-lg flex-grow flex flex-col overflow-hidden rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-x-3 border-b">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-primary" />
            <div>
              <CardTitle className="font-headline">Creator Agent Chat</CardTitle>
              <CardDescription>Converse with the AI to build your educational content.</CardDescription>
            </div>
          </div>
          <Button variant="outline" size="sm"><FileCode className="mr-2 h-4 w-4"/> View Saved Drafts</Button>
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
                    <Avatar className="h-9 w-9 shrink-0 bg-primary/20">
                       <AvatarFallback className="bg-transparent"><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[85%] rounded-lg p-3 shadow-sm",
                      message.sender === "user" ? "bg-primary text-primary-foreground rounded-br-none" : "bg-muted rounded-bl-none"
                    )}
                  >
                    {message.isPlan ? (
                        <div className="prose dark:prose-invert max-w-none text-sm">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    )}
                  </div>
                   {message.sender === "user" && (
                    <Avatar className="h-9 w-9 shrink-0">
                       <AvatarFallback>{getInitials("Admin")}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isTyping && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-9 w-9 shrink-0 bg-primary/20">
                       <AvatarFallback className="bg-transparent"><Bot className="h-5 w-5 text-primary"/></AvatarFallback>
                    </Avatar>
                    <div className="max-w-[75%] rounded-lg p-3 shadow-sm bg-muted rounded-bl-none flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground"/>
                        <p className="text-sm italic text-muted-foreground">AI agent is designing the course structure...</p>
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4 flex flex-col items-start gap-4">
            {messages[messages.length-1].isPlan && (
                 <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm"><Sparkles className="mr-2 h-4 w-4"/> Refine with AI</Button>
                    <Button variant="outline" size="sm"><Eye className="mr-2 h-4 w-4"/> View as Learner</Button>
                    <Button className="button-animated-gradient" size="sm">Save & Publish Course</Button>
                </div>
            )}
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="e.g., 'Design a course on ethical AI...'"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !isTyping && handleSendMessage()}
              className="flex-1 focus-gradient-outline"
              disabled={isTyping}
            />
            <Button type="submit" onClick={handleSendMessage} className="button-animated-gradient" disabled={isTyping}>
              <Send className="h-4 w-4 mr-2" /> Instruct
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
