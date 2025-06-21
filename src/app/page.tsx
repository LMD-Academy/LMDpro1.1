
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, ClipboardList, Library, Code2, DollarSign, HelpCircle, LayoutGrid, BookOpen, Users, Building, CheckCircle, GraduationCap } from "lucide-react";
import Link from "next/link";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const featureCards = [
  {
    title: "AI-Powered Learning Paths",
    description: "Dynamically creates personalized learning journeys based on your profile and goals, leveraging real-time internet research for up-to-date content and comprehensive skill gap analysis. LMDpro's AI Agent actively guides you, suggesting modules, resources, and assessments to ensure optimal skill acquisition and career alignment.",
    icon: Lightbulb,
    bgColor: "bg-blue-500/10 dark:bg-blue-900/30",
    textColor: "text-blue-600 dark:text-blue-400",
    href: "/learning-paths",
  },
  {
    title: "Intelligent Resume Builder",
    description: "Import data from LinkedIn, design with customizable templates, and optimize content with AI suggestions tailored to specific job descriptions and ATS scoring. Export professional resumes as PDF.",
    icon: ClipboardList,
    bgColor: "bg-purple-500/10 dark:bg-purple-900/30",
    textColor: "text-purple-600 dark:text-purple-400",
    href: "/resume-builder",
  },
  {
    title: "AI Academic Research Agent",
    description: "Leverage our AI research assistant for in-depth topic exploration, literature reviews, and synthesizing complex information from validated web data and LMDpro's extensive knowledge base. Your personal AI research partner.",
    icon: Library,
    bgColor: "bg-orange-500/10 dark:bg-orange-900/30",
    textColor: "text-orange-600 dark:text-orange-400",
    href: "/academic-research",
  },
   {
    title: "Comprehensive Course Catalog",
    description: "Explore a vast library of courses across Technology, Business, Leadership, and more. Our content is structured for deep learning, from foundational skills to executive-level strategy, all accessible through our intelligent learning platform.",
    icon: BookOpen,
    bgColor: "bg-green-500/10 dark:bg-green-900/30",
    textColor: "text-green-600 dark:text-green-400",
    href: "/courses",
  },
];

const pricingTiersHomepage = [
  { name: "Community", price: "Free", model: "Latest Free Gemma Model", features: ["Limited Personalized Learning Paths", "Basic Resume Builder (watermarked)", "Selection of Free Courses"], cta: "Join for Free", href:"/register?tier=community" },
  { name: "Premium", price: "$5.80/mo", model: "Latest Flash AI Models", features: ["Unlimited Learning Paths & AI Generation", "Full Resume Optimization", "Full Course Catalog Access"], cta: "Go Premium", href:"/register?tier=premium", popular: true },
  { name: "Teams", price: "$196/mo", model: "Latest Pro AI Models", features: ["All Premium Features", "Team Management & Analytics", "Shared Resources & Brand Kits"], cta: "Choose Teams", href:"/register?tier=teams" },
];

const courseHighlights = [
  { id: "GM_L5_CAP", title: "Executive Leadership Capstone L5", icon: Building, type: "Learning Path", description: "Lead global organizations and master C-suite strategy, large-scale transformation, and executive-level governance.", category: "Leadership" },
  { id: "AI_AGENT_DEV", title: "Autonomous AI Agent Development", icon: Zap, type: "Learning Path", description: "Comprehensive training from foundational AI principles to designing, building, and deploying advanced autonomous AI agents.", category: "AI & Tech" },
  { id: "DS_L3", title: "Data Science Specialization L3", icon: BookOpen, type: "Specialization", description: "Core Python data science libraries, data analysis, visualization, and an introduction to machine learning concepts and algorithms.", category: "Data Science" },
];

const testimonials = [
    { name: "Alex R.", role: "Software Engineer", quote: "LMDpro's personalized learning path in AI was a game-changer. It helped me upskill effectively and secure a promotion. The AI resume builder polished my CV perfectly!", avatarHint: "software engineer", avatarImage: "https://placehold.co/100x100.png" },
    { name: "Maria S.", role: "Marketing Manager", quote: "The AI features for content strategy and market research are top-notch. It feels like having a dedicated research assistant on my team. Highly recommended for professionals looking to stay ahead.", avatarHint: "marketing manager", avatarImage: "https://placehold.co/100x100.png" },
    { name: "Dr. David K.", role: "University Professor", quote: "LMDpro is an invaluable resource for my students. The Non-Profit/Student tier offers exceptional value, providing access to cutting-edge AI tools and courses that prepare them for future careers. The AI research agent is fantastic.", avatarHint: "university professor", avatarImage: "https://placehold.co/100x100.png" },
];

const quickLinks = [
    { href: "/dashboard", label: "My Dashboard", icon: LayoutGrid },
    { href: "/courses", label: "Explore Courses", icon: GraduationCap },
    { href: "/resume-builder", label: "Build My Resume", icon: ClipboardList },
    { href: "/api-management", label: "Developer APIs", icon: Code2 },
    { href: "/pricing", label: "View Plans", icon: DollarSign },
    { href: "/support", label: "Get Support", icon: HelpCircle },
];

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 text-center bg-card/50 backdrop-blur-sm dark:bg-card/80">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 animated-text-gradient">
              Unlock Your Potential with LMDpro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Your AI-powered partner for personalized learning, skill enhancement, and career advancement. Experience the future of education, tailored to you, by an advanced AI-driven agentic system.
            </p>
            <Link href="/register" passHref>
              <Button size="lg" className="button-animated-gradient text-lg px-10 py-6">
                Start Your Learning Path <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-xl border border-border hover:border-primary/30">
                  <CardHeader className="pt-5">
                    <div className="flex items-center gap-4">
                        <div className={cn("p-3 rounded-full w-fit mb-3", feature.bgColor)}>
                           <feature.icon className={cn("h-7 w-7", feature.textColor)} />
                        </div>
                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Link href={feature.href} passHref className="w-full">
                       <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:text-primary/90">
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
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col rounded-xl border border-border hover:border-primary/30">
                  <CardHeader className="pt-4 pb-2 flex-row justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-xl text-foreground">{course.title}</CardTitle>
                        <CardDescription className="text-sm">{course.type}</CardDescription>
                    </div>
                     <course.icon className="h-10 w-10 text-primary/70 shrink-0" />
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <p className="text-xs text-muted-foreground mb-3">Category: {course.category}</p>
                     <p className="text-sm h-16 overflow-hidden line-clamp-3 text-muted-foreground">{course.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Link href={`/courses/${course.id}`} passHref className="w-full">
                        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:text-primary/90">
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
                <Card key={tier.name} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border ${tier.popular ? 'border-primary ring-2 ring-primary relative' : 'border-border hover:border-primary/30'}`}>
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-lg button-animated-gradient border-2 border-background">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pt-8 pb-4">
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
                  <CardFooter className="mt-auto pt-4">
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
                <Card key={index} className="shadow-md rounded-xl border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
                {quickLinks.map(link => (
                    <Link key={link.label} href={link.href} passHref>
                        <Button variant="outline" className="w-full h-20 flex-col gap-1 text-xs sm:text-sm hover:bg-primary/5 hover:text-primary border-border hover:border-primary/30">
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
