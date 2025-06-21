
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Clock, BarChart3, Star, Lightbulb, FileVideo, Briefcase, TrendingUp, Zap, Users as UsersIcon, Handshake, Brain, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";


const ongoingCourses = [
  { id: "AI_AGENT_DEV", title: "Autonomous AI Agent Development", progress: 45, icon: Brain, type: "Learning Path" },
  { id: "CS_L3", title: "Computer Science Specialization L3", progress: 70, icon: Handshake, type: "Course"},
  { id: "PYTHON_DS", title: "Python for Data Science & ML", progress: 80, icon: BookOpen, type: "Course" },
];

const completedCourses = [
  { id: "ux", title: "Introduction to UX Design Principles", date: "July 10, 2024" },
  { id: "pm", title: "Project Management Essentials", date: "June 22, 2024" },
];

const favoriteCourses = [
  { id: "DS_L4", title: "Data Science Advanced L4", category: "Technology" },
  { id: "GM_L5_CAP", title: "General Management Executive Capstone L5", category: "Leadership" },
];

const activityFeedItems = [
  { id: "act1", text: "Completed 'Module 3: Deep Learning' in Advanced AI course.", time: "2 hours ago", icon: CheckCircle },
  { id: "act2", text: "New Skill Acquired: 'Neural Network Implementation'.", time: "2 hours ago", icon: Star },
  { id: "act3", text: "AI recommends 'Natural Language Processing' course.", time: "1 day ago", icon: Lightbulb },
  { id: "act4", text: "Started 'Python for Data Science & ML' course.", time: "3 days ago", icon: BookOpen },
];

const chartData = [
  { name: 'Completed', value: 5, fill: 'hsl(var(--primary))' },
  { name: 'In Progress', value: 3, fill: 'hsl(var(--accent))' },
  { name: 'Not Started', value: 2, fill: 'hsl(var(--secondary))' },
];

const chartConfig = {
  value: { label: 'Courses' },
  Completed: { label: 'Completed', color: 'hsl(var(--primary))' },
  'In Progress': { label: 'In Progress', color: 'hsl(var(--accent))' },
  'Not Started': { label: 'Not Started', color: 'hsl(var(--secondary))' },
} satisfies import("@/components/ui/chart").ChartConfig;


export default function DashboardPage() {
  const userName = "Alex"; // Placeholder, fetch from auth context

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">
          Welcome back, {userName}!
        </h1>
        <p className="text-lg text-muted-foreground">
          Here&apos;s an overview of your learning journey, progress, and AI-driven insights.
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
            <CardDescription>Overview of your course engagement.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square h-48">
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60} strokeWidth={5}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
             <div className="space-y-2 text-sm mt-4">
                {chartData.map(item => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.fill }}></span>
                       <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-headline text-xl">Resume Strength</CardTitle>
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
             <CardDescription>AI-Assessed ATS Compatibility.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
             <div className="relative mx-auto h-32 w-32">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                    <circle className="text-muted/30" strokeWidth="3" stroke="currentColor" fill="transparent" r="15.9155" cx="18" cy="18"></circle>
                    <circle className="text-primary transition-all duration-500" strokeWidth="3" strokeDasharray="75, 100" strokeLinecap="round" stroke="currentColor" fill="transparent" r="15.9155" cx="18" cy="18"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold animated-text-gradient">75%</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Good! Add 2 more AI-suggested skills from 'Advanced AI' to reach 85%.</p>
            <Link href="/resume-builder" passHref>
              <Button className="mt-4 w-full button-animated-gradient">
                Optimize Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
           <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-xl">Recommended For You</CardTitle>
                <Zap className="h-6 w-6 text-primary" />
              </div>
            <CardDescription>AI-picked courses to boost your profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Advanced Data Analysis with Pandas & SQL", "Natural Language Processing with Transformers"].map(title => (
                <Link href="/courses" key={title} className="block p-3 border rounded-md hover:bg-muted/50 transition-colors group">
                    <h4 className="font-semibold text-sm group-hover:text-primary">{title}</h4>
                    <p className="text-xs text-muted-foreground">Matches your 'Data Science' career goal & recent activity in Python.</p>
                    <span className="text-xs text-primary/80 group-hover:underline">Why it&apos;s recommended?</span>
                </Link>
            ))}
            <Link href="/courses?filter=recommended" passHref>
              <Button variant="outline" className="w-full mt-2">
                Explore All Recommendations
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Ongoing Courses Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Continue Learning</h2>
            <Link href="/my-learning?filter=inprogress" passHref>
                 <Button variant="link" className="text-primary self-start sm:self-center">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
        </div>
        {ongoingCourses.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoingCourses.map((course) => {
             const Icon = course.icon || BookOpen;
             return (
            <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.type}</CardDescription>
                    </div>
                    <Icon className="h-8 w-8 text-primary/70"/>
                 </div>
                <div className="flex items-center text-sm text-muted-foreground mt-3">
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
             );
            })}
        </div>
         ) : (
          <Card className="text-center py-10">
            <CardContent>
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-semibold">No courses in progress.</p>
              <p className="text-sm text-muted-foreground mb-3">Start a new learning journey today!</p>
              <Link href="/courses" passHref><Button className="button-animated-gradient">Explore Course Catalog</Button></Link>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Achievements & Activity Feed Section */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div>
            <h2 className="text-2xl font-headline font-semibold mb-4 animated-text-gradient">Achievements & Favorites</h2>
            <div className="space-y-6">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg flex items-center gap-2"><CheckCircle className="text-green-500 h-5 w-5"/>Recently Completed</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {completedCourses.length > 0 ? completedCourses.map(course => (
                            <p key={course.id} className="text-sm p-2 border rounded-md bg-muted/30">
                                {course.title} - <span className="text-xs text-muted-foreground">Completed: {course.date}</span>
                            </p>
                        )) : <p className="text-sm text-muted-foreground">No courses completed yet.</p>}
                    </CardContent>
                </Card>
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg flex items-center gap-2"><Star className="text-yellow-400 h-5 w-5"/>Favorite Courses</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {favoriteCourses.length > 0 ? favoriteCourses.map(course => (
                            <p key={course.id} className="text-sm p-2 border rounded-md bg-muted/30">{course.title}</p>
                        )) : <p className="text-sm text-muted-foreground">You haven&apos;t favorited any courses yet.</p>}
                    </CardContent>
                </Card>
            </div>
        </div>
        <div>
            <h2 className="text-2xl font-headline font-semibold mb-4 animated-text-gradient">Recent Activity</h2>
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-lg flex items-center gap-2"><Activity className="text-primary h-5 w-5"/>Activity Feed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                    {activityFeedItems.map(item => (
                        <div key={item.id} className="flex items-start gap-3 text-sm p-2 border-b last:border-b-0">
                            <item.icon className={`h-5 w-5 mt-0.5 ${item.icon === CheckCircle ? 'text-green-500' : item.icon === Star ? 'text-yellow-500' : 'text-primary' } shrink-0`} />
                            <div>
                                <p>{item.text}</p>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                        </div>
                    ))}
                     {activityFeedItems.length === 0 && <p className="text-sm text-muted-foreground">No recent activity.</p>}
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
