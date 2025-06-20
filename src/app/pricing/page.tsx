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
    description: "Basic access for individuals starting out.",
    modelInfo: "Latest Free Gemma Model",
    icon: Zap,
    cta: "Join for Free",
    features: [
      { text: "Limited Personalized Learning Paths", included: true },
      { text: "Basic Video Creation (watermarked)", included: true },
      { text: "1 Resume Template, Limited Exports", included: true },
      { text: "Selection of Free Courses", included: true },
      { text: "Community Support", included: true },
      { text: "Limited AI Suggestions", included: false },
      { text: "API Access", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$5.80",
    priceFrequency: "/month",
    annualBilling: "or $58 annually (Save 2 months!)",
    description: "Full access for individual power users.",
    modelInfo: "Latest Flash Model",
    icon: Gem,
    cta: "Go Premium",
    highlight: true,
    features: [
      { text: "Unlimited Personalized Learning Paths", included: true },
      { text: "AI-Powered Learning Path Generation", included: true },
      { text: "Advanced Video Creation (no watermark, more avatars)", included: true },
      { text: "All Resume Templates & Unlimited Exports", included: true },
      { text: "Full Course Catalog Access", included: true },
      { text: "Priority AI Support", included: true },
      { text: "Full AI Suggestions & Optimization", included: true },
      { text: "Developer API Access (basic tier)", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$196",
    priceFrequency: "/month",
    description: "Collaboration tools for small to medium teams.",
    modelInfo: "Latest Pro Model",
    icon: Users,
    cta: "Choose Teams",
    features: [
      { text: "All Premium Features", included: true },
      { text: "Team Management Dashboard", included: true },
      { text: "Shared Learning Paths & Resources", included: true },
      { text: "Collaborative Video Projects", included: true },
      { text: "Consolidated Billing & Team Progress Analytics", included: true },
      { text: "Volume Discounts", included: true },
      { text: "Teams API Access (enhanced tier)", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$1960",
    priceFrequency: "/month",
    description: "Tailored solutions for large organizations.",
    modelInfo: "Latest Pro Model / Custom Multi-Model",
    icon: Building,
    cta: "Contact Sales",
    features: [
      { text: "All Teams Features", included: true },
      { text: "Custom Integrations & SSO", included: true },
      { text: "Dedicated Account Manager & Premium Support", included: true },
      { text: "Advanced Security & Compliance Audits", included: true },
      { text: "Custom Branding & Content", included: true },
      { text: "Enterprise API Access (full)", included: true },
    ],
  },
   {
    id: "nonprofit-student",
    name: "Non-Profit / Student",
    price: "Free",
    priceFrequency: " (Verification Req.)",
    description: "Special access for non-profits and students.",
    modelInfo: "Latest Flash Model",
    icon: StudentCapIcon,
    cta: "Apply Now",
    features: [
      { text: "Most Premium Features (with verification)", included: true },
      { text: "Access to Educational Resources", included: true },
      { text: "Community Forum Access", included: true },
      { text: "Limited API Access", included: true },
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
              Choose the perfect plan to unlock your potential with LMDpro. Scalable solutions for individuals, teams, and enterprises.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
            {tiers.map((tier) => (
              <Card key={tier.id} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${tier.highlight ? 'border-primary ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <tier.icon className={`h-10 w-10 mx-auto mb-3 ${tier.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                   <p className="text-sm text-muted-foreground h-10">{tier.modelInfo}</p>
                  <p className="text-4xl font-bold mt-2">
                    {tier.price}
                    {tier.priceFrequency && <span className="text-base font-normal text-muted-foreground">{tier.priceFrequency}</span>}
                  </p>
                  {tier.annualBilling && <p className="text-xs text-green-600 dark:text-green-400">{tier.annualBilling}</p>}
                  <CardDescription className="mt-2 text-sm h-16">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? '' : 'text-muted-foreground line-through'}`}>
                        <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${feature.included ? (tier.highlight ? 'text-primary' : 'text-green-500') : 'text-muted-foreground/50'}`} />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Link href={tier.id === 'enterprise' ? '/contact-sales' : '/register'} passHref className="w-full">
                    <Button className={`w-full ${tier.highlight ? 'button-animated-gradient' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                      {tier.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </section>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
