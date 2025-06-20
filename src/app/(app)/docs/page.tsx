// src/app/(app)/docs/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function AppDocumentationPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">LMDpro Documentations</h1>
        <p className="text-lg text-muted-foreground">
          Find detailed information about LMDpro features, modules, and how to use them.
        </p>
      </section>

      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Welcome to LMDpro Docs</CardTitle>
          </div>
          <CardDescription>
            This section provides comprehensive documentation for all aspects of the LMDpro platform.
            Whether you&apos;re a student, educator, or developer, you&apos;ll find the information you need here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold text-xl">Key Sections:</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>User Guides: Step-by-step instructions for using LMDpro features.</li>
            <li>Course Content Structure: Understanding how learning materials are organized.</li>
            <li>AI Agent Capabilities: Details on how our AI assists in learning and content creation.</li>
            <li>Resume Builder: Tips and tricks for creating the perfect resume.</li>
            <li>Video Creation Tool: How to generate videos, select avatars, and apply branding.</li>
            <li>API Reference: For developers looking to integrate with LMDpro (see also public <Link href="/api-docs" className="text-primary hover:underline">API Docs</Link>).</li>
            <li>Troubleshooting & FAQ: Answers to common questions and solutions for potential issues.</li>
          </ul>
          <p className="text-sm text-muted-foreground pt-4">
            This documentation is actively being developed. Check back frequently for updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
