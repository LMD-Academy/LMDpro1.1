
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, CheckCircle, BookOpen, MessageSquare, Download, Star, ChevronLeft, ChevronRight, Lightbulb, Video, FileText, Brain, Activity, Volume2, PauseCircle, Share2 } from "lucide-react"; 
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { getCourseById } from "@/lib/course-data";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "next/navigation";

// Define the course type based on the return of getCourseById
type CourseType = ReturnType<typeof getCourseById>;

export default function CourseViewPage() {
  const params = useParams();
  const id = params.id as string;
  const [course, setCourse] = useState<CourseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { toast } = useToast();
  
  const [currentLesson, setCurrentLesson] = useState<any | null>(null); 
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    const courseData = getCourseById(id);
    setCourse(courseData);
    if (courseData?.subCourses?.[0]?.lessons?.[0]) {
        setCurrentLesson(courseData.subCourses[0].lessons[0]);
    } else {
        setCurrentLesson(null);
    }
    setIsLoading(false);
  }, [id]);

  const currentModule = course?.subCourses?.find(m => m.lessons?.some(l => l.id === currentLesson?.id));

  const handleTextToSpeech = (textToSpeak: string) => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setIsSpeaking(false);
        toast({ title: "TTS Error", description: "Could not play audio.", variant: "destructive" });
      };
      window.speechSynthesis.speak(utterance);
    } else {
      toast({ title: "TTS Not Supported", description: "Your browser does not support text-to-speech.", variant: "destructive" });
    }
  };
  
  useEffect(() => {
      // Cancel speech synthesis on component unmount or when lesson changes
      return () => {
          if ('speechSynthesis' in window && window.speechSynthesis.speaking){
              window.speechSynthesis.cancel();
              setIsSpeaking(false);
          }
      }
  }, [currentLesson]);


  const getLessonIcon = (type: string) => {
    switch(type) {
        case "video": return <PlayCircle className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />;
        case "reading": return <BookOpen className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />;
        case "quiz": return <FileText className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />;
        case "activity": return <Activity className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />;
        default: return <PlayCircle className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />;
    }
  }
  
  if (isLoading) {
    return (
        <div className="flex items-center justify-center h-full">
             <Card className="shadow-lg rounded-xl w-full max-w-md">
                <CardHeader>
                    <CardTitle className="font-headline">Loading Course...</CardTitle>
                    <CardDescription>Please wait while we fetch the course details.</CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
  }

  if (!course || !currentLesson) {
    return (
        <div className="flex items-center justify-center h-full">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <CardTitle className="font-headline">Course Not Found</CardTitle>
                    <CardDescription>The course you are looking for does not exist or has no lessons.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/courses">
                        <Button className="button-animated-gradient">Back to Course Catalog</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content Area (Video Player / Lesson Content) */}
      <main className="lg:w-2/3 space-y-6">
        {/* Video Player Placeholder / Content Display Area */}
        <Card className="shadow-lg overflow-hidden rounded-xl">
          <div className="aspect-video bg-muted flex items-center justify-center text-white relative">
            {/* Dynamic content based on lesson type */}
            {currentLesson.type === 'video' && <Video className="h-24 w-24 text-primary/30" />}
            {currentLesson.type === 'reading' && <BookOpen className="h-24 w-24 text-primary/30" />}
            {currentLesson.type === 'quiz' && <FileText className="h-24 w-24 text-primary/30" />}
             {currentLesson.type === 'activity' && <Activity className="h-24 w-24 text-primary/30" />}
            <div className="absolute bottom-4 left-4 text-sm bg-black/50 p-2 rounded">
              Content Area for: {currentLesson.title} ({currentLesson.type})
            </div>
            <Button
                variant="secondary"
                size="icon"
                onClick={() => handleTextToSpeech(currentLesson.content || 'No content available to read.')}
                className="absolute top-4 right-4 rounded-full h-10 w-10 z-10"
                title={isSpeaking ? "Stop Audio" : "Play Paragraph Audio"}
            >
                {isSpeaking ? <PauseCircle className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
                <Button variant="outline" className="rounded-md"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Button>
                <Button className="button-animated-gradient rounded-md">Next Lesson <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Title and Actions */}
        <div className="flex justify-between items-start py-4">
            <div>
                <h1 className="text-3xl font-headline font-bold animated-text-gradient">{currentLesson.title}</h1>
                <p className="text-muted-foreground">{course.title} - {currentModule?.title}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" title="Download Resources" className="rounded-full"><Download className="h-5 w-5"/></Button>
                <Button variant="outline" size="icon" title="Share Lesson" className="rounded-full"><Share2 className="h-5 w-5"/></Button>
                <Button variant="outline" size="icon" title="Favorite Lesson" className="rounded-full"><Star className="h-5 w-5"/></Button>
            </div>
        </div>

        {/* Tabs for Overview, Q&A, Notes */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="qna">Q&A</TabsTrigger>
            <TabsTrigger value="insights"><Lightbulb className="mr-1 h-4 w-4 sm:inline hidden"/>AI Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="shadow-md rounded-lg">
              <CardContent className="pt-6 space-y-4">
                  <div>
                      <h2 className="text-xl font-semibold mb-2 font-headline">About this lesson: {currentLesson.title}</h2>
                      <p className="text-muted-foreground">
                          {currentLesson.content || `This lesson explores ${currentLesson.title.toLowerCase()}. You will learn key concepts and practical applications related to ${currentModule?.title.toLowerCase()}. Estimated duration: ${currentLesson.duration}. Upon completion, this skill will be added to your profile.`}
                      </p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold mb-1 font-headline">Learning Objectives:</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                          <li>Understand the core principles of {currentLesson.title.toLowerCase()}.</li>
                          <li>Apply techniques related to {currentLesson.title.toLowerCase()} in practical scenarios.</li>
                          <li>Analyze the impact of {currentLesson.title.toLowerCase()} within {course.category?.toLowerCase() || 'this field'}.</li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold mb-1 font-headline">Downloadable Resources:</h3>
                      <Button variant="link" className="p-0 h-auto text-primary hover:underline"><Download className="mr-2 h-4 w-4"/>Lesson_Slides_{currentLesson.id}.pdf</Button><br/>
                      <Button variant="link" className="p-0 h-auto text-primary hover:underline"><Download className="mr-2 h-4 w-4"/>Supplementary_Reading_{currentLesson.id}.docx</Button>
                  </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="transcript">
            <Card className="shadow-md rounded-lg">
                <CardHeader><CardTitle className="font-headline">Interactive Transcript</CardTitle></CardHeader>
                <CardContent>
                    <div className="h-64 border rounded-md p-3 bg-muted/30 overflow-y-auto">
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                            [00:00:05] Welcome to the lesson on {currentLesson.title}. Today, we will cover...
                            {"\n"}[00:00:15] The first key concept is X, which refers to... (Interactive transcript highlighting based on video/audio playback would be implemented here.)
                            {"\n"}[00:01:30] Another important aspect is Y. Consider this example...
                            {"\n"}[00:02:50] Finally, let's discuss Z and its implications...
                            {"\n"}[00:04:00] (More transcript content based on the lesson topic would go here.)
                        </p>
                    </div>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="qna">
            <Card className="shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary"/> AI-Powered Q&A</CardTitle>
                <CardDescription>Ask questions about the lesson content. Our AI will assist you by referencing course materials and validated web data.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="Type your question about this lesson..." className="mb-3 focus-gradient-outline" rows={3}/>
                <Button className="button-animated-gradient">Ask AI Assistant</Button>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <p>Q: What is the main difference between X and Y mentioned in the video?</p>
                    <p className="pl-4 border-l-2 border-primary">A: (AI generated answer referencing course material) The main difference is...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="insights">
             <Card className="shadow-md rounded-lg">
                <CardHeader><CardTitle className="font-headline flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary"/>AI Learning Insights</CardTitle>
                <CardDescription>AI-generated summaries, key takeaways, and related concept explorations for this lesson.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">AI Insights for "{currentLesson.title}" (AI-generated key concepts summary, links to related LMDpro modules, external research links would appear here).</p>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Sidebar (Module Navigation) */}
      <aside className="lg:w-1/3 space-y-6">
        <Card className="shadow-lg sticky top-[calc(var(--header-height,4rem)+1rem)] rounded-xl"> {/* Adjusted top for fixed header */}
          <CardHeader className="pb-3">
            <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
             <Link href={`/instructors/${course.instructor.replace(/\s+/g, '-').toLowerCase()}`} className="group">
                <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={course.instructorImage} alt={course.instructor} />
                        <AvatarFallback>{course.instructor.split(' ').map((n:string)=>n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium group-hover:text-primary">{course.instructor}</p>
                        <p className="text-xs text-muted-foreground">{course.instructorTitle}</p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <span>{course.rating} <Star className="h-4 w-4 inline text-yellow-400" /></span>
              <span>({course.reviews} reviews)</span>
              <span>&bull; {course.students} students</span>
            </div>
            <Progress value={course.progress} className="mt-3 h-2" />
             <p className="text-xs text-muted-foreground mt-1">{course.progress}% complete</p>
          </CardHeader>
          <CardContent className="max-h-[calc(100vh-20rem)] overflow-y-auto"> {/* Adjust max-h as needed */}
            <Accordion type="single" collapsible defaultValue={currentModule?.id} className="w-full">
              {course.subCourses && course.subCourses.map((moduleItem: any) => (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="font-semibold hover:no-underline text-base">
                    {moduleItem.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 pl-2">
                      {moduleItem.lessons && moduleItem.lessons.map((lesson: any) => (
                        <li key={lesson.id}>
                          <Button 
                              variant="ghost" 
                              className={`w-full justify-start h-auto py-2 px-2 text-left text-sm ${lesson.id === currentLesson.id ? 'bg-muted font-medium text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                              onClick={() => setCurrentLesson(lesson)}
                          >
                            {lesson.completed ? <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" /> : getLessonIcon(lesson.type)}
                            <span className="flex-1">{lesson.title}</span>
                            <span className="text-xs text-muted-foreground/80 ml-2 shrink-0">{lesson.duration}</span>
                          </Button>
                        </li>
                      ))}
                      {!moduleItem.lessons && <p className="text-xs text-muted-foreground p-2">No lessons available for this module yet.</p>}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
           <CardFooter className="pt-4 border-t">
            <Button className="w-full button-animated-gradient">Enroll in Full Learning Path (Not Implemented)</Button>
           </CardFooter>
        </Card>
      </aside>
    </div>
  );
}
