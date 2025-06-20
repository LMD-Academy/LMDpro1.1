
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, ShieldCheck, BookOpen, Download } from "lucide-react";
import Link from "next/link";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

export default function ApiDocumentationPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-16">
          <section className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">LMDpro API Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate LMDpro's powerful AI capabilities into your applications. Access personalized learning, video generation, and resume optimization endpoints.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#getting-started" asChild>
                <Button size="lg" className="button-animated-gradient">
                  <Zap className="mr-2 h-5 w-5" /> Get Started
                </Button>
              </Link>
              <Link href="/api-management" asChild> 
                <Button size="lg" variant="outline">
                   Manage API Keys
                </Button>
              </Link>
            </div>
          </section>

          <section id="getting-started">
            <h2 className="text-3xl font-headline font-semibold mb-6">Getting Started</h2>
            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">Follow these steps to start using the LMDpro API:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Sign Up & Choose a Plan:</strong> If you haven't already, <Link href="/register" className="text-primary hover:underline">create an LMDpro account</Link> and select an API-enabled subscription tier.</li>
                  <li><strong>Generate Your API Key:</strong> Navigate to your <Link href="/api-management" className="text-primary hover:underline">API Management</Link> dashboard to generate your unique API key.</li>
                  <li><strong>Authentication:</strong> Include your API key in the <code>Authorization</code> header of your requests as a Bearer token: <code>Authorization: Bearer YOUR_API_KEY</code>.</li>
                  <li><strong>Make Your First Request:</strong> Explore the endpoints below and start building! Check our rate limits and usage guidelines.</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section id="endpoints">
            <h2 className="text-3xl font-headline font-semibold mb-6">Core Endpoints</h2>
            <div className="space-y-8">
              {/* Learning Path API */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Code className="h-6 w-6 text-primary"/> Personalized Learning Path API</CardTitle>
                  <CardDescription><code>POST /v1/learning-paths/generate</code></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Generates a personalized learning path based on user's role, interests, and goals.</p>
                  <p className="text-sm text-muted-foreground"><strong>Request Body:</strong> <code>{"{ role: string, interests: string, goals: string }"}</code></p>
                  <p className="text-sm text-muted-foreground"><strong>Response:</strong> <code>{"{ learningPath: string }"}</code></p>
                </CardContent>
              </Card>

              {/* Video Script API */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Code className="h-6 w-6 text-primary"/> Video Script Generation API</CardTitle>
                  <CardDescription><code>POST /v1/video-scripts/generate</code></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Creates an educational video script for a given topic, language, and tone.</p>
                  <p className="text-sm text-muted-foreground"><strong>Request Body:</strong> <code>{"{ topic: string, language: string, tone: string }"}</code></p>
                  <p className="text-sm text-muted-foreground"><strong>Response:</strong> <code>{"{ script: string }"}</code></p>
                </CardContent>
              </Card>

              {/* Resume Optimization API */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="font-headline flex items-center gap-2"><Code className="h-6 w-6 text-primary"/> Resume Optimization API</CardTitle>
                  <CardDescription><code>POST /v1/resumes/optimize</code></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Improves resume content based on a target job description and provides suggestions.</p>
                  <p className="text-sm text-muted-foreground"><strong>Request Body:</strong> <code>{"{ resumeText: string, jobDescription: string }"}</code></p>
                  <p className="text-sm text-muted-foreground"><strong>Response:</strong> <code>{"{ improvedResume: string, suggestions: string }"}</code></p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section id="sdk-postman">
            <h2 className="text-3xl font-headline font-semibold mb-6">SDKs & Postman Collection</h2>
            <Card className="shadow-lg">
                <CardContent className="pt-6 flex flex-col md:flex-row items-center gap-6">
                    <p className="text-muted-foreground flex-1">
                        Accelerate your integration with our upcoming SDKs (JavaScript, Python) and a comprehensive Postman collection.
                        Sign up for updates to be notified upon release.
                    </p>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download Postman Collection (Coming Soon)
                    </Button>
                </CardContent>
            </Card>
          </section>

          <section id="support-faq">
            <h2 className="text-3xl font-headline font-semibold mb-6">API Support & FAQ</h2>
            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-4">
                <p><strong>Rate Limits:</strong> Rate limits vary by subscription tier. Please refer to your <Link href="/pricing" className="text-primary hover:underline">plan details</Link>.</p>
                <p><strong>Error Codes:</strong> Standard HTTP error codes are used. Detailed error messages will be provided in the response body.</p>
                <p><strong>Contact Support:</strong> For API-specific issues, please contact <code className="bg-muted px-1 rounded">api-support@lmdpro.com</code> or visit our <Link href="/support" className="text-primary hover:underline">Help Center</Link>.</p>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
      <PublicFooter />
    </>
  );
}

