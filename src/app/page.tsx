
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Zap, Star, Lightbulb, Film, FileText, GraduationCap, Briefcase, ShieldCheck, Handshake, BookOpen, DollarSign, HelpCircle, Settings, Link as LinkIcon, Users, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";

const featureCards = [
  {
    title: "AI-Powered Learning Paths",
    description: "Dynamically creates personalized learning journeys based on your profile and goals, leveraging internet research for up-to-date content and skill gap analysis.",
    icon: Lightbulb,
    bgColor: "bg-blue-500/10", // Example color
    textColor: "text-blue-500", // Example color
    href: "/learning-paths", // Assuming this page will be created
  },
  {
    title: "Automated Video Creation",
    description: "Automatically generate educational videos from research scripts. Supports multiple languages, avatar selections, and branding application for streamlined content creation.",
    icon: Film,
    bgColor: "bg-green-500/10", // Example color
    textColor: "text-green-500", // Example color
    href: "/video-creation",
  },
  {
    title: "Intelligent Resume Builder",
    description: "Import from LinkedIn, design with customizable templates, and optimize content with AI suggestions and ATS scoring. Export as a PDF with 'Made with LMDpro' watermark.",
    icon: FileText,
    bgColor: "bg-purple-500/10", // Example color
    textColor: "text-purple-500", // Example color
    href: "/resume-builder",
  },
  {
    title: "24/7 AI Support",
    description: "Instant assistance for technical issues, billing, and course navigation via our AI chat modal with persistent conversation history to quickly address common problems.",
    icon: HelpCircle,
    bgColor: "bg-yellow-500/10", // Example color
    textColor: "text-yellow-500", // Example color
    href: "/support",
  },
];

const pricingTiersHomepage = [
  { name: "Community", price: "Free", model: "Latest Free Gemma Model", features: ["Limited Learning Paths", "Basic Video Creation (watermarked)", "1 Resume Template"], cta: "Join for Free", href:"/register?tier=community" },
  { name: "Premium", price: "$5.80/mo", model: "Latest Flash Model", features: ["Unlimited Learning Paths", "Advanced Video Creation", "All Resume Templates & AI Optimization"], cta: "Go Premium", href:"/register?tier=premium" },
  { name: "Teams", price: "$196/mo", model: "Latest Pro Model", features: ["All Premium Features", "Team Management", "Shared Resources & Analytics"], cta: "Choose Teams", href:"/register?tier=teams" },
];

const courseHighlights = [
  { title: "Executive Leadership Development", icon: GraduationCap, imageHint: "leadership team", type: "Learning Path", description: "Master executive skills for top-tier roles. Develop strategic thinking and team motivation." },
  { title: "AI for Business Professionals", icon: Briefcase, imageHint: "AI business", type: "Course", description: "Understand and apply AI in business contexts to drive innovation and efficiency." },
  { title: "Full-Stack Web Development Bootcamp", icon: Zap, imageHint: "web development code", type: "Learning Path", description: "Comprehensive training from fundamentals to advanced web technologies and deployment." },
];

const testimonials = [
    { name: "Alex R.", role: "Software Engineer", quote: "LMDpro's personalized learning path helped me upskill in AI and land a promotion. The resume builder was a fantastic bonus!", avatarHint: "software engineer typing" },
    { name: "Maria S.", role: "Marketing Manager", quote: "The AI video creation tool is a game-changer for our team's training content. So much faster and highly professional.", avatarHint: "marketing manager presentation" },
    { name: "David K.", role: "Student", quote: "As a student, the Non-Profit/Student tier is incredible. I'm learning cutting-edge skills that will prepare me for my career.", avatarHint: "student with laptop" },
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
        <section className="py-20 md:py-32 text-center bg-card/50 backdrop-blur-sm dark:bg-card/80">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 animated-text-gradient">
              Unlock Your Potential with LMDpro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Your AI-powered partner for personalized learning, skill enhancement, automated video creation, and career advancement. Experience the future of education, tailored to you.
            </p>
            <Link href="/register" passHref>
              <Button size="lg" className="button-animated-gradient text-lg px-10 py-6">
                Start Your Learning Path <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
             <div className="mt-16">
              <Image src="https://placehold.co/1200x600.png" alt="LMDpro Platform Showcase - Dashboard and Learning Interface" width={1200} height={600} className="rounded-lg shadow-2xl mx-auto border" data-ai-hint="platform user interface" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-center mb-4 animated-text-gradient">Transform Your Career with AI-Driven Learning</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              LMDpro leverages cutting-edge AI to provide an educational experience that's truly personalized, effective, and geared towards tangible career outcomes and skill mastery.
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
                  <Image src={`https://placehold.co/600x400.png`} alt={course.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={course.imageHint} />
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
                <Card key={tier.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                      <Image src="https://placehold.co/100x100.png" alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" data-ai-hint={testimonial.avatarHint} />
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
              Explore LMDpro and discover how AI can accelerate your learning and professional growth. Sign up today and take the first step towards a brighter future.
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

// Helper icon, can be moved to a shared location later
const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
