import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, Video, FileText } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Welcome to LMDpro</h1>
        <p className="text-lg text-muted-foreground">
          Your all-in-one platform for personalized learning, video creation, and career advancement.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Personalized Learning</CardTitle>
            </div>
            <CardDescription>
              Craft your unique learning journey with AI-powered path generation.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/learning-paths" passHref>
              <Button className="w-full button-animated-gradient">
                Explore Learning Paths <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Video className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Video Creation</CardTitle>
            </div>
            <CardDescription>
              Generate educational videos effortlessly from scripts with AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/video-creation" passHref>
              <Button className="w-full button-animated-gradient">
                Create Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Resume Builder</CardTitle>
            </div>
            <CardDescription>
              Build and optimize your resume to land your dream job.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/resume-builder" passHref>
              <Button className="w-full button-animated-gradient">
                Build Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl animated-text-gradient">Quick Stats</CardTitle>
            <CardDescription>Overview of your progress and activities.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Courses Completed</h3>
              <p className="text-3xl font-bold">5</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Videos Generated</h3>
              <p className="text-3xl font-bold">12</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Resumes Optimized</h3>
              <p className="text-3xl font-bold">3</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
