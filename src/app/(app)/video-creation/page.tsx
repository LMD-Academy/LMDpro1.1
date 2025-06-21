
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Film } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VideoCreationRemovedPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Feature Decommissioned</h1>
        <p className="text-lg text-muted-foreground">
            The AI Video Creation feature is currently undergoing a significant rebuild to bring you a more powerful and seamless experience.
        </p>
      </section>

      <Card className="shadow-lg rounded-xl text-center py-12">
        <CardHeader>
          <Film className="mx-auto h-16 w-16 text-primary/50" />
          <CardTitle className="font-headline text-2xl mt-4">Video Creation is Being Reimagined</CardTitle>
          <CardDescription className="max-w-md mx-auto">
            We are working hard on the next version of our video creation suite. We apologize for any inconvenience and appreciate your patience. Please check back later for updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Link href="/dashboard">
                <Button className="button-animated-gradient">Return to Dashboard</Button>
            </Link>
        </CardContent>
      </Card>
    </div>
  );
}
