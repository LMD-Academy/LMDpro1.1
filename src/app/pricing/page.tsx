
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Building, GraduationCap as StudentCapIcon, Gem } from "lucide-react"; 
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface TierFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface SubscriptionTier {
  id: string;
  name: string;
  price: string;
  priceFrequency: string;
  audience: string;
  description: string;
  modelInfo: string;
  icon: React.ElementType;
  cta: string;
  features: TierFeature[];
  highlight?: boolean;
  annualBilling?: string;
  popular?: boolean;
}

const tiers: SubscriptionTier[] = [
  {
    id: "community",
    name: "Community",
    price: "Free",
    priceFrequency: "",
    audience: "For individuals starting their learning journey",
    description: "Access foundational AI tools, a selection of free courses, and basic resume features to begin upskilling.",
    modelInfo: "Latest Free Gemma Model",
    icon: Zap,
    cta: "Join for Free",
    features: [
      { text: "Limited Personalized Learning Paths", included: true },
      { text: "1 Resume Template, Limited PDF Exports (watermarked)", included: true },
      { text: "Selection of Free Courses", included: true },
      { text: "Community Support Forum Access", included: true },
      { text: "Basic AI Research Capabilities", included: true },
      { text: "Limited AI Suggestions", included: false },
      { text: "Team Management Features", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$5.80",
    priceFrequency: "/month",
    annualBilling: "or $58 annually (Save ~16%!)",
    audience: "For dedicated individual learners & professionals",
    description: "Unlock the full suite of AI-powered tools, access all courses, and leverage advanced personalization for career growth.",
    modelInfo: "Latest Flash AI Models",
    icon: Gem,
    cta: "Go Premium",
    highlight: true,
    popular: true,
    features: [
      { text: "Unlimited Personalized Learning Paths", included: true, highlight: true },
      { text: "AI-Powered Learning Path Generation & Adaptation", included: true },
      { text: "All Resume Templates & Unlimited PDF Exports (No Watermark)", included: true },
      { text: "Full Course Catalog Access (including premium content)", included: true, highlight: true },
      { text: "Priority AI Support (Chat & Email)", included: true },
      { text: "Comprehensive AI Suggestions & Optimization Tools", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$196",
    priceFrequency: "/month (up to 5 users)",
    audience: "For businesses & educational institutions",
    description: "Empower your team with collaborative tools, centralized IAM, shared resources, and enhanced analytics.",
    modelInfo: "Latest Pro AI Models",
    icon: Users,
    cta: "Choose Teams Plan",
    features: [
      { text: "All Premium Features for each user", included: true, highlight: true },
      { text: "IAM Dashboard for Team Management & Reporting", included: true },
      { text: "Assign Courses & Track Team Progress", included: true },
      { text: "Consolidated Billing & Team Progress Reporting", included: true },
      { text: "Volume-based User Seat Discounts (beyond 5 users)", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceFrequency: "",
    audience: "For large organizations requiring scale & bespoke solutions",
    description: "Tailored solutions, dedicated support, advanced security, custom AI model integration, and enterprise-grade features.",
    modelInfo: "Latest Pro AI Models / Custom Multi-Model Options",
    icon: Building,
    cta: "Contact Sales for Enterprise",
    features: [
      { text: "All Teams Features, scaled for enterprise needs", included: true, highlight: true },
      { text: "Custom AI Model Tuning & Private Integrations", included: true },
      { text: "Advanced SSO, SCIM Provisioning & Granular Permissions", included: true },
      { text: "Dedicated Account Manager & Premium SLA Support", included: true },
      { text: "Advanced Security Audits & Compliance Reporting", included: true },
    ],
  },
   {
    id: "nonprofit-student",
    name: "Non-Profit / Student",
    price: "Free",
    priceFrequency: "(Verification Required)",
    audience: "Empowering non-profits & enrolled students",
    description: "Special access to core LMDpro features to support education, skill development, and social impact initiatives.",
    modelInfo: "Latest Flash AI Models",
    icon: StudentCapIcon,
    cta: "Apply Now",
    features: [
      { text: "Most Premium Features (annual verification)", included: true, highlight: true },
      { text: "Full Course Catalog Access", included: true },
      { text: "AI-Powered Learning Path Suggestions", included: true },
      { text: "Resume Builder with Multiple Templates & PDF Export (No Watermark)", included: true },
    ],
  },
];

const featureComparison = [
    { category: "Core Learning", feature: "Personalized Learning Paths", community: "Limited", premium: "Unlimited AI Gen", teams: "Unlimited + Shared", enterprise: "Unlimited + Custom Paths", nonprofit: "AI Suggestions (Premium level)" },
    { category: "Core Learning", feature: "Full Course Catalog Access", community: "Selection", premium: "Yes", teams: "Yes", enterprise: "Yes + Custom Content", nonprofit: "Yes" },
    { category: "AI Agent Capabilities", feature: "AI Model Access Tier", community: "Gemma (Free Tier)", premium: "Flash (Latest)", teams: "Pro (Latest)", enterprise: "Pro / Custom Multi-Model", nonprofit: "Flash (Latest)" },
    { category: "Career Tools", feature: "Resume Builder Templates", community: "1 Basic Template", premium: "All Premium Templates", teams: "All + Team Templates", enterprise: "All + Custom Org Templates", nonprofit: "All Premium Templates" },
    { category: "Career Tools", feature: "Resume PDF Export Watermark", community: "Yes ('Made with LMDpro')", premium: "No", teams: "No", enterprise: "No / Custom", nonprofit: "No (with verification)" },
    { category: "Career Tools", feature: "Resume AI Optimization & ATS Scoring", community: "Limited Suggestions", premium: "Full AI Optimization", teams: "Full + Team Benchmarking", enterprise: "Advanced ATS Insights & Custom Rules", nonprofit: "Full AI Optimization" },
    { category: "IAM & Admin", feature: "IAM Dashboard & Team Analytics", community: "No", premium: "No", teams: "Yes", enterprise: "Advanced Analytics + SSO, SCIM", nonprofit: "No" },
    { category: "IAM & Admin", feature: "Assign Courses to Team Members", community: "No", premium: "No", teams: "Yes", enterprise: "Yes", nonprofit: "No" },
    { category: "Support & Utilities", feature: "Support Level", community: "Community Forum", premium: "Priority AI Chat & Email", teams: "Dedicated Onboarding + Team Support Channels", enterprise: "Dedicated Account Manager & 24/7 SLA", nonprofit: "Community & Standard AI Chat" },
];


export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24 bg-muted/20 dark:bg-muted/40">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">LMDpro Subscription Plans</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan to unlock your potential with LMDpro. Scalable solutions for individuals, teams, and enterprises, designed to fuel growth and innovation with our advanced AI-driven agentic system for education and career development.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-20">
            {tiers.map((tier) => (
              <Card key={tier.id} className={`flex flex-col shadow-xl hover:scale-105 transform transition-all duration-300 rounded-xl overflow-hidden ${tier.highlight ? 'border-primary ring-2 ring-primary bg-card' : 'border-border bg-card'} ${tier.popular ? 'relative' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-full shadow-lg button-animated-gradient border-2 border-background z-10">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <tier.icon className={`h-10 w-10 mx-auto mb-3 ${tier.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                   <p className="text-sm text-muted-foreground h-10 mt-1 px-2">{tier.audience}</p>
                  <p className="text-4xl font-bold mt-2">
                    {tier.price}
                    {tier.priceFrequency && <span className="text-base font-normal text-muted-foreground">{tier.priceFrequency}</span>}
                  </p>
                  {tier.annualBilling && <p className="text-xs text-green-600 dark:text-green-400 mt-1">{tier.annualBilling}</p>}
                   <p className="text-xs text-muted-foreground mt-2 h-10">{tier.modelInfo}</p>
                  <CardDescription className="mt-3 text-sm h-28 overflow-y-auto px-1 text-muted-foreground">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <h4 className="font-semibold text-sm mb-3 text-center text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.slice(0, 5).map((feature, index) => ( 
                      <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through opacity-70'}`}>
                        <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${feature.included ? (feature.highlight ? 'text-primary' : 'text-green-500') : 'text-muted-foreground/50'}`} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                     {tier.features.length > 5 && <li className="text-xs text-muted-foreground text-center pt-1">...and more!</li>}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                   <Link href={tier.id === 'enterprise' ? '/contact-sales' : `/register?tier=${tier.id}`} passHref className="w-full">
                    <Button className={`w-full ${tier.highlight || tier.id === 'community' || tier.id === 'nonprofit-student' ? 'button-animated-gradient' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                      {tier.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-headline font-semibold text-center mb-12 animated-text-gradient">Detailed Feature Comparison</h2>
            <Card className="shadow-lg rounded-xl">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-muted/50 dark:bg-muted/30">
                    <TableRow>
                      <TableHead className="px-4 py-3.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sticky left-0 bg-muted/50 dark:bg-muted/30 z-10 w-1/5 min-w-[220px] rounded-tl-xl">Feature</TableHead>
                      {tiers.map(tier => (
                        <TableHead key={tier.id} className={`px-4 py-3.5 text-center text-xs font-medium uppercase tracking-wider min-w-[160px] ${tier.highlight ? "text-primary" : "text-muted-foreground"} ${tier.id === 'enterprise' ? 'rounded-tr-xl' : ''}`}>{tier.name}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-card divide-y divide-border">
                    {featureComparison.map((item, itemIndex) => (
                      <React.Fragment key={item.feature}>
                        {itemIndex === 0 || item.category !== featureComparison[itemIndex - 1].category ? (
                          <TableRow>
                            <TableCell colSpan={tiers.length + 1} className="px-4 py-3 bg-secondary/50 dark:bg-secondary/20 text-sm font-semibold text-foreground sticky left-0 z-10">{item.category}</TableCell>
                          </TableRow>
                        ) : null}
                        <TableRow className="hover:bg-muted/20 dark:hover:bg-muted/40 transition-colors">
                          <TableCell className="px-4 py-4 whitespace-normal text-sm font-medium text-foreground sticky left-0 bg-card hover:bg-muted/20 dark:hover:bg-muted/40 z-10 w-1/5 min-w-[220px]">{item.feature}</TableCell>
                          {tiers.map(tier => {
                            const featureValue = item[tier.id as keyof typeof item] as string | boolean;
                            return (
                              <TableCell key={`${tier.id}-${item.feature}`} className="px-4 py-4 whitespace-normal text-sm text-center text-muted-foreground min-w-[160px]">
                                {typeof featureValue === 'boolean' ? (
                                  featureValue ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-muted-foreground/50 text-lg">-</span>
                                ) : (
                                  <span className={featureValue.includes("Unlimited") || featureValue.includes("All") || featureValue.includes("Full") ? "font-semibold text-primary" : ""}>{featureValue}</span>
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </section>

          <section className="mt-24 text-center">
            <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Can I change my LMDpro plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your LMDpro plan at any time directly from your account settings page. Prorated charges or credits will be applied automatically to your next billing cycle based on your selection.</p>
                </CardContent>
              </Card>
              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Is there a discount for annual billing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Absolutely! Our Premium plan offers a significant discount, equivalent to about two months free, when you opt for annual billing. Enterprise plans can also be customized with annual payment arrangements. The Non-Profit/Student and Community tiers are offered free of charge (verification may apply for Non-Profit/Student).</p>
                </CardContent>
              </Card>
              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">What kind of support is included with each LMDpro plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">All LMDpro plans include access to our 24/7 AI Support Chatbot and comprehensive community forums. Premium, Teams, and Enterprise plans benefit from progressively higher levels of support, including priority email, dedicated onboarding specialists for Teams, and direct account managers with Service Level Agreements (SLAs) for Enterprise clients.</p>
                </CardContent>
              </Card>
               <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">How does the "Latest AI Model" access work for different tiers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">LMDpro is committed to providing cutting-edge AI capabilities. We continuously integrate and test the latest advancements in AI models (such as Google's Gemma, Flash, and Pro series, among others). Your subscription tier determines access to the corresponding class of model, ensuring you benefit from ongoing improvements in AI capabilities for personalized learning, research, and resume optimization.</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
