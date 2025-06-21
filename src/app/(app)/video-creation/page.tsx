
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"; // Keep for future use like branding input
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, Film, Copy, ThumbsUp, ThumbsDown, Check, UserCircle, Upload } from "lucide-react";
import { generateVideoScript, type GenerateVideoScriptOutput } from "@/ai/flows/generate-video-script";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  topic: z.string().min(10, "Topic must be at least 10 characters.").max(300, "Topic too long."),
  language: z.string().min(2, "Language is required."),
  tone: z.string().min(2, "Tone is required."),
  scriptSource: z.enum(["ai_generate", "paste_own"]).default("ai_generate"),
  customScript: z.string().optional(),
}).refine(data => {
    if (data.scriptSource === "paste_own" && (!data.customScript || data.customScript.length < 50)) {
        return false;
    }
    return true;
}, {
    message: "Custom script must be at least 50 characters if selected.",
    path: ["customScript"], // path of error
});

type FormData = z.infer<typeof formSchema>;

const languages = [
  { value: "en-US", label: "English (US)" },
  { value: "en-GB", label: "English (UK)" },
  { value: "es-ES", label: "Spanish (Spain)" },
  { value: "es-MX", label: "Spanish (Mexico)" },
  { value: "fr-FR", label: "French (France)" },
  { value: "de-DE", label: "German" },
  { value: "ja-JP", label: "Japanese" },
  { value: "zh-CN", label: "Chinese (Simplified)" },
];

const tones = [
  { value: "educational_clear", label: "Educational (Clear & Concise)" },
  { value: "educational_engaging", label: "Educational (Engaging Storytelling)" },
  { value: "professional_corporate", label: "Professional (Corporate)" },
  { value: "inspirational_motivational", label: "Inspirational (Motivational)" },
  { value: "humorous_lighthearted", label: "Humorous (Lighthearted)" },
  { value: "formal_academic", label: "Formal (Academic)" },
  { value: "conversational_friendly", label: "Conversational (Friendly)" },
];

const avatars = [
    { id: "avatar1", name: "Alex (Professional Male)", image: "https://placehold.co/150x150.png?text=Alex", hint: "professional man" },
    { id: "avatar2", name: "Mia (Casual Female)", image: "https://placehold.co/150x150.png?text=Mia", hint: "casual woman" },
    { id: "avatar3", name: "Dr. K (Academic Male)", image: "https://placehold.co/150x150.png?text=DrK", hint: "academic man" },
    { id: "avatar4", name: "Sophia (Animated Character)", image: "https://placehold.co/150x150.png?text=Sophia", hint: "animated character" },
];

export default function VideoCreationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoScript, setVideoScript] = useState<GenerateVideoScriptOutput | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(avatars[0].id);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      language: "en-US",
      tone: "educational_clear",
      scriptSource: "ai_generate",
      customScript: "",
    },
  });

  const scriptSource = form.watch("scriptSource");

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setVideoScript(null);
    setCopied(false);

    if (values.scriptSource === "ai_generate") {
      try {
        const result = await generateVideoScript({
            topic: values.topic,
            language: values.language,
            tone: values.tone
        });
        setVideoScript(result);
        toast({ title: "Video Script Generated!", description: "Your AI-generated script is ready." });
      } catch (error) {
        console.error("Error generating video script:", error);
        toast({ title: "Script Generation Error", description: "Failed to generate video script. Please try again.", variant: "destructive" });
      }
    } else if (values.scriptSource === "paste_own" && values.customScript) {
        setVideoScript({ script: values.customScript });
        toast({ title: "Custom Script Loaded!", description: "Your custom script is ready for video production." });
    }
    setIsLoading(false);
  }

  const handleCopyToClipboard = () => {
    if (videoScript?.script) {
      navigator.clipboard.writeText(videoScript.script)
        .then(() => {
          setCopied(true);
          toast({ title: "Copied to Clipboard!", description: "Video script copied." });
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          toast({ title: "Copy Failed", description: "Could not copy script to clipboard.", variant: "destructive" });
        });
    }
  };

  const handleProduceVideo = () => {
    if (!videoScript || !selectedAvatar) {
        toast({title: "Missing Information", description: "Please generate/provide a script and select an avatar.", variant:"destructive"});
        return;
    }
    toast({title: "Video Production Started", description: `Generating video with ${avatars.find(a=>a.id===selectedAvatar)?.name}. This may take a few minutes... (Feature placeholder)`});
    // Placeholder for actual video generation call
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">AI Video Creation Suite</h1>
        <p className="text-lg text-muted-foreground">
          Automatically generate educational video scripts or use your own. Then, select an avatar, apply branding, and produce your video in multiple languages.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                <CardTitle className="font-headline">1. Generate or Provide Script</CardTitle>
                <CardDescription>Choose to have AI generate a script based on your inputs, or paste your existing script.</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="scriptSource"
                        render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Script Source</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="focus-gradient-outline">
                                        <SelectValue placeholder="Select script source" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ai_generate">AI Generate Script</SelectItem>
                                        <SelectItem value="paste_own">Paste My Own Script</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {scriptSource === "ai_generate" && (
                        <>
                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Video Topic</FormLabel>
                                <FormControl>
                                <Textarea placeholder="e.g., Introduction to Quantum Computing, The History of Ancient Rome, Effective Time Management Techniques" {...field} className="focus-gradient-outline" rows={3}/>
                                </FormControl>
                                <FormDescription>What is the main subject for the AI to write about?</FormDescription>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                            control={form.control}
                            name="language"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Language</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger className="focus-gradient-outline"><SelectValue placeholder="Select a language" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    {languages.map((lang) => (
                                        <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>Choose the language for the script.</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="tone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Tone</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger className="focus-gradient-outline"><SelectValue placeholder="Select a tone" /></SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    {tones.map((toneItem) => (
                                        <SelectItem key={toneItem.value} value={toneItem.value}>{toneItem.label}</SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                                <FormDescription>Select the desired tone for the script.</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        </>
                    )}

                    {scriptSource === "paste_own" && (
                        <FormField
                            control={form.control}
                            name="customScript"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Paste Your Custom Script</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Paste your complete video script here..." {...field} className="focus-gradient-outline" rows={10} />
                                </FormControl>
                                <FormDescription>Ensure your script is well-formatted for best results.</FormDescription>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    )}
                    
                    <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient text-base py-6">
                        {isLoading ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing Script...</>
                        ) : (
                        <><Film className="mr-2 h-5 w-5" /> {scriptSource === "ai_generate" ? "Generate AI Script" : "Load Custom Script"}</>
                        )}
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>

            {videoScript && (
                <Card className="shadow-lg mt-8 rounded-xl">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="font-headline text-2xl animated-text-gradient">Video Script Ready</CardTitle>
                        <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
                            {copied ? <Check className="mr-2 h-4 w-4 text-green-500"/> : <Copy className="mr-2 h-4 w-4" />}
                            {copied ? 'Copied!' : 'Copy Script'}
                        </Button>
                    </div>
                     {scriptSource === "ai_generate" && (
                        <CardDescription>AI Generated Script for: Topic - {form.getValues().topic.substring(0,50)}..., Language - {languages.find(l => l.value === form.getValues().language)?.label}, Tone - {tones.find(t => t.value === form.getValues().tone)?.label}</CardDescription>
                     )}
                      {scriptSource === "paste_own" && (
                        <CardDescription>Custom Script Loaded.</CardDescription>
                     )}
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-80 rounded-md border p-4 bg-muted/30">
                        <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                        {videoScript.script}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm"><ThumbsUp className="mr-2 h-4 w-4"/> Script is Good</Button>
                    <Button variant="outline" size="sm"><ThumbsDown className="mr-2 h-4 w-4"/> Needs Improvement</Button>
                </CardFooter>
                </Card>
            )}
        </div>

        <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg rounded-xl sticky top-24"> {/* Adjust top value based on header height */}
                <CardHeader>
                    <CardTitle className="font-headline">2. Video Production Options</CardTitle>
                    <CardDescription>Configure your video's appearance and branding.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <FormLabel>Select Avatar</FormLabel>
                        <ScrollArea className="h-48 mt-1">
                        <div className="grid grid-cols-2 gap-3 pr-3">
                            {avatars.map(avatar => (
                                <button 
                                    key={avatar.id} 
                                    onClick={() => setSelectedAvatar(avatar.id)}
                                    className={cn(
                                        "border-2 rounded-lg p-2 transition-all hover:border-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        selectedAvatar === avatar.id ? "border-primary ring-2 ring-primary" : "border-border"
                                    )}
                                >
                                    <Image src={avatar.image} alt={avatar.name} width={100} height={100} className="rounded-md mx-auto aspect-square object-cover" data-ai-hint={avatar.hint} />
                                    <p className="text-xs text-center mt-1 text-muted-foreground">{avatar.name}</p>
                                </button>
                            ))}
                        </div>
                        </ScrollArea>
                    </div>
                    <div>
                        <FormLabel htmlFor="brandLogo">Upload Brand Logo (Optional)</FormLabel>
                         <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md hover:border-primary/50 cursor-pointer">
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                                <div className="flex text-sm text-muted-foreground">
                                <label htmlFor="brandLogoInput" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                                    <span>Upload a file</span>
                                    <Input id="brandLogoInput" name="brandLogoInput" type="file" className="sr-only" accept="image/png, image/jpeg" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                            </div>
                        </div>
                    </div>
                     {/* Placeholder for language selection for voice-over, as it's already in script generation */}
                     <div>
                        <FormLabel>Voice-Over Language</FormLabel>
                        <Input value={languages.find(l => l.value === form.getValues().language)?.label || "English (US)"} readOnly disabled className="mt-1 bg-muted/50"/>
                        <FormDescription className="text-xs">Language is based on script settings. More voice options coming soon!</FormDescription>
                     </div>


                </CardContent>
                <CardFooter>
                    <Button onClick={handleProduceVideo} className="w-full button-animated-gradient text-base py-6" disabled={!videoScript || !selectedAvatar || isLoading}>
                        <Film className="mr-2 h-5 w-5" /> Produce Video
                    </Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
