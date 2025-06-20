
// src/app/(app)/my-learning/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, CheckCircle, Clock, ArrowRight, TrendingUp, Star, ImageIcon } from "lucide-react"; 
import { Progress } from "@/components/ui/progress";

const inProgressCourses = [
  { id: "lp1", title: "Executive Leadership Development Path", progress: 75, type: "Learning Path", imageHint: "leadership meeting", lastAccessed: "2 days ago" },
  { id: "c2", title: "AI for Business Professionals", progress: 40, type: "Course", imageHint: "ai analytics", lastAccessed: "Yesterday" },
];

const completedCourses = [
  { id: "c3", title: "Full-Stack Web Development Bootcamp", completionDate: "June 15, 2024", certificateLink: "#", imageHint: "coding screen" },
  { id: "c4", title: "Strategic Communication for Leaders", completionDate: "May 20, 2024", certificateLink: "#", imageHint: "public speaking" },
];

const bookmarkedCourses = [
   { id: "c5", title: "Advanced Data Analysis with Python", category: "Technology", imageHint: "python charts" },
   { id: "lp2", title: "UX Design Fundamentals Path", category: "Design", imageHint: "ui design sketch" },
];

export default function MyLearningPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">My Learning</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress, continue your courses, and view your achievements all in one place.
        </p>
      </section>

      {/* In Progress Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-headline font-semibold animated-text-gradient">In Progress</h2>
          <Link href="/courses?filter=inprogress" asChild>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
        {inProgressCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="w-full h-40 bg-muted flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-primary/30" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
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
                  <Link href={`/courses/${course.id}`} asChild className="w-full">
                    <Button className="w-full button-animated-gradient">
                      Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses in progress.</p>
              <p className="text-muted-foreground mb-4">Start a new learning journey today!</p>
              <Link href="/courses" asChild>
                <Button className="button-animated-gradient">Explore Course Catalog</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Completed Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-headline font-semibold animated-text-gradient">Completed</h2>
           <Link href="/courses?filter=completed" asChild>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
         {completedCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-full h-40 bg-muted flex items-center justify-center">
                   <CheckCircle className="h-16 w-16 text-green-500/50" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-6 w-6"/> {course.title}
                  </CardTitle>
                  <CardDescription>Completed on: {course.completionDate}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={course.certificateLink} asChild className="w-full">
                    <Button variant="outline" className="w-full">View Certificate</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center py-12">
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
           <Link href="/courses?filter=bookmarked" asChild>
            <Button variant="link" className="text-primary">View All <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
         {bookmarkedCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookmarkedCourses.map((course) => (
              <Card key={course.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="w-full h-40 bg-muted flex items-center justify-center">
                   <Star className="h-16 w-16 text-yellow-400/50" />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.category}</CardDescription>
                </CardHeader>
                 <CardFooter className="mt-auto">
                  <Link href={`/courses/${course.id}`} asChild className="w-full">
                    <Button className="w-full button-animated-gradient">
                      View Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
           <Card className="text-center py-12">
            <CardContent>
              <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No bookmarked courses.</p>
              <p className="text-muted-foreground">Explore the catalog and save courses for later.</p>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Learning Statistics Placeholder */}
      <section>
         <h2 className="text-3xl font-headline font-semibold mb-6 animated-text-gradient">Learning Statistics</h2>
         <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><TrendingUp className="h-6 w-6 text-primary"/>Your Learning Journey</CardTitle>
                <CardDescription>Overview of your skills development and activity.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Detailed charts and statistics about your learning habits, skills acquired, and time spent will be displayed here. (e.g., skills radar chart, activity heatmap).</p>
            </CardContent>
         </Card>
      </section>
    </div>
  );
}

