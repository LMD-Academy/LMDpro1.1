
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, BookMarked, Search, Code, FolderTree, ChevronRight, Zap, Brain, Settings2, HelpCircle } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample documentation structure (in a real app, this might be fetched or generated)
const docSections = [
  {
    title: "Getting Started with LMDpro",
    id: "getting-started",
    icon: Zap,
    subsections: [
      { title: "Creating Your Account", href: "/docs/getting-started/account-creation" },
      { title: "Navigating the Dashboard", href: "/docs/getting-started/dashboard-overview" },
      { title: "Understanding Subscription Tiers", href: "/docs/getting-started/subscriptions" },
    ]
  },
  {
    title: "Core Features Explained",
    id: "core-features",
    icon: Brain,
    subsections: [
      { title: "AI-Powered Learning Paths", href: "/docs/features/learning-paths" },
      { title: "Automated Video Creation", href: "/docs/features/video-creation" },
      { title: "Intelligent Resume Builder", href: "/docs/features/resume-builder" },
      { title: "AI Academic Research Agent", href: "/docs/features/academic-research" },
      { title: "AI Support Chatbot", href: "/docs/features/ai-support" },
    ]
  },
  {
    title: "LMDpro Educational Content Structure",
    id: "content-structure",
    icon: FolderTree,
    subsections: [
      { title: "Overview of Content Hierarchy (Fields, Courses, Modules)", href: "/docs/content/hierarchy" },
      { title: "LMDpro Advanced Educational Markdown (AEM) Format", href: "/docs/content/aem-format" },
      { title: "Assessment and Quiz Structure", href: "/docs/content/assessments" },
    ]
  },
  {
    title: "Developer Zone (API & Integration)",
    id: "developer-zone",
    icon: Code,
    subsections: [
      { title: "API Reference & Authentication", href: "/api-docs" },
      { title: "Using LMDpro API Keys", href: "/docs/developer/api-keys" },
      { title: "SDKs & Client Libraries (Coming Soon)", href: "/docs/developer/sdks" },
    ]
  },
  {
    title: "Account & Billing Management",
    id: "account-billing",
    icon: Settings2,
    subsections: [
      { title: "Managing Your Profile", href: "/account?tab=profile" },
      { title: "Changing Your Password", href: "/account?tab=security" },
      { title: "Subscription & Payment Methods", href: "/account?tab=subscription" },
      { title: "Notification Preferences", href: "/account?tab=notifications" },
    ]
  },
  {
    title: "Troubleshooting & FAQ",
    id: "troubleshooting",
    icon: HelpCircle,
    subsections: [
      { title: "Common Issues & Solutions", href: "/support#faq" },
      { title: "Contacting Support", href: "/support#contact" },
    ]
  }
];


export default function AppDocumentationPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">LMDpro Documentation Hub</h1>
        <p className="text-lg text-muted-foreground">
          Find comprehensive guides, tutorials, and references for all aspects of the LMDpro platform.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Browse Documentation Topics</CardTitle>
              </div>
              <CardDescription>
                Explore detailed articles on LMDpro features, educational content structure, API usage, and account management.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {docSections.map((section) => (
                  <AccordionItem value={section.id} key={section.id}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-2">
                        <section.icon className="h-5 w-5 text-primary" />
                        {section.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2 pl-4">
                        {section.subsections.map(subsection => (
                           <li key={subsection.title}>
                            <Link href={subsection.href} passHref>
                              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary justify-start">
                                <ChevronRight className="h-4 w-4 mr-1" /> {subsection.title}
                              </Button>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Search className="h-5 w-5 text-primary" /> Search Docs</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Search documentation..." className="focus-gradient-outline"/>
              <Button className="w-full mt-3 button-animated-gradient">Search</Button>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Key Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Link href="/docs/content/aem-format" passHref><Button variant="link" className="p-0 h-auto text-primary">Advanced Educational Markdown (AEM)</Button></Link>
                <Link href="/api-docs" passHref><Button variant="link" className="p-0 h-auto text-primary">Full API Reference</Button></Link>
                <Link href="/terms" passHref><Button variant="link" className="p-0 h-auto text-primary">Terms of Service</Button></Link>
                <Link href="/privacy" passHref><Button variant="link" className="p-0 h-auto text-primary">Privacy Policy</Button></Link>
            </CardContent>
          </Card>
           <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><BookMarked className="h-5 w-5 text-primary" /> Content Structure Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Link href="/docs/system_structure" passHref><Button variant="link" className="p-0 h-auto text-primary">AEM Specification</Button></Link>
                <Link href="/docs/course_structure" passHref><Button variant="link" className="p-0 h-auto text-primary">Course Hierarchy Guide</Button></Link>
                <Link href="/docs/assessment_structure" passHref><Button variant="link" className="p-0 h-auto text-primary">Assessment Structure Guide</Button></Link>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <section className="mt-12 text-center">
        <h3 className="text-2xl font-headline font-semibold mb-3 animated-text-gradient">Can't find what you're looking for?</h3>
        <p className="text-muted-foreground mb-6">Our AI Support Assistant or community forums might have the answer.</p>
        <div className="flex gap-4 justify-center">
            <Link href="/support" passHref><Button className="button-animated-gradient">Contact AI Support</Button></Link>
            <Button variant="outline" onClick={() => alert("Community Forum link placeholder")}>Visit Community Forums</Button>
        </div>
      </section>

    </div>
  );
}
