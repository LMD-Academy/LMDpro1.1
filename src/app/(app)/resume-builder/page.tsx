"use client";

import { useState, useEffect } from "react";
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
import { Loader2, Linkedin, Upload, Download, Sparkles, FileText } from "lucide-react";
import { improveResume, type ImproveResumeOutput } from "@/ai/flows/improve-resume";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const resumeFormSchema = z.object({
  linkedinProfile: z.string().url({ message: "Please enter a valid LinkedIn URL." }).optional().or(z.literal('')),
  resumeText: z.string().min(50, "Resume content must be at least 50 characters."),
  jobDescription: z.string().min(50, "Job description must be at least 50 characters."),
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

export default function ResumeBuilderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<ImproveResumeOutput | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");
  const [resumePreviewUrl, setResumePreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      linkedinProfile: "",
      resumeText: "",
      jobDescription: "",
    },
  });

  useEffect(() => {
    // Simulate PDF generation for preview
    if (form.getValues("resumeText")) {
      // In a real app, this would call a PDF generation service or client-side library
      // For now, use a placeholder or update a preview component
      setResumePreviewUrl(`https://placehold.co/800x1131.png?text=Resume+Preview+(${selectedTemplate})`);
    } else {
      setResumePreviewUrl(null);
    }
  }, [form.watch("resumeText"), selectedTemplate]);


  async function onOptimize(values: ResumeFormData) {
    setIsLoading(true);
    setAiSuggestions(null);
    try {
      const result = await improveResume({
        resume: values.resumeText,
        jobDescription: values.jobDescription,
      });
      setAiSuggestions(result);
      // Optionally update resumeText field with improved version
      // form.setValue("resumeText", result.improvedResume);
      toast({
        title: "Resume Optimized!",
        description: "AI suggestions have been generated.",
      });
    } catch (error) {
      console.error("Error optimizing resume:", error);
      toast({
        title: "Error",
        description: "Failed to optimize resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const handleImportLinkedIn = () => {
    // Placeholder for LinkedIn import functionality
    // This would typically involve OAuth and API calls
    toast({ title: "LinkedIn Import", description: "This feature is coming soon!" });
    form.setValue("resumeText", "Sample resume data imported from LinkedIn:\n\nJohn Doe\nSoftware Engineer at Tech Corp\nSkills: React, Node.js, TypeScript\nExperience: ...\nEducation: ...");
  };
  
  const handlePdfExport = () => {
    toast({ title: "PDF Export", description: "Generating PDF with 'Made with LMDpro' watermark (simulated)." });
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = resumePreviewUrl || "https://placehold.co/800x1131.png?text=LMDpro+Resume";
    link.download = 'LMDpro-Resume.png'; // In real app, it would be .pdf
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const templates = [
    { id: "modern", name: "Modern", imageUrl: "https://placehold.co/150x212.png?text=Modern" , aiHint: "resume template" },
    { id: "classic", name: "Classic", imageUrl: "https://placehold.co/150x212.png?text=Classic", aiHint: "resume design" },
    { id: "creative", name: "Creative", imageUrl: "https://placehold.co/150x212.png?text=Creative", aiHint: "cv example" },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Resume Builder</h1>
        <p className="text-lg text-muted-foreground">
          Create, optimize, and export professional resumes with AI assistance.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Resume Content</CardTitle>
              <CardDescription>Import from LinkedIn or paste your resume content and job description.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onOptimize)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="linkedinProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile URL (Optional)</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input placeholder="https://www.linkedin.com/in/yourprofile" {...field} />
                          </FormControl>
                          <Button type="button" variant="outline" onClick={handleImportLinkedIn}>
                            <Linkedin className="mr-2 h-4 w-4" /> Import
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="resumeText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Resume Content</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Paste your current resume here..." {...field} rows={10} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Job Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Paste the job description you're applying for..." {...field} rows={8} />
                        </FormControl>
                        <FormDescription>This helps AI tailor suggestions for ATS compatibility.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient">
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing...</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> Optimize with AI</>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {aiSuggestions && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline animated-text-gradient">AI Optimization Suggestions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Suggestions:</h3>
                  <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border p-4 bg-muted/50 text-sm">
                    {aiSuggestions.suggestions}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI-Improved Resume Draft:</h3>
                  <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border p-4 bg-muted/50 text-sm">
                    {aiSuggestions.improvedResume}
                  </div>
                   <Button variant="outline" size="sm" className="mt-2" onClick={() => form.setValue("resumeText", aiSuggestions.improvedResume)}>
                    Use this version
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Select Template</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {templates.map(template => (
                <button
                  key={template.id}
                  className={`border-2 rounded-lg overflow-hidden transition-all ${selectedTemplate === template.id ? 'border-primary ring-2 ring-primary' : 'border-transparent hover:border-muted-foreground'}`}
                  onClick={() => setSelectedTemplate(template.id)}
                  aria-pressed={selectedTemplate === template.id}
                >
                  <Image src={template.imageUrl} alt={template.name} width={150} height={212} className="w-full aspect-[150/212]" data-ai-hint={template.aiHint} />
                  <p className="text-sm p-2 text-center bg-card">{template.name}</p>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg sticky top-24"> {/* Sticky for preview */}
            <CardHeader>
              <CardTitle className="font-headline">Preview & Export</CardTitle>
            </CardHeader>
            <CardContent>
              {resumePreviewUrl ? (
                <Image src={resumePreviewUrl} alt="Resume Preview" width={300} height={424} className="w-full border rounded-md aspect-[800/1131]" data-ai-hint="resume preview"/>
              ) : (
                <div className="w-full aspect-[800/1131] border rounded-md flex items-center justify-center bg-muted/50">
                  <FileText className="w-16 h-16 text-muted-foreground" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handlePdfExport} className="w-full button-animated-gradient" disabled={!form.getValues("resumeText")}>
                <Download className="mr-2 h-4 w-4" /> Export as PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
