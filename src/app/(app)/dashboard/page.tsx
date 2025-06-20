"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Clock, BarChart3, Star, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
// Assuming a chart component exists or will be added
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// const chartData = [
//   { name: 'Completed', value: 5, fill: 'hsl(var(--chart-2))' },
//   { name: 'In Progress', value: 3, fill: 'hsl(var(--chart-1))' },
//   { name: 'Not Started', value: 8, fill: 'hsl(var(--muted))' },
// ];

const ongoingCourses = [
  { id: "1", title: "Advanced AI for Business", progress: 65, imageHint: "AI business" },
  { id: "2", title: "Strategic Communication", progress: 30, imageHint: "communication strategy" },
  { id: "3", title: "Python for Data Science", progress: 80, imageHint: "python code" },
];

export default function DashboardPage() {
  const userName = "Alex"; // Placeholder, fetch from auth context

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">
          Welcome back, {userName}!
        </h1>
        <p className="text-lg text-muted-foreground">
          Here&apos;s an overview of your learning journey and progress.
        </p>
      </section>

      {/* Quick Stats & Charts Section */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-headline text-xl">Learning Progress</CardTitle>
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            {/* Placeholder for chart */}
            <div className="h-48 flex items-center justify-center bg-muted/50 rounded-md text-muted-foreground">
              {/* <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer> */}
              Chart Placeholder (5 Completed, 3 In Progress)
            </div>
             <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><span>Courses Completed</span> <span className="font-semibold">5</span></div>
                <div className="flex justify-between"><span>Skills Acquired</span> <span className="font-semibold">25</span></div>
                <div className="flex justify-between"><span>Avg. Score</span> <span className="font-semibold">88%</span></div>
             </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-headline text-xl">Resume Strength</CardTitle>
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
             <CardDescription>Based on completed courses & skills.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
             <div className="relative mx-auto h-32 w-32"> {/* Circular progress placeholder */}
                <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path className="text-muted/30" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                    <path className="text-primary" strokeWidth="3" fill="none" stroke="currentColor" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">75%</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Looking good! Add 2 more skills to reach the next level.</p>
            <Link href="/resume-builder" passHref>
              <Button className="mt-4 w-full button-animated-gradient">
                Update Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
           <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-xl">Recommended For You</CardTitle>
                <Star className="h-6 w-6 text-primary" />
              </div>
            <CardDescription>AI-picked courses to boost your profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Data Analysis with Pandas", "Advanced JavaScript"].map(title => (
                <div key={title} className="p-3 border rounded-md hover:bg-muted/50 transition-colors">
                    <h4 className="font-semibold text-sm">{title}</h4>
                    <p className="text-xs text-muted-foreground">Matches your 'Software Engineering' goal.</p>
                </div>
            ))}
            <Link href="/courses" passHref>
              <Button variant="outline" className="w-full mt-2">
                Explore All Recommendations
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Ongoing Courses Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Continue Learning</h2>
            <Link href="/courses?filter=inprogress" passHref>
                 <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoingCourses.map((course) => (
            <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* <Image src={`https://placehold.co/600x300.png`} alt={course.title} width={600} height={300} className="w-full h-40 object-cover" data-ai-hint={course.imageHint} /> */}
              <CardHeader>
                <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Clock className="mr-1.5 h-4 w-4" /> {course.progress}% complete
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="mb-3 h-2" />
                <Link href={`/courses/${course.id}`} passHref>
                  <Button className="w-full button-animated-gradient">
                    Resume Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Completed Courses / Favorite Courses (Combined or separate) */}
      <section>
        <h2 className="text-3xl font-headline font-semibold mb-4 animated-text-gradient">Achievements & Favorites</h2>
        <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><CheckCircle className="text-green-500 h-5 w-5"/>Recently Completed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {["Introduction to UX Design", "Project Management Essentials"].map(title => (
                        <p key={title} className="text-sm p-2 border rounded-md bg-muted/30">{title}</p>
                    ))}
                </CardContent>
            </Card>
             <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Star className="text-yellow-400 h-5 w-5"/>Favorite Courses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                     {["Advanced AI for Business"].map(title => (
                        <p key={title} className="text-sm p-2 border rounded-md bg-muted/30">{title}</p>
                    ))}
                    <p className="text-sm text-muted-foreground">You haven't favorited any courses yet.</p>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
