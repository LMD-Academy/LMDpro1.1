
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Users, Lightbulb, Zap, ShieldCheck, HeartHandshake, Briefcase, Building } from "lucide-react"; 
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 py-16 md:py-24 bg-muted/20 dark:bg-muted/40">
        <div className="container mx-auto px-4 space-y-16">
          <section className="text-center">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animated-text-gradient">About LMDpro</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LMDpro is an advanced AI-driven agentic system, conceived as a sophisticated online educational academy. Our mission is to revolutionize skill acquisition and career advancement through personalized, intelligent, and practical learning experiences.
            </p>
          </section>

          <section>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-headline font-semibold mb-6">Our Vision: Empowering Lifelong Learners</h2>
                <p className="text-muted-foreground mb-4">
                  We believe in shifting the paradigm from passive content consumption to active, AI-facilitated skill development. LMDpro is engineered to be your proactive educational partner, providing unrestricted internet research capabilities, advanced cognitive processing for natural interaction, and dynamic learning path construction tailored to your unique goals.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our platform leverages the full potential of the Firebase ecosystem and cutting-edge AI models to deliver a seamless, scalable, and secure SaaS experience. We aim to create a direct correlation between your educational investment and tangible career growth.
                </p>
                <Link href="/register" passHref>
                  <Button className="button-animated-gradient">Join Our Community</Button>
                </Link>
              </div>
              <div className="relative w-full h-64 md:h-96 bg-muted rounded-lg shadow-xl border overflow-hidden">
                 <Image src="https://placehold.co/800x600.png" alt="Empowering Learners" layout="fill" objectFit="cover" data-ai-hint="diverse students learning" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-headline font-semibold text-center mb-12 animated-text-gradient">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Innovation", description: "Continuously integrating the latest AI advancements to provide a state-of-the-art learning experience and agentic capabilities." },
                { icon: Users, title: "Personalization", description: "Tailoring educational content and career tools to each user's unique profile, goals, and learning pace." },
                { icon: ShieldCheck, title: "Quality & Reliability", description: "Engineering a robust, secure, and high-performing platform that users can trust for their professional development." },
                { icon: Lightbulb, title: "Empowerment", description: "Equipping users with the skills and tools needed to achieve their career aspirations and adapt to a changing world." },
                { icon: HeartHandshake, title: "Accessibility", description: "Striving to make high-quality AI-driven education available to a diverse global audience through flexible subscription tiers." },
                 { icon: Users, title: "Community", description: "Fostering a supportive learning environment where users can connect, share, and grow together." },
              ].map((value) => (
                <Card key={value.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  <CardHeader>
                    <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="text-center py-12 bg-card rounded-lg shadow-xl">
             <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Meet the (Future) Team</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                LMDpro is driven by a passionate team of educators, AI researchers, engineers, and designers dedicated to building the future of learning. (Team profiles coming soon!).
             </p>
             <div className="relative w-full max-w-3xl h-64 bg-muted rounded-md mx-auto border flex items-center justify-center overflow-hidden">
                <Image src="https://placehold.co/800x400.png" alt="LMDpro Team Placeholder" layout="fill" objectFit="cover" data-ai-hint="diverse team working" />
             </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-headline font-semibold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join LMDpro today and experience the power of AI-driven personalized learning.
            </p>
            <Link href="/pricing" passHref>
              <Button size="lg" className="button-animated-gradient">View Our Plans</Button