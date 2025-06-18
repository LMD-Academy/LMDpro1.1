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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Film } from "lucide-react";
import { generateVideoScript, type GenerateVideoScriptOutput } from "@/ai/flows/generate-video-script";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  topic: z.string().min(5, "Topic must be at least 5 characters.").max(200),
  language: z.string().min(2, "Language is required."),
  tone: z.string().min(2, "Tone is required."),
});

type FormData = z.infer<typeof formSchema>;

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
];

const tones = [
  { value: "formal", label: "Formal" },
  { value: "informal", label: "Informal" },
  { value: "humorous", label: "Humorous" },
  { value: "educational", label: "Educational" },
  { value: "inspirational", label: "Inspirational" },
];

export default function VideoCreationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoScript, setVideoScript] = useState<GenerateVideoScriptOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      language: "en",
      tone: "educational",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setVideoScript(null);
    try {
      const result = await generateVideoScript(values);
      setVideoScript(result);
    } catch (error) {
      console.error("Error generating video script:", error);
      toast({
        title: "Error",
        description: "Failed to generate video script. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">AI Video Script Generation</h1>
        <p className="text-lg text-muted-foreground">
          Provide a topic, language, and tone to automatically generate an educational video script.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Video Script Details</CardTitle>
          <CardDescription>Fill in the details below to create your video script.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Topic</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Introduction to Quantum Computing, The History of Ancient Rome" {...field} />
                    </FormControl>
                    <FormDescription>What is the main subject of your video?</FormDescription>
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
                          <SelectTrigger>
                            <SelectValue placeholder="Select a language" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>Choose the language for the video script.</FormDescription>
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
                          <SelectTrigger>
                            <SelectValue placeholder="Select a tone" />
                          </SelectTrigger>
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
              
              <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Script...
                  </>
                ) : (
                  <>
                    <Film className="mr-2 h-4 w-4" />
                    Generate Video Script
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {videoScript && (
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="font-headline animated-text-gradient">Generated Video Script</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border p-4 bg-muted/50">
              <h3 className="font-headline">Topic: {form.getValues().topic}</h3>
              <p><strong>Language:</strong> {languages.find(l => l.value === form.getValues().language)?.label}</p>
              <p><strong>Tone:</strong> {tones.find(t => t.value === form.getValues().tone)?.label}</p>
              <hr className="my-4"/>
              {videoScript.script}
            </div>
            {/* Placeholder for avatar selection, branding, etc. */}
            <div className="mt-6 p-4 border rounded-md bg-card">
              <h4 className="font-headline text-lg mb-2">Next Steps: Video Production</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This is where options for avatar selection, voice synthesis, and branding application would appear.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">Select Avatar</Button>
                <Button variant="outline">Apply Branding</Button>
                <Button className="button-animated-gradient">Produce Video (Coming Soon)</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
