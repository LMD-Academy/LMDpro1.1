import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Building, GraduationCap as StudentCapIcon, Gem } from "lucide-react"; // Renamed GraduationCap to avoid conflict

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
  features: TierFeature[];
  icon: React.ElementType;
  cta: string;
  highlight?: boolean;
}

const tiers: SubscriptionTier[] = [
  {
    id: "community",
    name: "Community",
    price: "Free",
    priceFrequency: "",
    description: "Basic access for individuals starting out.",
    icon: Zap,
    cta: "Join for Free",
    features: [
      { text: "Limited Personalized Learning Paths", included: true },
      { text: "Basic Video Creation (watermarked)", included: true },
      { text: "1 Resume Template", included: true },
      { text: "Community Support", included: true },
      { text: "Limited AI Suggestions", included: false },
      { text: "API Access", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$19",
    priceFrequency: "/month",
    description: "Full access for individual power users.",
    icon: Gem,
    cta: "Go Premium",
    highlight: true,
    features: [
      { text: "Unlimited Personalized Learning Paths", included: true },
      { text: "Advanced Video Creation (no watermark, more avatars)", included: true },
      { text: "All Resume Templates & ATS Scoring", included: true },
      { text: "Priority AI Support", included: true },
      { text: "Full AI Suggestions & Optimization", included: true },
      { text: "Developer API Access (basic tier)", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$49",
    priceFrequency: "/user/month",
    description: "Collaboration tools for small to medium teams.",
    icon: Users,
    cta: "Choose Teams",
    features: [
      { text: "All Premium Features", included: true },
      { text: "Team Management & Reporting", included: true },
      { text: "Shared Learning Paths & Resources", included: true },
      { text: "Collaborative Video Projects", included: true },
      { text: "Volume Discounts", included: true },
      { text: "Teams API Access (enhanced tier)", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceFrequency: "",
    description: "Tailored solutions for large organizations.",
    icon: Building,
    cta: "Contact Sales",
    features: [
      { text: "All Teams Features", included: true },
      { text: "Custom Integrations & SSO", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Advanced Security & Compliance", included: true },
      { text: "Custom Branding & Content", included: true },
      { text: "Enterprise API Access (full)", included: true },
    ],
  },
   {
    id: "nonprofit-student",
    name: "Non-Profit / Student",
    price: "Discounted",
    priceFrequency: "",
    description: "Special pricing for non-profits and students.",
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

export default function SubscriptionsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Subscription Plans</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to unlock your potential with LMDpro. Scalable solutions for individuals, teams, and enterprises.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {tiers.map((tier) => (
          <Card key={tier.id} className={`flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${tier.highlight ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader className="text-center">
              <tier.icon className={`h-12 w-12 mx-auto mb-4 ${tier.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <p className="text-3xl font-bold">
                {tier.price}
                {tier.priceFrequency && <span className="text-sm font-normal text-muted-foreground">{tier.priceFrequency}</span>}
              </p>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {tier.features.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? '' : 'text-muted-foreground line-through'}`}>
                    <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${feature.included ? 'text-green-500' : 'text-muted-foreground/50'}`} />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${tier.highlight ? 'button-animated-gradient' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
