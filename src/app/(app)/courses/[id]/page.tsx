
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, CheckCircle, BookOpen, MessageSquare, Download, Star, Share2, ChevronLeft, ChevronRight, Lightbulb, Video } from "lucide-react"; 
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const courseData = {
  id: "1",
  title: "Executive Leadership Development",
  description: "Master the art of leadership with this comprehensive learning path. Develop strategic thinking, communication, and team motivation skills essential for executive roles.",
  instructor: "Dr. Eleanor Vance",
  rating: 4.8,
  reviews: 1250,
  students: 5600,
  lastUpdated: "July 2024",
  language: "English",
  imageHint: "leadership conference",
  progress: 35, 
  modules: [
    {
      id: "m1",
      title: "Module 1: Foundations of Modern Leadership",
      lessons: [
        { id: "l1_1", title: "Introduction to Trait Theory", duration: "5 min video", completed: true, type: "video" },
        { id: "l1_2", title: "Transformational vs. Transactional Leadership", duration: "7 min video", completed: true, type: "video" },
        { id: "l1_3", title: "Leadership Styles Quiz", duration: "10 min quiz", completed: false, type: "quiz" },
      ],
    },
    {
      id: "m2",
      title: "Module 2: Emotional Intelligence for Leaders",
      lessons: [
        { id: "l2_1", title: "Understanding EQ Components", duration: "8 min video", completed: false, type: "video" },
        { id: "l2_2", title: "Self-Awareness Exercise", duration: "15 min activity", completed: false, type: "activity" },
        { id: "l2_3", title: "Empathy in Leadership", duration: "6 min reading", completed: false, type: "reading" },
      ],
    },
    {
      id: "m3",
      title: "Module 3: Strategic Communication",
      lessons: [
        { id: "l3_1", title: "Crafting a Vision Statement", duration: "10 min video", completed: false, type: "video" },
        { id: "l3_2", title: "Effective Feedback Techniques", duration: "12 min video", completed: false, type: "video" },
      ],
    },
  ],
};

export default function CourseViewPage({ params }: { params: { id: string } }) {
  const course = courseData;
  const currentLesson = course.modules[0].lessons[2]; 

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content Area (Video Player / Lesson Content) */}
      <main className="lg:w-2/3 space-y-6">
        {/* Video Player Placeholder */}
        <Card className="shadow-lg overflow-hidden">
          <div className="aspect-video bg-black flex items-center justify-center text-white relative">
            <Video className="h-24 w-24 text-muted-foreground/50" />
            <div className="absolute bottom-4 left-4 text-sm bg-black/50 p-2 rounded">
              Video Player Area: {currentLesson.title}
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
                <Button variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Button>
                <Button className="button-animated-gradient">Next Lesson <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Title and Actions */}
        <div className="flex justify-between items-start">
            <div>
                <h1 className="text-3xl font-headline font-bold animated-text-gradient">{currentLesson.title}</h1>
                <p className="text-muted-foreground">{course.title} - {course.modules[0].title}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" title="Download Resources"><Download className="h-5 w-5"/></Button>
                <Button variant="outline" size="icon" title="Share Lesson"><Share2 className="h-5 w-5"/></Button>
                <Button variant="outline" size="icon" title="Favorite Lesson"><Star className="h-5 w-5"/></Button>
            </div>
        </div>

        {/* Tabs for Overview, Q&A, Notes */}
        <Card>
            <CardHeader className="p-0">
                <div className="flex border-b">
                    <Button variant="ghost" className="rounded-none flex-1 border-b-2 border-primary">Overview</Button>
                    <Button variant="ghost" className="rounded-none flex-1">Q&A</Button>
                    <Button variant="ghost" className="rounded-none flex-1">Notes</Button>
                     <Button variant="ghost" className="rounded-none flex-1"><Lightbulb className="mr-2 h-4 w-4"/>AI Insights</Button>
                </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">About this lesson: {currentLesson.title}</h2>
                    <p className="text-muted-foreground">
                        This lesson covers essential aspects of {currentLesson.title}. You will learn key concepts and practical applications. 
                        Estimated duration: {currentLesson.duration}. Upon completion, this skill will be added to your profile.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-1">Learning Objectives:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Objective 1 specific to "{currentLesson.title}"</li>
                        <li>Objective 2 specific to "{currentLesson.title}"</li>
                        <li>Objective 3 related to practical application</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-1">Downloadable Resources:</h3>
                     <Button variant="link" className="p-0 h-auto"><Download className="mr-2 h-4 w-4"/>Lesson_Slides_{currentLesson.id}.pdf</Button><br/>
                     <Button variant="link" className="p-0 h-auto"><Download className="mr-2 h-4 w-4"/>Supplementary_Reading_{currentLesson.id}.docx</Button>
                </div>
            </CardContent>
        </Card>

        {/* Q&A Section Placeholder */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary"/> AI-Powered Q&A</CardTitle>
            <CardDescription>Ask questions about the course content. Our AI will assist you by referencing course materials and validated web data.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">AI Q&A section placeholder. (e.g., Input field for questions, display of conversation history with AI, ability for AI to reference specific timestamps or content sections)</p>
          </CardContent>
        </Card>

      </main>

      {/* Sidebar (Module Navigation) */}
      <aside className="lg:w-1/3 space-y-6">
        <Card className="shadow-lg sticky top-20">
          <CardHeader>
            <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <span>{course.rating} <Star className="h-4 w-4 inline text-yellow-400" /></span>
              <span>({course.reviews} reviews)</span>
              <span>&bull; {course.students} students</span>
            </div>
            <Progress value={course.progress} className="mt-3 h-2" />
             <p className="text-xs text-muted-foreground mt-1">{course.progress}% complete</p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue={course.modules[0].id} className="w-full">
              {course.modules.map((module) => (
                <AccordionItem value={module.id} key={module.id}>
                  <AccordionTrigger className="font-semibold hover:no-underline text-base">
                    {module.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 pl-2">
                      {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                          <Link href={`/courses/${course.id}?lesson=${lesson.id}`} asChild>
                            <Button 
                                variant="ghost" 
                                className={`w-full justify-start h-auto py-2 px-2 text-left ${lesson.id === currentLesson.id ? 'bg-muted font-medium' : ''}`}
                            >
                              {lesson.completed ? <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" /> : <PlayCircle className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />}
                              <span className="flex-1 text-sm">{lesson.title}</span>
                              <span className="text-xs text-muted-foreground ml-2 shrink-0">{lesson.duration}</span>
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

