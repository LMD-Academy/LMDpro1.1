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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { generatePersonalizedLearningPath, type GeneratePersonalizedLearningPathOutput } from "@/ai/flows/generate-personalized-learning-path";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  role: z.string().min(2, "Role must be at least 2 characters.").max(100),
  interests: z.string().min(5, "Interests must be at least 5 characters.").max(500),
  goals: z.string().min(5, "Goals must be at least 5 characters.").max(500),
});

type FormData = z.infer<typeof formSchema>;

export default function LearningPathsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [learningPath, setLearningPath] = useState<GeneratePersonalizedLearningPathOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      interests: "",
      goals: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setLearningPath(null);
    try {
      const result = await generatePersonalizedLearningPath(values);
      setLearningPath(result);
    } catch (error) {
      console.error("Error generating learning path:", error);
      toast({
        title: "Error",
        description: "Failed to generate learning path. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Personalized Learning Paths</h1>
        <p className="text-lg text-muted-foreground">
          Enter your role, interests, and goals to generate a custom learning path powered by AI.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline">Define Your Profile</CardTitle>
          <CardDescription>Tell us about yourself so we can tailor a learning path for you.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Current or Desired Role</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Software Engineer, Data Scientist" {...field} />
                    </FormControl>
                    <FormDescription>What role are you aiming for or currently in?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., AI, machine learning, web development, cloud computing" {...field} />
                    </FormControl>
                    <FormDescription>What topics or technologies are you passionate about?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Learning Goals</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Get a promotion, learn a new skill, change careers, build a specific project" {...field} />
                    </FormControl>
                    <FormDescription>What do you hope to achieve with this learning path?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Learning Path
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {learningPath && (
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="font-headline animated-text-gradient">Your Personalized Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border p-4 bg-muted/50">
              {learningPath.learningPath}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
