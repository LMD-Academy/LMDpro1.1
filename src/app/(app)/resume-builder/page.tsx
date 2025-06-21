
"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
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
import { Loader2, Linkedin, Download, Sparkles, FileText, PlusCircle, Trash2, Info } from "lucide-react";
import { improveResume, type ImproveResumeOutput } from "@/ai/flows/improve-resume";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const experienceSchema = z.object({
  id: z.string().optional(),
  jobTitle: z.string().min(2, "Job title is required."),
  company: z.string().min(2, "Company name is required."),
  location: z.string().optional(),
  startDate: z.string().min(4, "Start date is required."),
  endDate: z.string().optional(),
  description: z.string().min(10, "Description is required.").max(1000, "Description too long."),
});

const educationSchema = z.object({
  id: z.string().optional(),
  institution: z.string().min(2, "Institution name is required."),
  degree: z.string().min(2, "Degree is required."),
  fieldOfStudy: z.string().optional(),
  graduationDate: z.string().optional(),
  description: z.string().optional().nullish(),
});

const skillSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Skill name is required."),
  description: z.string().optional().nullish(), // 2-5 lines (AI will populate this)
});

const resumeFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  linkedinProfile: z.string().url({ message: "Please enter a valid LinkedIn URL." }).optional().or(z.literal('')),
  portfolioUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  summary: z.string().min(20, "Summary must be at least 20 characters.").max(1000, "Summary too long."),
  experience: z.array(experienceSchema).optional(),
  education: z.array(educationSchema).optional(),
  skills: z.array(skillSchema).optional(),
  jobDescriptionTarget: z.string().min(50, "Job description must be at least 50 characters to optimize for.").optional().or(z.literal('')),
});

type ResumeFormData = z.infer<typeof resumeFormSchema>;

// Dummy acquired skills from LMDpro (replace with actual data fetching)
const lmdproAcquiredSkills: Omit<z.infer<typeof skillSchema>, 'id'>[] = [
  { name: "Agile Project Management", description: "Proficient in Agile methodologies, Scrum framework, backlog grooming, and sprint planning to deliver projects efficiently and adaptively." },
  { name: "Python for Data Analysis", description: "Skilled in using Python with Pandas, NumPy, and Matplotlib for data cleaning, manipulation, analysis, and visualization to derive actionable insights." },
  { name: "Strategic Communication", description: "Experienced in crafting clear, persuasive communication strategies, delivering impactful presentations, and fostering stakeholder engagement for organizational alignment." },
];


export default function ResumeBuilderPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<ImproveResumeOutput | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");
  const [resumePreviewContent, setResumePreviewContent] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<ResumeFormData>({
    resolver: zodResolver(resumeFormSchema),
    defaultValues: {
      fullName: "Alex User",
      email: "alex.user@example.com",
      phone: "123-456-7890",
      linkedinProfile: "https://linkedin.com/in/alexuser",
      portfolioUrl: "https://github.com/alexuser",
      summary: "Highly motivated and results-oriented professional with 5+ years of experience in software development and project management. Proven ability to lead cross-functional teams and deliver complex projects on time and within budget. Seeking to leverage technical expertise and leadership skills in a challenging new role.",
      experience: [
        { id: "exp1", jobTitle: "Senior Software Engineer", company: "Tech Solutions Inc.", location: "San Francisco, CA", startDate: "Jan 2021", endDate: "Present", description: "- Led development of a new flagship product, resulting in a 20% increase in user engagement.\n- Mentored junior engineers and improved team coding standards.\n- Optimized application performance, reducing load times by 30%." },
        { id: "exp2", jobTitle: "Software Engineer", company: "Innovate LLC", location: "Austin, TX", startDate: "Jun 2018", endDate: "Dec 2020", description: "- Developed and maintained web applications using React and Node.js.\n- Collaborated with product managers to define feature requirements." }
      ],
      education: [
        { id: "edu1", institution: "State University", degree: "M.S. in Computer Science", graduationDate: "May 2018", description: "Thesis on Machine Learning applications." },
        { id: "edu2", institution: "Tech College", degree: "B.S. in Software Engineering", graduationDate: "May 2016", description: "Graduated with Honors." }
      ],
      skills: [
        { id: "skill1", name: "JavaScript (React, Node.js)" },
        { id: "skill2", name: "Python (Django, Flask)" },
        { id: "skill3", name: "Project Management" },
      ],
      jobDescriptionTarget: "",
    },
  });

 const { fields: expFields, append: appendExperience, remove: removeExperience } = useFieldArray({ control: form.control, name: "experience" });
 const { fields: eduFields, append: appendEducation, remove: removeEducation } = useFieldArray({ control: form.control, name: "education" });
 const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control: form.control, name: "skills" });


  const generateResumePreview = (data: ResumeFormData) => {
    let content = `RESUME PREVIEW (Template: ${selectedTemplate})\n\n`;
    content += `${data.fullName}\n${data.email} | ${data.phone}\n`;
    if (data.linkedinProfile) content += `LinkedIn: ${data.linkedinProfile}\n`;
    if (data.portfolioUrl) content += `Portfolio: ${data.portfolioUrl}\n`;
    content += `\nSUMMARY\n-------\n${data.summary}\n`;
    
    if (data.experience && data.experience.length > 0) {
        content += "\nEXPERIENCE\n----------\n";
        data.experience.forEach(exp => {
            content += `${exp.jobTitle} at ${exp.company} (${exp.location || 'N/A'})\n`;
            content += `${exp.startDate} - ${exp.endDate || 'Present'}\n`;
            content += `${exp.description}\n\n`;
        });
    }

    if (data.education && data.education.length > 0) {
        content += "EDUCATION\n---------\n";
        data.education.forEach(edu => {
            content += `${edu.degree}, ${edu.institution}\n`;
            if(edu.fieldOfStudy) content += `Field: ${edu.fieldOfStudy}\n`
            if(edu.graduationDate) content += `Graduated: ${edu.graduationDate}\n`;
            if(edu.description) content += `${edu.description}\n`;
            content += "\n";
        });
    }

    if (data.skills && data.skills.length > 0) {
        content += "SKILLS\n------\n";
        data.skills.forEach(skill => {
            content += `- ${skill.name}\n`;
            if (skill.description) content += `  ${skill.description.split('\n').join('\n  ')}\n`; // Indent description
        });
    }
    return content;
  };

  useEffect(() => {
    const subscription = form.watch((values) => {
        setResumePreviewContent(generateResumePreview(values as ResumeFormData));
    });
    setResumePreviewContent(generateResumePreview(form.getValues())); // Initial preview
    return () => subscription.unsubscribe();
  }, [form, selectedTemplate]);


  async function onOptimize(values: ResumeFormData) {
    setIsLoading(true);
    setAiSuggestions(null);
    if (!values.jobDescriptionTarget) {
        toast({title: "Job Description Missing", description:"Please provide a target job description to optimize your resume.", variant: "destructive"});
        setIsLoading(false);
        return;
    }
    try {
      const fullResumeText = generateResumePreview(values); // Use structured data to form current resume text
      const result = await improveResume({
        resume: fullResumeText,
        jobDescription: values.jobDescriptionTarget,
      });
      setAiSuggestions(result);
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
    toast({ title: "LinkedIn Import", description: "Simulating LinkedIn data import... (This is a placeholder)" });
    // Example: Update form values. In a real app, this would involve an API call and data mapping.
    form.setValue("fullName", "Jane Doe (from LinkedIn)");
    form.setValue("email", "jane.linkedin@example.com");
    form.setValue("summary", "Experienced professional with a background in marketing and project management, adept at leveraging data-driven insights to achieve business objectives. (Imported from LinkedIn)");
    form.setValue("experience", [{ jobTitle: "Marketing Manager", company: "LinkedIn Corp", startDate: "2019", endDate: "2023", description: "Managed various marketing campaigns..." }]);
    form.setValue("education", [{ institution: "LinkedIn University", degree: "MBA", graduationDate: "2017" }]);
    form.trigger(); // Trigger re-validation and preview update
  };
  
  const handlePdfExport = () => {
    if (!resumePreviewContent) {
      toast({ title: "Empty Resume", description: "Please add content to your resume before exporting.", variant: "destructive" });
      return;
    }
    toast({ title: "PDF Export", description: "Generating PDF with 'Made with LMDpro' watermark (simulated)." });
    const blob = new Blob([`${resumePreviewContent}\n\n---\nMade with LMDpro`], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `LMDpro_Resume_${form.getValues("fullName")?.replace(/\s+/g, '_') || 'User'}.txt`; // Simulate PDF
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const handleAddLMDproSkills = () => {
    const currentSkills = form.getValues("skills") || [];
    const newSkillsToAdd = lmdproAcquiredSkills.filter(
        lmdSkill => !currentSkills.some(formSkill => formSkill.name.toLowerCase() === lmdSkill.name.toLowerCase())
    );
    if (newSkillsToAdd.length > 0) {
        newSkillsToAdd.forEach(skill => appendSkill(skill));
        toast({title: "LMDpro Skills Added", description: `${newSkillsToAdd.length} skills from your LMDpro courses have been added.`});
    } else {
        toast({title: "No New Skills", description: "All your LMDpro skills are already in your resume, or you haven't completed relevant modules yet."});
    }
  };

  const templates = [
    { id: "modern", name: "Modern" },
    { id: "classic", name: "Classic" },
    { id: "creative", name: "Creative" },
    { id: "technical", name: "Technical" },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Intelligent Resume Builder</h1>
        <p className="text-lg text-muted-foreground">
          Craft, optimize, and export a professional, ATS-friendly resume with AI assistance and LMDpro skill integration.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline">Resume Content & Optimization</CardTitle>
              <CardDescription>Import from LinkedIn, fill in your details, and let AI optimize your resume for specific jobs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onOptimize)} className="space-y-6">
                  {/* Personal Details */}
                  <Card className="p-4 border-primary/20">
                    <h3 className="font-headline text-lg mb-3 text-primary">Personal Details</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <FormField control={form.control} name="fullName" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} className="focus-gradient-outline"/></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} className="focus-gradient-outline"/></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone (Optional)</FormLabel><FormControl><Input {...field} className="focus-gradient-outline"/></FormControl><FormMessage /></FormItem>)} />
                      <FormField control={form.control} name="linkedinProfile" render={({ field }) => (<FormItem><FormLabel>LinkedIn URL (Optional)</FormLabel><div className="flex gap-2"><FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} className="focus-gradient-outline"/></FormControl><Button type="button" variant="outline" size="icon" title="Import data from LinkedIn" onClick={handleImportLinkedIn}><Linkedin className="h-4 w-4"/></Button></div><FormMessage /></FormItem>)} />
                    </div>
                    <FormField control={form.control} name="portfolioUrl" render={({ field }) => (<FormItem><FormLabel>Portfolio/Website URL (Optional)</FormLabel><FormControl><Input placeholder="https://yourportfolio.com" {...field} className="focus-gradient-outline"/></FormControl><FormMessage /></FormItem>)} />
                  </Card>

                  {/* Summary Section */}
                  <Card className="p-4 border-primary/20">
                     <h3 className="font-headline text-lg mb-3 text-primary">Professional Summary</h3>
                    <FormField control={form.control} name="summary" render={({ field }) => (<FormItem><FormControl><Textarea placeholder="A brief overview of your career, skills, and goals..." {...field} rows={4} className="focus-gradient-outline"/></FormControl><FormMessage /></FormItem>)} />
                  </Card>

                  {/* Experience Section */}
                  <Card className="p-4 border-primary/20">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-headline text-lg text-primary">Work Experience</h3>
                        <Button type="button" variant="outline" size="sm" onClick={() => appendExperience({ jobTitle: "", company: "", startDate: "", description: "" })}><PlusCircle className="mr-2 h-4 w-4"/>Add Experience</Button>
                    </div>
                    {expFields.map((field, index) => (
                        <Card key={field.id} className="mb-4 p-3 bg-muted/30">
                            <div className="grid sm:grid-cols-2 gap-3 mb-2">
                                <FormField control={form.control} name={`experience.${index}.jobTitle`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Job Title</FormLabel><FormControl><Input {...field} placeholder="e.g., Software Engineer" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                                <FormField control={form.control} name={`experience.${index}.company`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Company</FormLabel><FormControl><Input {...field} placeholder="e.g., Tech Innovations LLC" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                                <FormField control={form.control} name={`experience.${index}.location`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Location (Optional)</FormLabel><FormControl><Input {...field} placeholder="e.g., City, State" className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                                 <div className="grid grid-cols-2 gap-2">
                                <FormField control={form.control} name={`experience.${index}.startDate`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Start Date</FormLabel><FormControl><Input {...field} placeholder="e.g., Jan 2020" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                                <FormField control={form.control} name={`experience.${index}.endDate`} render={({ field }) => (<FormItem><FormLabel className="text-xs">End Date (or Present)</FormLabel><FormControl><Input {...field} placeholder="e.g., Dec 2022" className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                                </div>
                            </div>
                            <FormField control={form.control} name={`experience.${index}.description`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Description/Achievements</FormLabel><FormControl><Textarea {...field} placeholder="Describe your responsibilities and key achievements (use bullet points)..." rows={3} className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeExperience(index)} className="mt-2 text-destructive hover:text-destructive/80"><Trash2 className="mr-1 h-3 w-3"/>Remove</Button>
                        </Card>
                    ))}
                  </Card>

                  {/* Education Section */}
                   <Card className="p-4 border-primary/20">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-headline text-lg text-primary">Education</h3>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendEducation({ institution: "", degree: "" })}><PlusCircle className="mr-2 h-4 w-4"/>Add Education</Button>
                        </div>
                        {eduFields.map((field, index) => (
                            <Card key={field.id} className="mb-4 p-3 bg-muted/30">
                                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                                    <FormField control={form.control} name={`education.${index}.institution`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Institution</FormLabel><FormControl><Input {...field} placeholder="e.g., State University" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                                    <FormField control={form.control} name={`education.${index}.degree`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Degree</FormLabel><FormControl><Input {...field} placeholder="e.g., B.S. in Computer Science" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                                    <FormField control={form.control} name={`education.${index}.fieldOfStudy`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Field of Study (Optional)</FormLabel><FormControl><Input {...field} placeholder="e.g., Machine Learning" className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                                    <FormField control={form.control} name={`education.${index}.graduationDate`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Graduation Date (Optional)</FormLabel><FormControl><Input {...field} placeholder="e.g., May 2020" className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                                </div>
                                <FormField control={form.control} name={`education.${index}.description`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Details (Optional)</FormLabel><FormControl><Textarea {...field} placeholder="e.g., Relevant coursework, honors, thesis..." rows={2} className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                                <Button type="button" variant="ghost" size="sm" onClick={() => removeEducation(index)} className="mt-2 text-destructive hover:text-destructive/80"><Trash2 className="mr-1 h-3 w-3"/>Remove</Button>
                            </Card>
                        ))}
                   </Card>

                  {/* Skills Section */}
                  <Card className="p-4 border-primary/20">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                        <h3 className="font-headline text-lg text-primary">Skills</h3>
                        <div className="flex gap-2 flex-wrap">
                            <Button type="button" variant="outline" size="sm" onClick={handleAddLMDproSkills}><Info className="mr-2 h-4 w-4"/>Add LMDpro Skills</Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendSkill({ name: "", description: "" })}><PlusCircle className="mr-2 h-4 w-4"/>Add Skill</Button>
                        </div>
                    </div>
                     {skillFields.map((field, index) => (
                        <Card key={field.id} className="mb-4 p-3 bg-muted/30">
                            <FormField control={form.control} name={`skills.${index}.name`} render={({ field }) => (<FormItem className="mb-2"><FormLabel className="text-xs">Skill Name</FormLabel><FormControl><Input {...field} placeholder="e.g., Python" className="text-sm focus-gradient-outline"/></FormControl><FormMessage className="text-xs"/></FormItem>)} />
                            <FormField control={form.control} name={`skills.${index}.description`} render={({ field }) => (<FormItem><FormLabel className="text-xs">Description (2-5 lines, AI can help refine this later)</FormLabel><FormControl><Textarea {...field} placeholder="Briefly describe your proficiency and experience with this skill." rows={3} className="text-sm focus-gradient-outline"/></FormControl></FormItem>)} />
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeSkill(index)} className="mt-2 text-destructive hover:text-destructive/80"><Trash2 className="mr-1 h-3 w-3"/>Remove</Button>
                        </Card>
                    ))}
                  </Card>
                  
                  {/* Job Description Target for AI Optimization */}
                  <Card className="p-4 border-primary/20">
                    <h3 className="font-headline text-lg mb-3 text-primary">AI Optimization Target</h3>
                    <FormField
                        control={form.control}
                        name="jobDescriptionTarget"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Target Job Description</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Paste the job description you're applying for here. Our AI will use this to tailor suggestions and help you highlight relevant skills and experiences for better ATS compatibility." {...field} rows={8} className="focus-gradient-outline" />
                            </FormControl>
                            <FormDescription>Providing a job description enables AI to provide targeted optimization advice.</FormDescription>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                  </Card>

                  <Button type="submit" disabled={isLoading} className="w-full button-animated-gradient text-lg py-6">
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing with AI...</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> Optimize with AI</>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {aiSuggestions && (
            <Card className="shadow-lg rounded-xl mt-8">
              <CardHeader>
                <CardTitle className="font-headline animated-text-gradient text-2xl">AI Optimization Insights</CardTitle>
                <CardDescription>Review the AI's suggestions to enhance your resume for the target job.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 text-lg">AI-Generated Suggestions:</h3>
                  <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap rounded-md border p-4 bg-muted/50 text-sm leading-relaxed">
                    {aiSuggestions.suggestions}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">AI-Improved Resume Draft:</h3>
                  <ScrollArea className="h-80 rounded-md border p-4 bg-muted/50">
                    <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                        {aiSuggestions.improvedResume}
                    </div>
                  </ScrollArea>
                   <Button variant="outline" size="sm" className="mt-3" 
                    onClick={() => {
                        form.setValue("summary", "Updated summary from AI based on: " + aiSuggestions.improvedResume.substring(0,100)+"..."); // Placeholder, real app would parse and set specific fields.
                        toast({title: "Draft Applied", description: "AI draft applied to summary (example). Refine further as needed."});
                    }}>
                    Apply AI Draft (Example: Update Summary)
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-8 lg:sticky lg:top-24"> {/* Added sticky positioning for sidebar column */}
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline">Select Template</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              {templates.map(template => (
                <button
                  key={template.id}
                  className={cn(
                      "border-2 rounded-lg overflow-hidden transition-all p-2 flex flex-col items-center justify-center aspect-[3/4] hover:opacity-80",
                      selectedTemplate === template.id ? 'border-primary ring-2 ring-primary shadow-md' : 'border-border hover:border-muted-foreground'
                  )}
                  onClick={() => setSelectedTemplate(template.id)}
                  aria-pressed={selectedTemplate === template.id}
                >
                  <div className="w-full h-full bg-muted/40 flex items-center justify-center rounded">
                     {/* Using a simple div instead of Image to remove dependency */}
                    <div className="w-24 h-32 flex items-center justify-center text-xs text-muted-foreground">{template.name}</div>
                  </div>
                  <p className="text-xs text-center mt-1.5 font-medium">{template.name}</p>
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline">Live Preview & Export</CardTitle>
               <CardDescription>A simplified text preview. Actual PDF will use selected template.</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 border rounded-md p-4 bg-muted/30">
                {resumePreviewContent ? (
                  <div className="text-xs whitespace-pre-wrap font-mono leading-relaxed">
                    {resumePreviewContent}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <FileText className="w-16 h-16" />
                    <p className="ml-2">Fill in your resume content to see a preview.</p>
                  </div>
                )}
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePdfExport} className="w-full button-animated-gradient" disabled={!resumePreviewContent}>
                <Download className="mr-2 h-4 w-4" /> Export as PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
