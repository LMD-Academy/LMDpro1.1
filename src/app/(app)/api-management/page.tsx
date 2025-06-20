"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Code, Zap, Package, DollarSign, ShieldCheck, BookOpen, Download, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ApiPlan {
  id: string;
  name: string;
  price: string;
  requests: string;
  features: string[];
  icon: React.ElementType;
  cta: string;
  href: string;
}

const apiPlans: ApiPlan[] = [
  {
    id: "developer",
    name: "Developer Tier",
    price: "Included with Premium+",
    requests: "Up to 10,000 requests/month",
    icon: Code,
    features: [
      "Access to core learning & video script APIs",
      "Community & AI Chat support",
      "Standard rate limits",
    ],
    cta: "Manage Keys",
    href: "#manage-keys" // Link to key management section on this page
  },
  {
    id: "startup",
    name: "Startup Tier",
    price: "$99/month",
    requests: "Up to 50,000 requests/month",
    icon: Zap,
    features: [
      "All Developer features",
      "Higher rate limits",
      "Resume optimization API access",
      "Dedicated email support for API",
    ],
    cta: "Upgrade to Startup",
    href: "/pricing?tier=startup-api" // Fictional link to pricing page with focus
  },
  {
    id: "business",
    name: "Business Tier",
    price: "$499/month",
    requests: "Up to 500,000 requests/month",
    icon: Package,
    features: [
      "All Startup features",
      "Premium rate limits",
      "Access to all current & future AI APIs",
      "Priority API support queue",
      "Usage analytics dashboard",
    ],
    cta: "Upgrade to Business",
    href: "/pricing?tier=business-api"
  },
  {
    id: "enterprise-api",
    name: "Enterprise Custom",
    price: "Custom Pricing",
    requests: " Scalable to millions+",
    icon: ShieldCheck,
    features: [
      "All Business features",
      "Custom rate limits & SLAs",
      "Dedicated infrastructure options",
      "Advanced security & compliance features",
      "Direct engineer support & custom integrations",
    ],
    cta: "Contact Enterprise Sales",
    href: "/contact-sales?solution=api"
  },
];

interface ApiKey {
    id: string;
    key: string;
    label: string;
    lastUsed: string;
    permissions: string;
    createdAt: string;
}

export default function ApiManagementPage() {
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    { id: "prod_1", key: "prod_sk_xxxxxxxxxxxx••••••••xxxx", label: "Production Server Key", lastUsed: "2 hours ago", permissions: "Full Access", createdAt: "2024-05-10" },
    { id: "dev_1", key: "dev_sk_yyyyyyyyyyyy••••••••yyyy", label: "Development Test Key", lastUsed: "1 day ago", permissions: "Read-only (Learning Paths)", createdAt: "2024-06-01" },
  ]);

  const handleGenerateKey = () => {
    const newKeyId = `key_${Date.now()}`;
    const newKey = {
        id: newKeyId,
        key: `new_sk_${Math.random().toString(36).substring(2, 15)}••••••••${Math.random().toString(36).substring(2, 6)}`,
        label: "New API Key",
        lastUsed: "Never",
        permissions: "Read-only",
        createdAt: new Date().toISOString().split('T')[0]
    };
    setApiKeys(prev => [...prev, newKey]);
    toast({ title: "API Key Generated", description: `New key "${newKey.label}" created. Remember to store it securely.` });
  };

  const handleRevokeKey = (id: string) => {
    const keyToRevoke = apiKeys.find(k => k.id === id);
    setApiKeys(prev => prev.filter(k => k.id !== id));
    toast({ title: "API Key Revoked", description: `Key "${keyToRevoke?.label}" has been revoked.`, variant: "destructive" });
  };

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">LMDpro API Management</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Integrate LMDpro's powerful AI capabilities into your own applications and workflows.
          Manage your API keys, monitor usage, and explore our robust and scalable API.
        </p>
        <div className="mt-6">
          <Link href="/api-docs" passHref> 
             <Button size="lg" className="button-animated-gradient">
                <BookOpen className="mr-2 h-5 w-5" /> Read Full API Documentation
             </Button>
          </Link>
        </div>
      </section>

      <section id="api-plans">
        <h2 className="text-3xl font-headline font-semibold text-center mb-8">API Usage Tiers</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {apiPlans.map((plan) => (
            <Card key={plan.id} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="font-headline text-xl">{plan.name}</CardTitle>
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-2xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.requests}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Zap className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={plan.href} passHref className="w-full">
                  <Button className="w-full button-animated-gradient">
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
            Note: API access for "Developer Tier" features is included with Premium, Teams, and Enterprise LMDpro user subscriptions. Standalone API tiers (Startup, Business, Enterprise Custom) are for higher volume or specific API-first use cases.
        </p>
      </section>
      
      <section id="manage-keys">
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl animated-text-gradient">Your API Keys</CardTitle>
            <CardDescription>Manage your active API keys below. Remember to keep your secret keys secure and never expose them in client-side code.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {apiKeys.length > 0 ? apiKeys.map((apiKey) => (
              <div key={apiKey.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-muted/30 shadow-sm gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{apiKey.label}</p>
                  <p className="font-mono text-xs text-muted-foreground break-all">{apiKey.key}</p>
                  <p className="text-xs text-muted-foreground mt-1">Permissions: {apiKey.permissions} | Last used: {apiKey.lastUsed} | Created: {apiKey.createdAt}</p>
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0 shrink-0">
                    <Button variant="outline" size="sm" onClick={() => toast({title:"Edit API Key", description: "Functionality to edit label/permissions placeholder."})}>
                        <Edit className="h-3 w-3 mr-1 sm:mr-2" /> Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleRevokeKey(apiKey.id)}>
                        <Trash2 className="h-3 w-3 mr-1 sm:mr-2"/> Revoke
                    </Button>
                </div>
              </div>
            )) : (
                <p className="text-muted-foreground">No API keys generated yet. Users on Premium, Teams, and Enterprise plans can generate API keys.</p>
            )}
            <Button className="button-animated-gradient mt-6" onClick={handleGenerateKey}>
              <PlusCircle className="mr-2 h-4 w-4" /> Generate New API Key
            </Button>
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">
              For detailed API usage guidelines, rate limits, and endpoint specifications, please refer to the <Link href="/api-docs" className="text-primary hover:underline">full API documentation</Link>.
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}

// Helper for Edit icon if not available
const Edit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);