
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Building, GraduationCap as StudentCapIcon, Gem, Star, Brain, Server, ShieldAlert } from "lucide-react";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import Link from "next/link";

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
  description: string;
  modelInfo: string;
  icon: React.ElementType;
  cta: string;
  features: TierFeature[];
  highlight?: boolean;
  annualBilling?: string;
  audience: string;
}

const tiers: SubscriptionTier[] = [
  {
    id: "community",
    name: "Community",
    price: "Free",
    priceFrequency: "",
    audience: "For individuals starting out",
    description: "Access foundational tools and a selection of free courses to begin your learning journey.",
    modelInfo: "Latest Free Gemma Model",
    icon: Zap,
    cta: "Join for Free",
    features: [
      { text: "Limited Personalized Learning Paths", included: true },
      { text: "Basic Video Creation (watermarked)", included: true },
      { text: "1 Resume Template, Limited Exports", included: true },
      { text: "Selection of Free Courses", included: true },
      { text: "Community Support Forum", included: true },
      { text: "Limited AI Research Capabilities", included: true },
      { text: "Basic AI Suggestions", included: false },
      { text: "API Access", included: false },
      { text: "Basic Analytics", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$5.80",
    priceFrequency: "/month",
    annualBilling: "or $58 annually (Save 2 months!)",
    audience: "For dedicated individual learners",
    description: "Unlock the full suite of AI tools, all courses, and advanced personalization features.",
    modelInfo: "Latest Flash Model",
    icon: Gem,
    cta: "Go Premium",
    highlight: true,
    features: [
      { text: "Unlimited Personalized Learning Paths", included: true, highlight: true },
      { text: "AI-Powered Learning Path Generation", included: true },
      { text: "Advanced Video Creation (no watermark, more avatars)", included: true },
      { text: "All Resume Templates & Unlimited PDF Exports", included: true },
      { text: "Full Course Catalog Access", included: true, highlight: true },
      { text: "Priority AI Support (Chat & Email)", included: true },
      { text: "Full AI Suggestions & Optimization Tools", included: true },
      { text: "Advanced AI Research Capabilities", included: true },
      { text: "Developer API Access (Basic Tier)", included: true },
      { text: "Detailed Progress Analytics", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$196",
    priceFrequency: "/month",
    audience: "For small to medium businesses & groups",
    description: "Collaborate effectively with team management, shared resources, and enhanced analytics.",
    modelInfo: "Latest Pro Model",
    icon: Users,
    cta: "Choose Teams",
    features: [
      { text: "All Premium Features", included: true, highlight: true },
      { text: "Team Management Dashboard", included: true },
      { text: "Shared Learning Paths & Custom Content", included: true },
      { text: "Collaborative Video Projects & Brand Kits", included: true },
      { text: "Consolidated Billing & Team Progress Analytics", included: true },
      { text: "Volume-based User Seat Discounts", included: true },
      { text: "Teams API Access (Enhanced Tier)", included: true },
      { text: "Basic SSO & Role-Based Access Control", included: true },
      { text: "Dedicated Onboarding Support", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1960",
    priceFrequency: "/month (Custom)",
    audience: "For large organizations needing scale & customization",
    description: "Tailored solutions, dedicated support, advanced security, and custom AI model integration.",
    modelInfo: "Latest Pro Model / Custom Multi-Model Options",
    icon: Building,
    cta: "Contact Sales",
    features: [
      { text: "All Teams Features", included: true, highlight: true },
      { text: "Custom AI Model Tuning & Integrations", included: true },
      { text: "Advanced SSO & Granular Permissions", included: true },
      { text: "Dedicated Account Manager & Premium SLA Support", included: true },
      { text: "Advanced Security Audits & Compliance Reporting", included: true },
      { text: "Custom Branding & Whitelabeling Options", included: true },
      { text: "Enterprise API Access (Full, High Volume)", included: true },
      { text: "On-demand Training & Bespoke Onboarding", included: true },
      { text: "Beta Access to New Features & Roadmap Input", included: true },
    ],
  },
   {
    id: "nonprofit-student",
    name: "Non-Profit / Student",
    price: "Free",
    priceFrequency: "(Verification Req.)",
    audience: "Empowering non-profits & students",
    description: "Special access to core LMDpro features to support education and social impact.",
    modelInfo: "Latest Flash Model",
    icon: StudentCapIcon,
    cta: "Apply Now",
    features: [
      { text: "Most Premium Features (annual verification)", included: true, highlight: true },
      { text: "Full Course Catalog Access", included: true },
      { text: "AI-Powered Learning Path Suggestions", included: true },
      { text: "Resume Builder with Multiple Templates", included: true },
      { text: "Community Forum & Peer Support", included: true },
      { text: "Limited API Access for Educational Projects", included: true },
      { text: "Watermarked Video Creation", included: true },
    ],
  },
];

const featureComparison = [
    { category: "Core Learning", feature: "Personalized Learning Paths", community: "Limited", premium: "Unlimited AI Gen", teams: "Unlimited + Shared", enterprise: "Unlimited + Custom Paths", nonprofit: "AI Suggestions" },
    { category: "Core Learning", feature: "Full Course Catalog Access", community: "Selection", premium: "Yes", teams: "Yes", enterprise: "Yes + Custom Content", nonprofit: "Yes" },
    { category: "AI Tools", feature: "AI Model Access", community: "Gemma (Free)", premium: "Flash (Latest)", teams: "Pro (Latest)", enterprise: "Pro / Custom Multi-Model", nonprofit: "Flash (Latest)" },
    { category: "AI Tools", feature: "AI Research Capabilities", community: "Basic", premium: "Advanced", teams: "Advanced", enterprise: "Bespoke", nonprofit: "Standard" },
    { category: "Content Creation", feature: "Video Creation", community: "Basic (Watermarked)", premium: "Advanced (No Watermark)", teams: "Collaborative + Brand Kits", enterprise: "Full Suite + API", nonprofit: "Watermarked" },
    { category: "Career Tools", feature: "Resume Builder Templates", community: "1", premium: "All", teams: "All + Team Sharing", enterprise: "All + Custom", nonprofit: "Multiple" },
    { category: "Career Tools", feature: "Resume AI Optimization & ATS Scoring", community: "Limited", premium: "Yes", teams: "Yes", enterprise: "Yes", nonprofit: "Yes" },
    { category: "Support", feature: "Support Level", community: "Community Forum", premium: "Priority AI Chat & Email", teams: "Dedicated Onboarding", enterprise: "Dedicated Account Manager & SLA", nonprofit: "Community & AI Chat" },
    { category: "API & Admin", feature: "API Access", community: "No", premium: "Developer Tier", teams: "Teams Tier", enterprise: "Full Enterprise Tier", nonprofit: "Educational Projects" },
    { category: "API & Admin", feature: "Team Management", community: "No", premium: "No", teams: "Yes", enterprise: "Advanced + SSO", nonprofit: "No" },
];


export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">Our Subscription Plans</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan to unlock your potential with LMDpro. Scalable solutions for individuals, teams, and enterprises, designed to fuel growth and innovation with our advanced AI-driven agentic system.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch mb-24">
            {tiers.map((tier) => (
              <Card key={tier.id} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${tier.highlight ? 'border-primary ring-2 ring-primary' : 'border-border'}`}>
                <CardHeader className="text-center pb-4">
                  <tier.icon className={`h-10 w-10 mx-auto mb-3 ${tier.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                   <p className="text-sm text-muted-foreground h-10 mt-1">{tier.audience}</p>
                  <p className="text-4xl font-bold mt-2">
                    {tier.price}
                    {tier.priceFrequency && <span className="text-base font-normal text-muted-foreground">{tier.priceFrequency}</span>}
                  </p>
                  {tier.annualBilling && <p className="text-xs text-green-600 dark:text-green-400 mt-1">{tier.annualBilling}</p>}
                   <p className="text-xs text-muted-foreground mt-2 h-5">AI: {tier.modelInfo}</p>
                  <CardDescription className="mt-3 text-sm h-24 overflow-y-auto">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <h4 className="font-semibold text-sm mb-2 text-center">Key Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.slice(0, 5).map((feature, index) => ( // Show top 5 features
                      <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? '' : 'text-muted-foreground line-through opacity-70'}`}>
                        <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${feature.included ? (feature.highlight ? 'text-primary' : 'text-green-500') : 'text-muted-foreground/50'}`} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-4">
                   <Link href={tier.id === 'enterprise' ? '/contact-sales' : `/register?tier=${tier.id}`} passHref className="w-full">
                    <Button className={`w-full ${tier.highlight ? 'button-animated-gradient' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                      {tier.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-headline font-semibold text-center mb-12 animated-text-gradient">Compare Plan Features</h2>
            <Card className="shadow-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-border">
                    <thead className="bg-muted/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider sticky left-0 bg-muted/50 z-10 w-1/4">Feature</th>
                            {tiers.map(tier => (
                                <th key={tier.id} scope="col" className={`px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>{tier.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-card divide-y divide-border">
                        {featureComparison.map((item, itemIndex) => (
                            <React.Fragment key={item.feature}>
                                {itemIndex === 0 || item.category !== featureComparison[itemIndex -1].category ? (
                                    <tr>
                                        <td colSpan={tiers.length + 1} className="px-4 py-3 bg-muted/30 text-sm font-semibold text-foreground sticky left-0 z-10">{item.category}</td>
                                    </tr>
                                ) : null}
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground sticky left-0 bg-card z-10 w-1/4">{item.feature}</td>
                                    {tiers.map(tier => {
                                        const featureValue = item[tier.id as keyof typeof item] as string | boolean;
                                        return (
                                            <td key={`${tier.id}-${item.feature}`} className="px-6 py-4 whitespace-nowrap text-sm text-center text-muted-foreground">
                                                {typeof featureValue === 'boolean' ? (
                                                    featureValue ? <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-muted-foreground/50">-</span>
                                                ) : (
                                                    featureValue
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </Card>
          </section>


          <section className="mt-24 text-center">
            <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Can I change my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your LMDpro plan at any time directly from your account settings. Prorated charges or credits will be applied automatically to your next billing cycle.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Is there a discount for annual billing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Absolutely! Our Premium plan offers a significant discount, equivalent to two months free, when you opt for annual billing. Enterprise plans can also be customized with annual arrangements. Non-Profit/Student and Community tiers are free.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">What kind of support is included with each plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">All LMDpro plans include access to our 24/7 AI Support Chatbot and comprehensive community forums. Premium, Teams, and Enterprise plans benefit from progressively higher levels of support, including priority email, dedicated onboarding specialists, and direct account managers with SLAs for Enterprise clients.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">How does the "Latest Model" feature work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">LMDpro is committed to providing cutting-edge AI. We continuously integrate and test the latest advancements in AI models (like Gemma, Flash, Pro series from Google and others). Your tier determines access to the corresponding class of model, ensuring you benefit from ongoing improvements in AI capabilities for learning, content creation, and research.</p>
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
