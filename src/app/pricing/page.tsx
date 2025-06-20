
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Building, GraduationCap as StudentCapIcon, Gem, Star } from "lucide-react";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import Link from "next/link";

interface TierFeature {
  text: string;
  included: boolean;
}

interface SubscriptionTier {
  id: string;
  name: string;
  price: string;
  priceFrequency: string;
  description: string;
  modelInfo: string;
  features: TierFeature[];
  icon: React.ElementType;
  cta: string;
  highlight?: boolean;
  annualBilling?: string;
}

const tiers: SubscriptionTier[] = [
  {
    id: "community",
    name: "Community",
    price: "Free",
    priceFrequency: "",
    description: "Basic access for individuals starting their learning journey.",
    modelInfo: "Latest Free Gemma Model",
    icon: Zap,
    cta: "Join for Free",
    features: [
      { text: "Limited Personalized Learning Paths", included: true },
      { text: "Basic Video Creation (watermarked)", included: true },
      { text: "1 Resume Template, Limited Exports", included: true },
      { text: "Selection of Free Courses", included: true },
      { text: "Community Support Forum", included: true },
      { text: "Limited AI Suggestions", included: false },
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
    description: "Full access and enhanced AI capabilities for individual power users.",
    modelInfo: "Latest Flash Model",
    icon: Gem,
    cta: "Go Premium",
    highlight: true,
    features: [
      { text: "Unlimited Personalized Learning Paths", included: true },
      { text: "AI-Powered Learning Path Generation", included: true },
      { text: "Advanced Video Creation (no watermark, more avatars)", included: true },
      { text: "All Resume Templates & Unlimited PDF Exports", included: true },
      { text: "Full Course Catalog Access", included: true },
      { text: "Priority AI Support (Chat & Email)", included: true },
      { text: "Full AI Suggestions & Optimization Tools", included: true },
      { text: "Developer API Access (Basic Tier)", included: true },
      { text: "Detailed Progress Analytics", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$196",
    priceFrequency: "/month",
    description: "Collaboration tools and management features for small to medium teams.",
    modelInfo: "Latest Pro Model",
    icon: Users,
    cta: "Choose Teams",
    features: [
      { text: "All Premium Features", included: true },
      { text: "Team Management Dashboard", included: true },
      { text: "Shared Learning Paths & Resources", included: true },
      { text: "Collaborative Video Projects & Brand Kits", included: true },
      { text: "Consolidated Billing & Team Progress Analytics", included: true },
      { text: "Volume-based User Seat Discounts", included: true },
      { text: "Teams API Access (Enhanced Tier)", included: true },
      { text: "Basic SSO & Role-Based Access Control", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1960",
    priceFrequency: "/month (Custom Pricing Available)",
    description: "Tailored solutions, dedicated support, and advanced security for large organizations.",
    modelInfo: "Latest Pro Model / Custom Multi-Model Options",
    icon: Building,
    cta: "Contact Sales",
    features: [
      { text: "All Teams Features", included: true },
      { text: "Custom Integrations & Advanced SSO", included: true },
      { text: "Dedicated Account Manager & Premium SLA Support", included: true },
      { text: "Advanced Security Audits & Compliance Reporting", included: true },
      { text: "Custom Branding, Content, and AI Model Tuning", included: true },
      { text: "Enterprise API Access (Full, High Volume)", included: true },
      { text: "On-demand Training & Onboarding for Teams", included: true },
      { text: "Beta Access to New Features", included: true },
    ],
  },
   {
    id: "nonprofit-student",
    name: "Non-Profit / Student",
    price: "Free",
    priceFrequency: "(Verification Req.)",
    description: "Special access to empower non-profits and students on their learning journey.",
    modelInfo: "Latest Flash Model",
    icon: StudentCapIcon,
    cta: "Apply Now",
    features: [
      { text: "Most Premium Features (with annual verification)", included: true },
      { text: "Full Course Catalog Access", included: true },
      { text: "Community Forum & Peer Support", included: true },
      { text: "Limited API Access for Educational Projects", included: true },
      { text: "Resume Builder with Multiple Templates", included: true },
      { text: "Personalized Learning Path Suggestions", included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">Our Subscription Plans</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan to unlock your potential with LMDpro. Scalable solutions for individuals, teams, and enterprises, designed to fuel growth and innovation.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
            {tiers.map((tier) => (
              <Card key={tier.id} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${tier.highlight ? 'border-primary ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <tier.icon className={`h-10 w-10 mx-auto mb-3 ${tier.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                   <p className="text-sm text-muted-foreground h-10 mt-1">{tier.modelInfo}</p>
                  <p className="text-4xl font-bold mt-2">
                    {tier.price}
                    {tier.priceFrequency && <span className="text-base font-normal text-muted-foreground">{tier.priceFrequency}</span>}
                  </p>
                  {tier.annualBilling && <p className="text-xs text-green-600 dark:text-green-400 mt-1">{tier.annualBilling}</p>}
                  <CardDescription className="mt-3 text-sm h-20 overflow-y-auto">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-2">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? '' : 'text-muted-foreground line-through opacity-70'}`}>
                        <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${feature.included ? (tier.highlight ? 'text-primary' : 'text-green-500') : 'text-muted-foreground/50'}`} />
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

          <section className="mt-24 text-center">
            <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Can I change my plan later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges or credits will be applied automatically.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">Is there a discount for annual billing?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Yes, our Premium plan offers a discount equivalent to two months free when you choose annual billing. Enterprise plans may also have custom annual arrangements.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-lg">What kind of support is included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">All plans include access to our AI Support Chatbot and community forums. Premium, Teams, and Enterprise plans include progressively higher levels of email and dedicated support.</p>
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
