
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Lightbulb, ClipboardList, Library, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAllCourses } from "@/lib/course-data";

const featureCards = [
  {
    title: "AI-Powered Learning Paths",
    description: "Dynamically creates personalized learning journeys based on your profile and goals, leveraging real-time internet research for up-to-date content and comprehensive skill gap analysis.",
    icon: Lightbulb,
    href: "/learning-paths",
  },
  {
    title: "Intelligent Resume Builder",
    description: "Import data from LinkedIn, design with customizable templates, and optimize content with AI suggestions tailored to specific job descriptions and ATS scoring.",
    icon: ClipboardList,
    href: "/resume-builder",
  },
  {
    title: "AI Academic Research Agent",
    description: "Leverage our AI research assistant for in-depth topic exploration, literature reviews, and synthesizing complex information from validated web data and LMDpro's knowledge base.",
    icon: Library,
    href: "/academic-research",
  },
   {
    title: "Comprehensive Course Catalog",
    description: "Explore a vast library of courses across Technology, Business, Leadership, and more. Our content is structured for deep learning, from foundational skills to executive-level strategy.",
    icon: BookOpen,
    href: "/courses",
  },
];

const pricingTiersHomepage = [
  { name: "Community", price: "Free", model: "Latest Free Gemma Model", features: ["Limited Personalized Learning Paths", "Basic Resume Builder (watermarked)", "Selection of Free Courses"], cta: "Join for Free", href:"/register?tier=community" },
  { name: "Premium", price: "$5.80/mo", model: "Latest Flash AI Models", features: ["Unlimited Learning Paths & AI Generation", "Full Resume Optimization", "Full Course Catalog Access"], cta: "Go Premium", href:"/register?tier=premium", popular: true },
  { name: "Teams", price: "$196/mo", model: "Latest Pro AI Models", features: ["All Premium Features", "Team Management & Analytics", "Shared Resources & Brand Kits"], cta: "Choose Teams", href:"/register?tier=teams" },
];

const allCourses = getAllCourses();
const courseHighlights = allCourses.filter(c => ["AI_AGENT_DEV", "CS_L3", "FBS_L1"].includes(c.id));

const testimonials = [
    { name: "Alex R.", role: "Software Engineer", quote: "LMDpro's personalized learning path in AI was a game-changer. It helped me upskill effectively and secure a promotion. The AI resume builder polished my CV perfectly!", avatarHint: "software engineer", avatarImage: "https://placehold.co/100x100.png" },
    { name: "Maria S.", role: "Marketing Manager", quote: "The AI features for content strategy and market research are top-notch. It feels like having a dedicated research assistant on my team. Highly recommended for professionals looking to stay ahead.", avatarHint: "marketing manager", avatarImage: "https://placehold.co/100x100.png" },
    { name: "Dr. David K.", role: "University Professor", quote: "LMDpro is an invaluable resource for my students. The Non-Profit/Student tier offers exceptional value, providing access to cutting-edge AI tools and courses that prepare them for future careers. The AI research agent is fantastic.", avatarHint: "university professor", avatarImage: "https://placehold.co/100x100.png" },
];


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center h-screen min-h-[700px] flex flex-col items-center justify-center">
            <div className="absolute inset-0 -z-10 animated-liquid-gradient"></div>
            <div className="container mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 animated-text-gradient">
                Unlock Your Potential with LMDpro
              </h1>
              <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-10">
                Your AI-powered partner for personalized learning, skill enhancement, and career advancement. Experience the future of education, tailored to you.
              </p>
              <Link href="/register" passHref>
                <Button size="lg" className="button-animated-gradient text-lg px-10 py-6">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-headline font-semibold mb-4 animated-text-gradient">Transform Your Career with AI-Driven Learning</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  LMDpro leverages cutting-edge AI to provide an educational experience that's truly personalized, effective, and geared towards tangible career outcomes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featureCards.map((feature, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm shadow-2xl rounded-xl transition-transform duration-300 hover:-translate-y-2 paper-cut-style">
                    <CardHeader className="flex-row items-center gap-4">
                      <div className={cn("p-3 rounded-lg w-fit", feature.bgColor)}>
                        <feature.icon className={cn("h-6 w-6", feature.textColor)} />
                      </div>
                      <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
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
                  <Card key={index} className="flex flex-col shadow-2xl rounded-xl transition-transform duration-300 hover:-translate-y-2 paper-cut-style">
                    <CardHeader className="pt-6">
                      <div className="mb-3">
                         <course.icon className="h-10 w-10 text-primary/80 shrink-0" />
                      </div>
                      <CardTitle className="font-headline text-xl text-foreground">{course.title}</CardTitle>
                      <CardDescription className="text-sm">{course.type}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-xs text-muted-foreground mb-3">Category: {course.category}</p>
                      <p className="text-sm h-16 overflow-hidden line-clamp-3 text-muted-foreground">{course.overview}</p>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                      <Link href={`/courses/${course.id}`} passHref className="w-full">
                          <Button variant="outline" className="w-full">
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-16">
                <Link href="/courses" passHref>
                  <Button size="lg" className="button-animated-gradient">
                    Explore All Courses
                  </Button>
                </Link>
              </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-12 animated-text-gradient">
                Loved by Learners & Professionals
              </h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="rounded-xl shadow-2xl paper-cut-style">
                    <CardContent className="pt-8">
                       <p className="text-muted-foreground italic leading-relaxed mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatarImage} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </section>


        {/* Pricing Section Block */}
        <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-4 animated-text-gradient">Flexible Pricing for Everyone</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Choose a plan that fits your needs, from individual learners to large enterprises.
              </p>
              <div className="grid md:grid-cols-3 gap-8 items-stretch">
                {pricingTiersHomepage.map((tier) => (
                  <Card key={tier.name} className={`flex flex-col rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 paper-cut-style ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
                    {tier.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-lg button-animated-gradient border-2 border-background z-10">
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
            </div>
        </section>

      </main>
      <PublicFooter />
    </div>
  );
}
