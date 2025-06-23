
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, Sparkles, Copy, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Placeholder for the Genkit flow function
// In a real app, this would be: import { generatePersonalizedLearningPath, type GeneratePersonalizedLearningPathOutput } from "@/ai/flows/generate-personalized-learning-path";
interface GeneratePersonalizedLearningPathInput {
  role: string;
  interests: string;
  goals: string;
}
interface GeneratePersonalizedLearningPathOutput {
  learningPath: string;
}
const generatePersonalizedLearningPath = async (input: GeneratePersonalizedLearningPathInput): Promise<GeneratePersonalizedLearningPathOutput> => {
    console.log("Simulating AI Learning Path Generation with input:", input);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    return {
        learningPath: `
### Personalized Learning Path for a ${input.role}

**Goal:** ${input.goals}
**Interests:** ${input.interests}

Here is a suggested learning path to help you achieve your goals, tailored to your interests.

---

#### **Phase 1: Foundational Skills (Weeks 1-4)**
This phase focuses on strengthening the core concepts required for your goal.

*   **Module 1: Advanced Python for Data Science**
    *   **Focus:** Deepen your understanding of Python's data manipulation and analysis libraries.
    *   **LMDpro Course:** *Python for Data Science*
    *   **Key Topics:** Advanced Pandas, NumPy optimization, Object-Oriented principles.

*   **Module 2: Statistical Foundations**
    *   **Focus:** Review key statistical concepts vital for machine learning.
    *   **LMDpro Course:** *Data Science Specialization L3*
    *   **Key Topics:** Probability, Hypothesis Testing, Regression Analysis.

#### **Phase 2: Core Topic Specialization (Weeks 5-10)**
Dive deep into your primary area of interest.

*   **Module 3: Machine Learning Engineering**
    *   **Focus:** Learn to build, train, and deploy machine learning models.
    *   **LMDpro Course:** *Advanced Machine Learning & AI*
    *   **Key Topics:** Supervised vs. Unsupervised learning, Model Evaluation, MLOps basics.

*   **Module 4: Big Data Technologies**
    *   **Focus:** Understand how to work with large-scale datasets.
    *   **LMDpro Course:** *Big Data Technologies & Cloud Platforms*
    *   **Key Topics:** Spark, Hadoop, NoSQL Databases.

#### **Phase 3: Practical Application & Portfolio Project (Weeks 11-16)**
Apply your new skills to a real-world project.

*   **Project Idea:** Analyze a large public dataset related to your interests. Build a predictive model and deploy it as a simple web API.
*   **LMDpro Tools:** Use the **AI Academic Research** agent to find relevant papers and the **Resume Builder** to add this project to your profile.

---
*This path is a suggestion. Use the LMDpro Course Catalog to find additional modules that align with your specific interests.*
`
    };
};


const formSchema = z.object({
  role: z.string().min(2, "Role must be at least 2 characters.").max(100),
  interests: z.string().min(5, "Interests must be at least 5 characters.").max(500),
  goals: z.string().min(5, "Goals must be at least 5 characters.").max(500),
});

type FormData = z.infer<typeof formSchema>;

export default function LearningPathsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [learningPath, setLearningPath] = useState<GeneratePersonalizedLearningPathOutput | null>(null);
  const [copied, setCopied] = useState(false);
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
    setCopied(false);
    try {
      const result = await generatePersonalizedLearningPath(values);
      setLearningPath(result);
      toast({
        title: "Learning Path Generated!",
        description: "Your personalized learning path is ready.",
      });
    } catch (error) {
      console.error("Error generating learning path:", error);
      toast({
        title: "Error Generating Path",
        description: "Failed to generate learning path. Please check your input or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleCopyToClipboard = () => {
    if (learningPath?.learningPath) {
      navigator.clipboard.writeText(learningPath.learningPath)
        .then(() => {
          setCopied(true);
          toast({ title: "Copied to Clipboard!", description: "Learning path copied." });
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          toast({ title: "Copy Failed", description: "Could not copy path to clipboard.", variant: "destructive" });
        });
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Personalized Learning Paths</h1>
        <p className="text-lg text-muted-foreground">
          Enter your current or desired role, key interests, and learning goals to let our AI craft a custom learning path just for you.
        </p>
      </section>

      <Card className="shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="font-headline">Define Your Learning Profile</CardTitle>
          <CardDescription>The more details you provide, the better our AI can tailor your learning journey.</CardDescription>
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
                      <Input placeholder="e.g., Software Engineer, Marketing Manager, Aspiring Data Scientist" {...field} className="focus-gradient-outline"/>
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
                    <FormLabel>Your Key Interests</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Artificial Intelligence, Machine Learning, Web Development, Cloud Computing, Project Management, Leadership Skills" {...field} className="focus-gradient-outline" rows={4}/>
                    </FormControl>
                    <FormDescription>List topics, technologies, or industries you're passionate about learning.</FormDescription>
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
                      <Textarea placeholder="e.g., Secure a promotion to Senior Developer, Learn Python for data analysis, Transition into a UX design role, Build a portfolio project using React and Firebase" {...field} className="focus-gradient-outline" rows={4}/>
                    </FormControl>
                    <FormDescription>What specific outcomes do you hope to achieve through this learning path?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient text-base py-6">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Your Path...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate My Learning Path
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {learningPath && (
        <Card className="shadow-lg mt-8 rounded-xl">
          <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle className="font-headline text-2xl animated-text-gradient">Your Personalized Learning Path</CardTitle>
                <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
                    {copied ? <Check className="mr-2 h-4 w-4 text-green-500"/> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy Path'}
                </Button>
            </div>
            <CardDescription>Based on: Role - {form.getValues().role}, Interests - {form.getValues().interests.substring(0,50)}..., Goals - {form.getValues().goals.substring(0,50)}...</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none rounded-md border p-4 bg-muted/30 text-sm leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{learningPath.learningPath}</ReactMarkdown>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm"><ThumbsUp className="mr-2 h-4 w-4"/> Helpful</Button>
            <Button variant="outline" size="sm"><ThumbsDown className="mr-2 h-4 w-4"/> Not Helpful</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
