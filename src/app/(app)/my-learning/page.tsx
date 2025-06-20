
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, CheckCircle, Clock, ArrowRight, TrendingUp, Star, ImageIcon, BookMarked } from "lucide-react"; 
import { Progress } from "@/components/ui/progress";

const inProgressCourses = [
  { id: "AI_AGENT_DEV", title: "Autonomous AI Agent Development", progress: 45, type: "Learning Path", imageHint: "AI robot interface", lastAccessed: "2 days ago" },
  { id: "CS_L3", title: "Computer Science Specialization L3", progress: 70, type: "Specialization", imageHint: "network diagram code", lastAccessed: "Yesterday" },
  { id: "PYTHON_DS", title: "Python for Data Science", progress: 20, type: "Standalone Course", imageHint: "python data visualization", lastAccessed: "Today" },
];

const completedCourses = [
  { id: "FBS_L1", title: "Foundational Business Skills L1", completionDate: "June 15, 2024", certificateLink: "#", imageHint: "business meeting presentation" },
  { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", completionDate: "May 20, 2024", certificateLink: "#", imageHint: "leader inspiring team" },
];

const bookmarkedCourses = [
   { id: "DS_L4", title: "Data Science Advanced L4", category: "Technology", imageHint: "complex data graph" },
   { id: "GM_L5_CAP", title: "General Management Executive Capstone L5", category: "Leadership", imageHint: "ceo overlooking city" },
];

export default function MyLearningPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">My Learning Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress, continue your courses, and view your achievements all in one place.
        </p>
      </section>

      {/* In Progress Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-headline font-semibold animated-text-gradient">In Progress</h2>
          <Link href="/courses?filter=inprogress" passHref>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
        {inProgressCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.type}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Clock className="mr-1.5 h-4 w-4" /> {course.progress}% complete
                  </div>
                   <p className="text-xs text-muted-foreground mt-1">Last accessed: {course.lastAccessed}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Progress value={course.progress} className="mb-3 h-2" />
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${course.id}`} passHref className="w-full">
                    <Button className="w-full button-animated-gradient">
                      Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 shadow-md rounded-lg">
            <CardContent>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses in progress.</p>
              <p className="text-muted-foreground mb-4">Start a new learning journey today!</p>
              <Link href="/courses" passHref>
                <Button className="button-animated-gradient">Explore Course Catalog</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Completed Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Completed Courses</h2>
           <Link href="/courses?filter=completed" passHref>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
         {completedCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 shrink-0"/> {course.title}
                  </CardTitle>
                  <CardDescription>Completed on: {course.completionDate}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={course.certificateLink} passHref className="w-full">
                    <Button variant="outline" className="w-full">View Certificate (Placeholder)</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center py-12 shadow-md rounded-lg">
            <CardContent>
              <CheckCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses completed yet.</p>
              <p className="text-muted-foreground">Keep learning to see your achievements here!</p>
            </CardContent>
          </Card>
        )}
      </section>
      
      {/* Bookmarked / Saved for Later Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Bookmarked Courses</h2>
           <Link href="/courses?filter=bookmarked" passHref>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
         {bookmarkedCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookmarkedCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden rounded-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-lg">{course.title}</CardTitle>
                  <CardDescription>{course.category}</CardDescription>
                </CardHeader>
                 <CardFooter className="mt-auto">
                  <Link href={`/courses/${course.id}`} passHref className="w-full">
                    <Button className="w-full button-animated-gradient">
                      View Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center py-12 shadow-md rounded-lg">
            <CardContent>
              <BookMarked className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No bookmarked courses.</p>
              <p className="text-muted-foreground">Explore the catalog and save courses for later.</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Learning Statistics Placeholder */}
      <section>
         <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Learning Statistics</h2>
         <Card className="shadow-lg rounded-lg">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><TrendingUp className="h-6 w-6 text-primary"/>Your Learning Journey</CardTitle>
                <CardDescription>Overview of your skills development and activity.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/50 rounded-md text-muted-foreground border">
                    <p className="text-sm p-4 text-center">Detailed Learning Statistics Chart Area (e.g., skills radar chart, activity heatmap, weekly learning time). Coming Soon!</p>
                </div>
            </CardContent>
         </Card>
      </section>
    </div>
  );
}
