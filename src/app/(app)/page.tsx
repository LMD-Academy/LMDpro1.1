
"use client"; // This page uses client-side hooks for dashboard-like features.

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle, Clock, BarChart3, Star, TrendingUp, Zap, Lightbulb, FileVideo, FileText as FileTextIcon, ClipboardList, UserCircle, ImageIcon, ShieldCheck, DollarSign, Settings, Users as UsersIcon, Building, LifeBuoy, Handshake, HelpCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

// Data for the dashboard part, normally fetched
const ongoingCourses = [
  { id: "ai-agent-dev", title: "Autonomous AI Agent Development", progress: 45, imageHint: "AI robot learning", type: "Learning Path" },
  { id: "cs-l3", title: "Computer Science Specialization L3", progress: 70, imageHint: "code matrix", type: "Course"},
];

const completedCoursesCount = 2; // Example
const skillsAcquiredCount = 18; // Example
const averageScore = "85%"; // Example

const recommendedCourses = [
  { id: "ds-l4", title: "Data Science Advanced L4", reason: "Matches your interest in AI and Python skills.", imageHint: "data analytics dashboard" },
  { id: "gm-l3", title: "General Management & Leadership L3", reason: "Complements your technical skills for future roles.", imageHint: "team meeting" },
];

const activityFeedItems = [
  { id: "act1", text: "Completed 'Module 2: Designing Agentic Architectures' in Autonomous AI Agents.", time: "1 hour ago", icon: CheckCircle },
  { id: "act2", text: "New Skill Acquired: 'Hierarchical Planning'.", time: "1 hour ago", icon: Star },
  { id: "act3", text: "AI recommends 'Natural Language Processing Advanced Topics'.", time: "Yesterday", icon: Lightbulb },
];

const featureCards = [
  {
    title: "AI-Powered Learning Paths",
    description: "Dynamically creates personalized learning journeys based on your profile and goals, leveraging real-time internet research for up-to-date content and comprehensive skill gap analysis. LMDpro's AI Agent actively guides you, suggesting modules, resources, and assessments to ensure optimal skill acquisition and career alignment.",
    icon: Lightbulb,
    bgColor: "bg-blue-500/10", // Updated to match actual palette, can be more specific
    textColor: "text-primary", // Updated
    href: "/learning-paths",
  },
  {
    title: "Automated Video Creation",
    description: "Automatically generate engaging educational videos from research scripts or your own text. Supports multiple languages, diverse 3D animated avatar selections, and custom branding application for streamlined, professional content creation. Ideal for educators and corporate training.",
    icon: FileVideo,
    bgColor: "bg-green-500/10",
    textColor: "text-green-500", // Or map to accent etc.
    href: "/video-creation",
  },
  {
    title: "Intelligent Resume Builder",
    description: "Import data from LinkedIn, design with customizable templates, and optimize content with AI suggestions tailored to specific job descriptions and ATS scoring. Export professional resumes as PDF, with a subtle 'Made with LMDpro' watermark on the free tier.",
    icon: ClipboardList,
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-500", // Or map to accent etc.
    href: "/resume-builder",
  },
   {
    title: "24/7 AI Support & Research",
    description: "Get instant assistance for technical issues, billing inquiries, and course navigation via our intelligent AI chat. Leverage the Academic Research Agent for in-depth exploration of topics, powered by unrestricted internet access and RAG capabilities.",
    icon: HelpCircle,
    bgColor: "bg-yellow-500/10",
    textColor: "text-yellow-500", // Or map to accent etc.
    href: "/support",
  },
];

export default function AppDashboardPage() {
  const [userName, setUserName] = useState("Learner"); // Placeholder, fetch from auth context

  useEffect(() => {
    // In a real app, fetch user name from auth context
    // For now, can use a simple local storage check or keep placeholder
    const storedUser = localStorage.getItem("lmdpro-user"); // Example
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if(userData.name) setUserName(userData.name);
      } catch (e) { console.error("Failed to parse user from localStorage");}
    }
  }, []);

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

      {/* Quick Stats & Main Feature Cards */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-lg lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-headline text-xl">Learning Progress</CardTitle>
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <CardDescription>Overview of your course engagement.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center bg-muted/50 rounded-md text-muted-foreground mb-4 border">
              <p className="text-xs p-2 text-center">Learning Progress Chart (e.g., {completedCoursesCount} Completed, {ongoingCourses.length} In Progress)</p>
            </div>
             <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Courses Completed</span> <span className="font-semibold">{completedCoursesCount}</span></div>
                <div className="flex justify-between"><span>Skills Acquired</span> <span className="font-semibold">{skillsAcquiredCount}</span></div>
                <div className="flex justify-between"><span>Average Score</span> <span className="font-semibold">{averageScore}</span></div>
             </div>
          </CardContent>
        </Card>
        
        {featureCards.slice(0, 3).map((feature, index) => ( // Display top 3 features here
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:col-span-1">
            <CardHeader>
              <div className={`p-3 rounded-full w-fit mb-3 ${feature.bgColor}`}>
                <feature.icon className={`h-7 w-7 ${feature.textColor}`} />
              </div>
              <CardTitle className="font-headline text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground text-xs leading-relaxed">{feature.description.substring(0, 150)}...</p>
            </CardContent>
            <CardFooter>
              <Link href={feature.href} passHref className="w-full">
                 <Button variant="outline" className="w-full">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Ongoing Courses Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Continue Learning</h2>
            <Link href="/my-learning?filter=inprogress" passHref>
                 <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
        </div>
        {ongoingCourses.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ongoingCourses.map((course) => (
            <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-40 bg-muted flex items-center justify-center rounded-t-lg">
                <ImageIcon className="h-16 w-16 text-primary/30" data-ai-hint={course.imageHint} />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                <CardDescription>{course.type}</CardDescription>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Clock className="mr-1.5 h-4 w-4" /> {course.progress}% complete
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={course.progress} className="mb-3 h-2" />
                <Link href={`/courses/${course.id}`} passHref className="w-full">
                  <Button className="w-full button-animated-gradient">
                    Resume Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
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

      {/* Recommendations & Activity Feed Section */}
      <section className="grid gap-8 md:grid-cols-2">
         <Card className="shadow-lg">
           <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle className="font-headline text-xl">Recommended For You</CardTitle>
                <Zap className="h-6 w-6 text-primary" />
              </div>
            <CardDescription>AI-picked courses to boost your profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommendedCourses.map(course => (
                <Link href={`/courses/${course.id}`} key={course.id} passHref>
                  <div className="block p-3 border rounded-md hover:bg-muted/50 transition-colors group">
                      <h4 className="font-semibold text-sm group-hover:text-primary">{course.title}</h4>
                      <p className="text-xs text-muted-foreground">{course.reason}</p>
                  </div>
                </Link>
            ))}
            <Link href="/courses?filter=recommended" passHref>
              <Button variant="outline" className="w-full mt-2">
                Explore All Recommendations
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><TrendingUp className="text-primary h-6 w-6"/>Activity Feed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-80 overflow-y-auto">
                {activityFeedItems.map(item => (
                    <div key={item.id} className="flex items-start gap-3 text-sm p-2 border-b last:border-b-0">
                        <item.icon className={`h-5 w-5 mt-0.5 ${item.icon === CheckCircle ? 'text-green-500' : item.icon === Star ? 'text-yellow-500' : 'text-primary' } shrink-0`} />
                        <div>
                            <p>{item.text}</p>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                    </div>
                ))}
                 {activityFeedItems.length === 0 && <p className="text-sm text-muted-foreground">No recent activity.</