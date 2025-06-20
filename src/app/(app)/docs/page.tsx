
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, BookMarked, Search, Code, FolderTree, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

// Placeholder icons for components if not already in lucide-react, or if specific ones are needed
const Zap = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const Brain = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.676.75.75 0 01.819.162l3.962 3.962c.407.406.407 1.06 0 1.467l-2.829 2.828a1 1 0 01-1.414 0l-4.242-4.242a.75.75 0 00-1.061 0c-1.106 1.105-2.94 1.105-4.046 0s-1.106-2.94 0-4.046a.75.75 0 000-1.06l-4.242-4.243a1 1 0 010-1.414l2.828-2.828c.408-.407 1.062-.407 1.468 0l3.962 3.962z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 6a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"></path></svg>;
const Settings2 = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const HelpCircle = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.755 4 3.92C16 12.805 14.5 14 12 14m0 0v1m0-6.953c0-1.349.912-2.14 2.218-2.14 .224 0 .66.106.865.227M8 19a4 4 0 004 4h0a4 4 0 004-4m0-4a4 4 0 00-4-4h0a4 4 0 