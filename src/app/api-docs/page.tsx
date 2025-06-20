
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, ShieldCheck, BookOpen, Download, Terminal, ChevronRight } from "lucide-react";
import Link from "next/link";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

const endpoints = [
  {
    method: "POST",
    path: "/v1/learning-paths/generate",
    title: "Personalized Learning Path API",
    description: "Generates a personalized learning path based on user's role, interests, and goals.",
    requestBody: "{ \"role\": string, \"interests\": string, \"goals\": string }",
    responseBody: "{ \"learningPath\": string }",
    exampleRequest: `curl -X POST https://api.lmdpro.com/v1/learning-paths/generate \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "role": "Software Engineer",
  "interests": "AI, Distributed Systems",
  "goals": "Become a Machine Learning Engineer"
}'`
  },
  {
    method: "POST",
    path: "/v1/video-scripts/generate",
    title: "Video Script Generation API",
    description: "Creates an educational video script for a given topic, language, and tone.",
    requestBody: "{ \"topic\": string, \"language\": string, \"tone\": string }",
    responseBody: "{ \"script\": string }",
    exampleRequest: `curl -X POST https://api.lmdpro.com/v1/video-scripts/generate \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "topic": "Introduction to Quantum Computing",
  "language": "English",
  "tone": "Educational"
}'`
  },
  {
    method: "POST",
    path: "/v1/resumes/optimize",
    title: "Resume Optimization API",
    description: "Improves resume content based on a target job description and provides suggestions for ATS compatibility.",
    requestBody: "{ \"resumeText\": string, \"jobDescription\": string }",
    responseBody: "{ \"improvedResume\": string, \"suggestions\": string }",
    exampleRequest: `curl -X POST https://api.lmdpro.com/v1/resumes/optimize \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
  "resumeText": "Experienced project manager...",
  "jobDescription": "Seeking a senior project manager..."
}'`
  },
];

export default function ApiDocumentationPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24 bg-muted/20 dark:bg-muted/40">
        <div className="container mx-auto px-4 space-y-16">
          <section className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">LMDpro API Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate LMDpro's powerful AI capabilities into your applications. Access personalized learning, video generation, and resume optimization endpoints.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="#getting-started" passHref>
                <Button size="lg" className="button-animated-gradient">
                  <Zap className="mr-2 h-5 w-5" /> Get Started
                </Button>
              </Link>
              <Link href="/api-management" passHref> 
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
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li><strong>Sign Up & Choose a Plan:</strong> If you haven&apos;t already, <Link href="/register" className="text-primary hover:underline">create an LMDpro account</Link> and select an API-enabled subscription tier (Premium, Teams, or Enterprise).</li>
                  <li><strong>Generate Your API Key:</strong> Navigate to your <Link href="/api-management" className="text-primary hover:underline">API Management</Link> page in your account settings to generate your unique API key. Keep this key secure.</li>
                  <li><strong>Authentication:</strong> Include your API key in the <code>Authorization</code> header of your requests as a Bearer token: <code>Authorization: Bearer YOUR_API_KEY</code>.</li>
                  <li><strong>Rate Limits:</strong> Be aware of the rate limits associated with your subscription tier. Exceeding these limits will result in <code>429 Too Many Requests</code> errors.</li>
                  <li><strong>Make Your First Request:</strong> Explore the endpoints below and start building! Check our rate limits and usage guidelines on the <Link href="/pricing" className="text-primary hover:underline">Pricing Page</Link>.</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          <section id="endpoints">
            <h2 className="text-3xl font-headline font-semibold mb-8">Core API Endpoints</h2>
            <div className="space-y-8">
              {endpoints.map((endpoint, idx) => (
                <Card key={idx} className="shadow-md overflow-hidden">
                  <CardHeader className="bg-muted/30 dark:bg-muted/50">
                    <CardTitle className="font-headline text-xl flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-mono ${endpoint.method === 'POST' ? 'bg-blue-500/80 text-white' : 'bg-green-500/80 text-white'}`}>{endpoint.method}</span>
                      <span className="text-primary">{endpoint.path}</span>
                    </CardTitle>
                    <CardDescription>{endpoint.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Request Body:</h4>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs overflow-x-auto">
                        <code>{endpoint.requestBody}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Example Response Body:</h4>
                       <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md text-xs overflow-x-auto">
                        <code>{endpoint.responseBody}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Example cURL Request:</h4>
                      <div className="relative group">
                        <pre className="bg-gray-900 text-gray-300 p-4 rounded-md text-xs overflow-x-auto">
                          <code>{endpoint.exampleRequest}</code>
                        </pre>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-7 w-7 opacity-50 group-hover:opacity-100 transition-opacity"
                          onClick={() => navigator.clipboard.writeText(endpoint.exampleRequest)}
                          title="Copy to clipboard"
                        >
                          <Clipboard className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section id="sdk-postman">
            <h2 className="text-3xl font-headline font-semibold mb-6">SDKs & Postman Collection</h2>
            <Card className="shadow-lg">
                <CardContent className="pt-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="text-muted-foreground flex-1">
                        <p className="mb-2">Accelerate your integration with our upcoming SDKs (JavaScript, Python) and a comprehensive Postman collection.</p>
                        <p>Sign up for our developer newsletter to be notified upon release and receive API updates.</p>
                    </div>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Download Postman Collection (Coming Soon)
                    </Button>
                </CardContent>
            </Card>
          </section>

          <section id="support-faq-api">
            <h2 className="text-3xl font-headline font-semibold mb-6">API Support & FAQ</h2>
            <Card className="shadow-lg">
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p><strong>Authentication:</strong> All API requests must be authenticated using a Bearer token in the Authorization header. Your API key acts as this token.</p>
                <p><strong>Error Codes:</strong> We use standard HTTP status codes to indicate the success or failure of an API request. Common codes include 200 (OK), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 429 (Too Many Requests), and 500 (Internal Server Error). Detailed error messages will be provided in the JSON response body.</p>
                <p><strong>Versioning:</strong> Our API is versioned (e.g., /v1/). We strive to maintain backward compatibility but will announce any breaking changes well in advance.</p>
                <p><strong>Contact Support:</strong> For API-specific issues, please contact <code className="bg-muted px-1 rounded text-foreground">api-support@lmdpro.com</code> or visit our <Link href="/support" className="text-primary hover:underline">Help Center</Link> and specify you are an API user.</p>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>
      <PublicFooter />
    </>
  );
}

// Helper component for Clipboard, assuming it's not in lucide-react directly like this
// For a real app, use a proper icon or library
const Clipboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);