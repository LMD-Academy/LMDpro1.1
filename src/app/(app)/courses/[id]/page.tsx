
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, CheckCircle, BookOpen, MessageSquare, Download, Star, ChevronLeft, ChevronRight, Lightbulb, Video, FileText, Brain, Activity, Volume2, Pause, Play, StopCircle, Settings2 as SettingsIcon, Bookmark, Share2, Loader2 } from "lucide-react"; 
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useMemo } from "react";
import { getCourseById } from "@/lib/course-data";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, stripMarkdown } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { courseQa } from "@/ai/flows/course-qna";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


// Define the course type based on the return of getCourseById
type CourseType = ReturnType<typeof getCourseById>;

export default function CourseViewPage() {
  const params = useParams();
  const id = params.id as string;
  const { language } = useLanguage();
  const [course, setCourse] = useState<CourseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { toast } = useToast();
  
  const [currentLesson, setCurrentLesson] = useState<any | null>(null); 
  
  // TTS State Management
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | undefined>(undefined);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);

  // Q&A State
  const [qnaQuestion, setQnaQuestion] = useState("");
  const [isQnaLoading, setIsQnaLoading] = useState(false);
  const [qnaHistory, setQnaHistory] = useState<{ question: string, answer: string }[]>([]);


  // Filter subCourses based on current language
  const filteredSubCourses = useMemo(() => {
    if (!course) return [];
    const languageFiltered = course.subCourses?.filter(sc => sc.language === language);
    // Fallback to English if no courses for selected language
    if (languageFiltered && languageFiltered.length > 0) {
        return languageFiltered;
    }
    return course.subCourses?.filter(sc => sc.language === 'English');
  }, [course, language]);

  // Effect to load course data
  useEffect(() => {
    setIsLoading(true);
    const courseData = getCourseById(id);
    setCourse(courseData);
    setIsLoading(false);
  }, [id]);

  // Effect to set initial lesson when filteredSubCourses changes
  useEffect(() => {
    if(filteredSubCourses && filteredSubCourses.length > 0 && filteredSubCourses[0].lessons && filteredSubCourses[0].lessons.length > 0){
      setCurrentLesson(filteredSubCourses[0].lessons[0]);
    } else {
      setCurrentLesson(null);
    }
  }, [filteredSubCourses]);


  // Effect to load Speech Synthesis voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
      if (voices.length > 0 && !selectedVoiceURI) {
        const defaultVoice = voices.find(v => v.lang.startsWith(language === 'Arabic' ? 'ar' : 'en')) || voices[0];
        if (defaultVoice) {
            setSelectedVoiceURI(defaultVoice.voiceURI);
        }
      }
    };
    loadVoices();
    // onvoiceschanged is the correct event
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      if (window.speechSynthesis) {
         window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, [selectedVoiceURI, language]);
  
  // Cleanup effect for speech synthesis
  useEffect(() => {
    return () => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Update progress on utterance boundary
  useEffect(() => {
    if (!utterance) return;
    
    const handleBoundary = (event: SpeechSynthesisEvent) => {
        if (event.name === 'word') {
            const newProgress = (event.charIndex + event.charLength) / utterance.text.length * 100;
            setProgress(newProgress);
        }
    };
    
    const handleEnd = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setProgress(100);
        setTimeout(() => setProgress(0), 500); // Reset after a short delay
    };

    utterance.addEventListener('boundary', handleBoundary);
    utterance.addEventListener('end', handleEnd);

    return () => {
      utterance.removeEventListener('boundary', handleBoundary);
      utterance.removeEventListener('end', handleEnd);
    };
  }, [utterance]);


  const handlePlayPause = () => {
    if (!currentLesson?.content) {
      toast({ title: "No Content", description: "There is no lesson content to read aloud.", variant: "destructive" });
      return;
    }

    if (isSpeaking && !isPaused) { // Is speaking, so pause
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) { // Is paused, so resume
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else { // Is not speaking, so start
      const textToSpeak = stripMarkdown(currentLesson.content);
      const newUtterance = new SpeechSynthesisUtterance(textToSpeak);
      const selectedVoice = availableVoices.find(v => v.voiceURI === selectedVoiceURI);
      if (selectedVoice) {
        newUtterance.voice = selectedVoice;
      } else { // Fallback voice
        const fallbackVoice = availableVoices.find(v => v.lang.startsWith(language === 'Arabic' ? 'ar' : 'en'));
        if (fallbackVoice) newUtterance.voice = fallbackVoice;
      }
      newUtterance.rate = playbackRate;
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setProgress(0);
    setUtterance(null);
  };
  
  const handleAskQna = async () => {
    if (!qnaQuestion.trim()) return;
    if (!currentLesson?.content) {
        toast({ title: "No Lesson Context", description: "Please select a lesson to ask questions about.", variant: "destructive" });
        return;
    }

    setIsQnaLoading(true);
    const currentQuestion = qnaQuestion;
    setQnaQuestion("");

    try {
        const result = await courseQa({ question: currentQuestion, context: currentLesson.content });
        setQnaHistory(prev => [...prev, { question: currentQuestion, answer: result.answer }]);
    } catch(error) {
        console.error("Q&A Error:", error);
        const errorMessage = "Sorry, I encountered an error trying to answer that question. Please try again.";
        setQnaHistory(prev => [...prev, { question: currentQuestion, answer: errorMessage }]);
        toast({ title: "Q&A Failed", description: "The AI assistant could not answer the question.", variant: "destructive" });
    } finally {
        setIsQnaLoading(false);
    }
  };
  
  const currentModule = course?.subCourses?.find(m => m.lessons?.some(l => l.id === currentLesson?.id));

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

  if (!course) {
    return (
        <div className="flex items-center justify-center h-full">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <CardTitle className="font-headline">Course Not Found</CardTitle>
                    <CardDescription>The course you are looking for does not exist.</CardDescription>
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
  
  if (!currentLesson) {
     return (
        <div className="flex items-center justify-center h-full">
            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <CardTitle className="font-headline">No Lessons Found</CardTitle>
                    <CardDescription>No lessons available for the selected language. Please switch languages or check back later.</CardDescription>
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
      {/* Main Content Area */}
      <main className="lg:w-2/3 space-y-6">
        
        <Card className="shadow-lg overflow-hidden rounded-xl">
            <CardHeader className="border-b bg-muted/30">
                 <CardTitle className="font-headline">Lesson Player: {currentLesson.type}</CardTitle>
                 <CardDescription>Use the audio controls to listen to the lesson content.</CardDescription>
                {/* TTS CONTROLS */}
                <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-4">
                        <Button onClick={handlePlayPause} size="icon" className="rounded-full h-12 w-12 button-animated-gradient" disabled={!currentLesson?.content}>
                            {isSpeaking && !isPaused ? <Pause className="h-6 w-6"/> : <Play className="h-6 w-6" />}
                        </Button>
                         <Button onClick={handleStop} size="icon" variant="outline" className="rounded-full h-10 w-10" disabled={!isSpeaking}>
                            <StopCircle className="h-5 w-5"/>
                        </Button>
                        <div className="flex-1 flex items-center gap-2">
                            <span className="text-xs font-mono">{new Date(progress / 100 * (currentLesson?.content?.length * 50 || 0)).toISOString().substr(14, 5)}</span>
                            <Slider
                                value={[progress]}
                                onValueChange={(value) => {
                                    // Seeking not implemented in standard web speech api, this is for display
                                    setProgress(value[0]);
                                }}
                                max={100}
                                step={1}
                                disabled={!isSpeaking}
                            />
                             <span className="text-xs font-mono">{new Date((currentLesson?.content?.length * 50 || 0)).toISOString().substr(14, 5)}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="text-xs font-medium text-muted-foreground">Voice</label>
                             <Select onValueChange={setSelectedVoiceURI} value={selectedVoiceURI} disabled={isSpeaking}>
                                 <SelectTrigger className="focus-gradient-outline">
                                     <SelectValue placeholder="Select voice..."/>
                                 </SelectTrigger>
                                 <SelectContent>
                                     {availableVoices.filter(v => v.lang.startsWith(language === 'Arabic' ? 'ar' : 'en')).map(voice => (
                                         <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
                                             {voice.name} ({voice.lang})
                                         </SelectItem>
                                     ))}
                                 </SelectContent>
                             </Select>
                        </div>
                        <div>
                             <label className="text-xs font-medium text-muted-foreground">Speed</label>
                            <Select onValueChange={(value) => setPlaybackRate(Number(value))} defaultValue="1" disabled={isSpeaking}>
                                <SelectTrigger className="focus-gradient-outline">
                                    <SelectValue placeholder="Select speed..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0.5">0.5x</SelectItem>
                                    <SelectItem value="0.75">0.75x</SelectItem>
                                    <SelectItem value="1">Normal</SelectItem>
                                    <SelectItem value="1.5">1.5x</SelectItem>
                                    <SelectItem value="2">2.0x</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                 <ScrollArea className="h-[400px] lg:h-[500px]">
                    <div className="prose dark:prose-invert max-w-none p-6">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {currentLesson.content || "No content available for this lesson."}
                        </ReactMarkdown>
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <div className="flex justify-between items-center w-full">
                    <Button variant="outline" className="rounded-md"><ChevronLeft className="mr-2 h-4 w-4" /> Previous</Button>
                    <Button className="button-animated-gradient rounded-md">Next Lesson <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardFooter>
        </Card>

        {/* Lesson Title and Actions */}
        <div className="flex justify-between items-start py-4">
            <div>
                <h1 className="text-3xl font-headline font-bold animated-text-gradient">{currentLesson.title}</h1>
                <p className="text-muted-foreground">{course.title} - {currentModule?.title}</p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" title="Download Resources" className="rounded-full"><Download className="h-5 w-5"/></Button>
                <Button variant="outline" size="icon" title="Bookmark Lesson" className="rounded-full"><Bookmark className="h-5 w-5"/></Button>
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
                          {currentLesson.overview || `This lesson explores ${currentLesson.title.toLowerCase()}. You will learn key concepts and practical applications related to ${currentModule?.title.toLowerCase()}. Estimated duration: ${currentLesson.duration}. Upon completion, this skill will be added to your profile.`}
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
                    <ScrollArea className="h-64 border rounded-md p-3 bg-muted/30">
                       <div className="prose dark:prose-invert max-w-none text-sm">
                           <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {currentLesson.content || "Transcript is not available for this lesson."}
                           </ReactMarkdown>
                       </div>
                    </ScrollArea>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="qna">
            <Card className="shadow-md rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary"/> AI-Powered Q&A</CardTitle>
                <CardDescription>Ask questions about the lesson content. Our AI will assist you by referencing course materials.</CardDescription>
              </CardHeader>
              <CardContent>
                 <div className="flex gap-2">
                    <Textarea 
                        placeholder="Type your question about this lesson..." 
                        className="flex-1 focus-gradient-outline" 
                        rows={2}
                        value={qnaQuestion}
                        onChange={(e) => setQnaQuestion(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleAskQna())}
                    />
                    <Button className="button-animated-gradient" onClick={handleAskQna} disabled={isQnaLoading}>
                        {isQnaLoading ? <Loader2 className="h-4 w-4 animate-spin"/> : "Ask AI"}
                    </Button>
                 </div>
                <div className="mt-4 space-y-4 text-sm max-h-60 overflow-y-auto">
                    {qnaHistory.map((item, index) => (
                        <div key={index} className="text-muted-foreground">
                            <p className="font-semibold text-foreground">Q: {item.question}</p>
                            <p className="pl-4 border-l-2 border-primary mt-1">A: {item.answer}</p>
                        </div>
                    ))}
                    {isQnaLoading && (
                         <div className="text-muted-foreground flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin"/>
                            <span>AI is thinking...</span>
                         </div>
                    )}
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
                    <p className="text-sm text-muted-foreground p-4 text-center border rounded-md bg-muted/30">
                        This feature is coming soon! It will provide AI-generated key concepts, summaries, and links to related LMDpro modules.
                    </p>
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
              {filteredSubCourses.map((moduleItem: any) => (
                <AccordionItem value={moduleItem.id} key={moduleItem.id}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {moduleItem.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1 pl-2">
                      {moduleItem.lessons && moduleItem.lessons.map((lesson: any) => (
                        <li key={lesson.id}>
                          <Button 
                              variant="ghost" 
                              className={`w-full justify-start h-auto py-2 px-2 text-left text-sm ${lesson.id === currentLesson.id ? 'bg-muted font-medium text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                              onClick={() => {
                                handleStop(); // Stop any current speech before changing lesson
                                setCurrentLesson(lesson);
                                setProgress(0);
                                setQnaHistory([]); // Clear Q&A history for new lesson
                              }}
                          >
                            {lesson.completed ? <CheckCircle className="h-4 w-4 mr-2 text-green-500 shrink-0" /> : getLessonIcon(lesson.type)}
                            <span className="flex-1">{lesson.title}</span>
                            <span className="text-xs text-muted-foreground/80 ml-2 shrink-0">{lesson.length}</span>
                          </Button>
                        </li>
                      ))}
                      {!moduleItem.lessons && <p className="text-xs text-muted-foreground p-2">No lessons available for this module yet.</p>}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {filteredSubCourses.length === 0 && <p className="text-muted-foreground text-sm p-4">No modules available for the selected language.</p>}
            </Accordion>
          </CardContent>
           <CardFooter className="pt-4 border-t">
            <Button className="w-full button-animated-gradient" onClick={() => toast({title: "Not Implemented", description: "This would enroll the user in a full learning path."})}>
              Enroll in Full Learning Path
            </Button>
           </CardFooter>
        </Card>
      </aside>
    </div>
  );
}
