
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Code, Zap, Package, DollarSign, ShieldCheck, BookOpen, Download } from "lucide-react";
import Link from "next/link";

interface ApiPlan {
  id: string;
  name: string;
  price: string;
  requests: string;
  features: string[];
  icon: React.ElementType;
  cta: string;
}

const apiPlans: ApiPlan[] = [
  {
    id: "developer",
    name: "Developer",
    price: "Free",
    requests: "1,000 requests/month",
    icon: Code,
    features: [
      "Access to core learning & video script APIs",
      "Community support",
      "Rate limited",
    ],
    cta: "Get API Key",
  },
  {
    id: "startup",
    name: "Startup",
    price: "$99/month",
    requests: "50,000 requests/month",
    icon: Zap,
    features: [
      "All Developer features",
      "Higher rate limits",
      "Resume optimization API access",
      "Email support",
    ],
    cta: "Choose Startup",
  },
  {
    id: "business",
    name: "Business",
    price: "$499/month",
    requests: "500,000 requests/month",
    icon: Package,
    features: [
      "All Startup features",
      "Premium rate limits",
      "Access to all current & future APIs",
      "Priority support",
      "Usage analytics",
    ],
    cta: "Choose Business",
  },
  {
    id: "enterprise-api",
    name: "Enterprise",
    price: "Custom",
    requests: "Unlimited requests",
    icon: ShieldCheck,
    features: [
      "All Business features",
      "Custom rate limits & SLAs",
      "Dedicated infrastructure options",
      "Advanced security features",
      "Direct engineer support",
    ],
    cta: "Contact Sales",
  },
];

export default function ApiManagementPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">LMDpro API</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Integrate LMDpro's powerful AI capabilities into your own applications and workflows.
          Build innovative solutions with our robust and scalable API.
        </p>
        <div className="mt-6">
          <Link href="/api-docs" asChild> 
             <Button size="lg" className="button-animated-gradient">
                <BookOpen className="mr-2 h-5 w-5" /> Read API Documentation
             </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-center mb-8">API Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {apiPlans.map((plan) => (
            <Card key={plan.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="font-headline text-xl">{plan.name}</CardTitle>
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.requests}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full button-animated-gradient">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl animated-text-gradient">Manage Your API Keys</CardTitle>
            <CardDescription>View, generate, and revoke your API keys here. (API Keys are available on Premium, Teams, and Enterprise plans)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Placeholder for actual API key list. In a real app, this would be dynamic. */}
            <div className="flex items-center justify-between p-3 border rounded-md bg-muted/30">
              <div>
                <p className="font-mono text-sm">prod_sk_xxxxxxxxxxxx<span className="text-muted-foreground">••••••••</span>xxxx</p>
                <p className="text-xs text-muted-foreground">Last used: 2 hours ago | Permissions: Full Access</p>
              </div>
              <Button variant="destructive" size="sm">Revoke</Button>
            </div>
             <div className="flex items-center justify-between p-3 border rounded-md bg-muted/30">
              <div>
                <p className="font-mono text-sm">dev_sk_yyyyyyyyyyyy<span className="text-muted-foreground">••••••••</span>yyyy</p>
                <p className="text-xs text-muted-foreground">Last used: 1 day ago | Permissions: Read-only (Learning Paths)</p>
              </div>
              <Button variant="destructive" size="sm">Revoke</Button>
            </div>
            <Button className="button-animated-gradient">
              <Zap className="mr-2 h-4 w-4" /> Generate New API Key
            </Button>
          </CardContent>
        </Card>
      </section>

    </div>
  );
}

