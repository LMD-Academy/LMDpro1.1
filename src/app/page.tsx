
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Zap, Star, Lightbulb, Film, FileText, GraduationCap, Briefcase, ShieldCheck, Handshake, BookOpen, DollarSign, HelpCircle, Settings, Link as LinkIcon, Users, Building, CheckCircle, UserCircle } from "lucide-react";
import Link from "next/link";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

const featureCards = [
  {
    title: "AI-Powered Learning Paths",
    description: "Dynamically creates personalized learning journeys based on your profile and goals, leveraging real-time internet research for up-to-date content and comprehensive skill gap analysis. LMDpro's AI Agent actively guides you, suggesting modules, resources, and assessments to ensure optimal skill acquisition and career alignment.",
    icon: Lightbulb,
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    href: "/learning-paths",
  },
  {
    title: "Automated Video Creation",
    description: "Automatically generate engaging educational videos from research scripts or your own text. Supports multiple languages, diverse 3D animated avatar selections, and custom branding application for streamlined, professional content creation. Ideal for educators and corporate training.",
    icon: Film,
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    href: "/video-creation",
  },
  {
    title: "Intelligent Resume Builder",
    description: "Import data from LinkedIn, design with customizable templates, and optimize content with AI suggestions tailored to specific job descriptions and ATS scoring. Export professional resumes as PDF, with a subtle 'Made with LMDpro' watermark on the free tier.",
    icon: FileText,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500",
    href: "/resume-builder",
  },
  {
    title: "24/7 AI Support & Research",
    description: "Get instant assistance for technical issues, billing inquiries, and course navigation via our intelligent AI chat. Leverage the Academic Research Agent for in-depth exploration of topics, powered by unrestricted internet access and RAG capabilities.",
    icon: HelpCircle,
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-500",
    href: "/support",
  },
];

const pricingTiersHomepage = [
  { name: "Community", price: "Free", model: "Latest Free Gemma Model", features: ["Limited Personalized Learning Paths", "Basic Video Creation (watermarked)", "1 Resume Template (watermarked export)", "Selection of Free Courses"], cta: "Join for Free", href:"/register?tier=community" },
  { name: "Premium", price: "$5.80/mo", model: "Latest Flash Model", features: ["Unlimited Learning Paths & AI Generation", "Advanced Video Creation (No Watermark)", "All Resume Templates & AI Optimization (No Watermark)", "Full Course Catalog Access"], cta: "Go Premium", href:"/register?tier=premium", popular: true },
  { name: "Teams", price: "$196/mo", model: "Latest Pro Model", features: ["All Premium Features", "Team Management & Analytics", "Shared Resources & Brand Kits", "Consolidated Billing"], cta: "Choose Teams", href:"/register?tier=teams" },
];


const courseHighlights = [
  { title: "Executive Leadership Development", icon: GraduationCap, type: "Learning Path", description: "Master executive skills for top-tier roles. Develop strategic thinking, communication, and team motivation abilities essential for modern leadership in a global context." },
  { title: "AI for Business Professionals", icon: Briefcase, type: "Course", description: "Understand and apply Artificial Intelligence in various business contexts to drive innovation, operational efficiency, and data-driven decision-making strategies." },
  { title: "Autonomous AI Agent Development", icon: Zap, type: "Learning Path", description: "Comprehensive training from foundational AI principles to designing, building, and deploying advanced autonomous AI agents capable of complex tasks." },
];

const testimonials = [
    { name: "Alex R.", role: "Software Engineer", quote: "LMDpro's personalized learning path in AI was a game-changer. It helped me upskill effectively and secure a promotion. The AI resume builder polished my CV perfectly!" , avatarHint: "software engineer" },
    { name: "Maria S.", role: "Marketing Manager", quote: "The AI video creation tool is incredibly efficient for our team's internal training content. We're producing high-quality, professional videos in a fraction of the time." , avatarHint: "marketing manager" },
    { name: "David K.", role: "University Student", quote: "As a student, the Non-Profit/Student tier provides amazing value. I'm learning cutting-edge skills in data science that are preparing me for my future career." , avatarHint: "university student" },
];

const quickLinks = [
    { href: "/dashboard", label: "My Dashboard", icon: GraduationCap },
    { href: "/courses", label: "Explore Courses", icon: BookOpen },
    { href: "/resume-builder", label: "Build My Resume", icon: FileText },
    { href: "/api-management", label: "Developer APIs", icon: Zap },
    { href: "/pricing", label: "View Plans", icon: DollarSign },
    { href: "/support", label: "Get Support", icon: HelpCircle },
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-32 text-center bg-card/50 backdrop-blur-sm dark:bg-card/80"> {/* Adjusted top padding */}
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 animated-text-gradient">
              Unlock Your Potential with LMDpro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Your AI-powered partner for personalized learning, skill enhancement, automated video creation, and career advancement. Experience the future of education, tailored to you, by an advanced AI-driven agentic system.
            </p>
            <Link href="/register" passHref>
              <Button size="lg" className="button-animated-gradient text-lg px-10 py-6">
                Start Your Learning Path <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
             <div className="mt-16">
              <div className="w-full max-w-4xl h-[300px] md:h-[400px] bg-muted rounded-lg shadow-2xl mx-auto border flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">Dynamic LMDpro Platform Showcase: Visualize an interactive demo of AI learning paths, video creation previews, and resume optimization in action.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-4 animated-text-gradient">Transform Your Career with AI-Driven Learning</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              LMDpro leverages cutting-edge AI to provide an educational experience that's truly personalized, effective, and geared towards tangible career outcomes and skill mastery. Our agentic system actively guides your learning.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <div className={`p-3 rounded-full w-fit mb-4 ${feature.bgColor}`}>
                      <feature.icon className={`h-8 w-8 ${feature.textColor}`} />
                    </div>
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={feature.href} passHref className="w-full">
                       <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Highlights Section */}
        <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12 animated-text-gradient">
              Popular Learning Paths & Courses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseHighlights.map((course, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <course.icon className="h-16 w-16 text-primary/50" data-ai-hint={course.title.toLowerCase().split(" ").slice(0,2).join(" ")} />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <course.icon className="h-6 w-6 text-primary shrink-0" />
                      <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm h-16 overflow-hidden">{course.description} ({course.type})</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto">
                    <Link href="/courses" passHref className="w-full">
                        <Button variant="outline" className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/courses" passHref>
                <Button size="lg" className="button-animated-gradient">
                  Explore All Courses & Paths
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing Section Block */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-4 animated-text-gradient">Flexible Pricing for Everyone</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Choose a plan that fits your needs, from individual learners to large enterprises. All plans are designed to deliver maximum value and accelerate your growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {pricingTiersHomepage.map((tier) => (
                <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${tier.popular ? 'border-primary ring-2 ring-primary relative' : 'border-border'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-lg border-2 border-background">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl mb-2">{tier.name}</CardTitle>
                    <p className="text-3xl font-bold mb-1">{tier.price}</p>
                    <p className="text-sm text-muted-foreground h-10">{tier.model}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2 text-sm">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={tier.href} passHref className="w-full">
                      <Button className="w-full button-animated-gradient">{tier.cta}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Link href="/pricing" passHref>
                <Button variant="link" className="text-lg animated-text-gradient font-semibold">
                  See Full Pricing Details & Compare All Plans <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card/50 backdrop-blur-sm dark:bg-card/80">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12 animated-text-gradient">
              Loved by Learners & Professionals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mr-4">
                        <UserCircle className="h-8 w-8 text-muted-foreground" data-ai-hint={testimonial.avatarHint || 'person silhouette'} />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links / Call to Action Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-6 animated-text-gradient">Ready to Elevate Your Career?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Explore LMDpro and discover how our AI-driven platform can accelerate your learning and professional growth. Sign up today and take the first step towards a brighter future.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                {quickLinks.map(link => (
                    <Link key={link.label} href={link.href} passHref>
                        <Button variant="outline" className="w-full h-20 flex-col gap-1 text-xs sm:text-sm hover:bg-primary/5 hover:text-primary">
                            <link.icon className="h-6 w-6 mb-1" />
                            {link.label}
                        </Button>
                    </Link>
                ))}
            </div>
             <Link href="/register" passHref>
                <Button size="lg" className="button-animated-gradient text-lg px-10 py-6">
                    Sign Up For Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>
        </section>

      </main>
      <PublicFooter />
    </>
  );
}
