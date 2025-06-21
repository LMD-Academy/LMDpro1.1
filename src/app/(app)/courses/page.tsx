
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, Filter, List, Grid, Search, GraduationCap, BookCopy, ShieldCheck, Zap, Users, Building, ImageIcon, Video, FileText as FileTextIcon, Library, BookMarked, Lightbulb, Network, Info, Brain, Briefcase, ClipboardList, Settings2, HelpCircle, ScrollText } from "lucide-react"; 
import Link from "next/link";
import { cn } from "@/lib/utils";

const courseIcons: { [key: string]: React.ElementType } = {
    GraduationCap, BookCopy, ShieldCheck, Zap, Users, Building, Video, FileTextIcon, Library, BookMarked, Lightbulb, Network, Info, Brain, Briefcase, ClipboardList, Settings2, HelpCircle, ScrollText, ImageIcon
};

const allCourses = [
  { id: "FBS_L1", title: "Foundational Business Skills L1", category: "CORE_L1", difficulty: "Beginner", duration: "15 Weeks", type: "Standalone Course", icon: "GraduationCap" },
  { id: "AMC_L2", title: "Applied Management & Communication L2", category: "CORE_L2", difficulty: "Intermediate", duration: "10 Weeks", type: "Standalone Course", icon: "Briefcase" },
  { id: "AB_L3", title: "Agile Business Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "12 Weeks", type: "Specialization", icon: "Zap" },
  { id: "CS_L3", title: "Computer Science Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "18 Weeks", type: "Specialization", icon: "Network" },
  { id: "AI_AGENT_DEV", title: "Autonomous AI Agent Development", category: "AI_SPEC", difficulty: "Advanced", duration: "20 Weeks", type: "Learning Path", icon: "Brain" },
  { id: "PYTHON_DS", title: "Python for Data Science", category: "TECH_DEV", difficulty: "Intermediate", duration: "10 Weeks", type: "Standalone Course", icon: "BookCopy" },
  { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", category: "LEAD_MGMT_FUND", difficulty: "Beginner", duration: "8 Weeks", type: "Standalone Course", icon: "Users" },
  { id: "GM_L5_CAP", title: "General Management Executive Capstone L5", category: "EXEC_L5", difficulty: "Executive", duration: "24 Weeks", type: "Capstone", icon: "Building" },
];

const categories = [
    { value: "All", label: "All Categories" },
    { value: "CORE_L1", label: "Core Skills L1" },
    { value: "CORE_L2", label: "Core Skills L2" },
    { value: "PROF_L3", label: "Professional Specializations L3" },
    { value: "SENIOR_L4", label: "Senior Leadership L4" },
    { value: "EXEC_L5", label: "Executive Capstone L5" },
    { value: "TECH_DEV", label: "Technology Development" },
    { value: "AI_SPEC", label: "AI Specialization" },
    { value: "LEAD_MGMT_FUND", label: "Leadership & Management Fundamentals" },
];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Professional", "Senior", "Executive"];
const durations = ["All", "1-4 Weeks", "4-8 Weeks", "8-12 Weeks", "12-20 Weeks", "20+ Weeks"];
const courseTypes = ["All", "Standalone Course", "Learning Path", "Specialization", "Module", "Capstone"];


export default function CoursesCatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "All",
    difficulty: "All",
    duration: "All",
    type: "All",
  });

  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.category === "All" || course.category === filters.category) &&
    (filters.difficulty === "All" || course.difficulty === filters.difficulty) &&
    (filters.type === "All" || course.type === filters.type) 
    // Duration filter needs more complex logic if based on ranges. For now, simple match.
  );

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">Course Catalog</h1>
        <p className="text-lg text-muted-foreground">
          Explore our extensive library of courses and learning paths designed to elevate your skills.
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Column */}
        <aside className="lg:w-1/4 xl:w-1/5 space-y-6 p-1">
          <Card className="shadow-md sticky top-20">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Filter className="h-5 w-5"/> Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="search-courses" className="font-semibold">Search</Label>
                <div className="relative mt-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                        id="search-courses" 
                        placeholder="Search courses..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 focus-gradient-outline"
                    />
                </div>
              </div>
              <div>
                <Label htmlFor="category-filter" className="font-semibold">Category</Label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger id="category-filter" className="mt-1 focus-gradient-outline"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="difficulty-filter" className="font-semibold">Difficulty</Label>
                <Select value={filters.difficulty} onValueChange={(value) => handleFilterChange("difficulty", value)}>
                  <SelectTrigger id="difficulty-filter" className="mt-1 focus-gradient-outline"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {difficulties.map(diff => <SelectItem key={diff} value={diff}>{diff}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration-filter" className="font-semibold">Duration</Label>
                 <Select value={filters.duration} onValueChange={(value) => handleFilterChange("duration", value)}>
                  <SelectTrigger id="duration-filter" className="mt-1 focus-gradient-outline"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {durations.map(dur => <SelectItem key={dur} value={dur}>{dur}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="type-filter" className="font-semibold">Course Type</Label>
                 <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
                  <SelectTrigger id="type-filter" className="mt-1 focus-gradient-outline"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {courseTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Courses Column */}
        <main className="lg:w-3/4 xl:w-4/5">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">{filteredCourses.length} courses found</p>
            <div className="flex items-center gap-2">
              <Button variant={viewMode === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('list')} aria-label="List view">
                <List className="h-5 w-5" />
              </Button>
              <Button variant={viewMode === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setViewMode('grid')} aria-label="Grid view">
                <Grid className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Zap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses match your criteria.</p>
              <p className="text-muted-foreground">Try adjusting your search or filters, or search for a new topic to have AI generate a course outline!</p>
            </div>
          )}

          <div className={cn(
            "gap-6",
            viewMode === "grid" ? "grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "space-y-4"
          )}>
            {filteredCourses.map(course => {
              const IconComponent = courseIcons[course.icon as keyof typeof courseIcons] || ImageIcon;
              return (
              <Card 
                key={course.id} 
                className={cn(
                  "shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col",
                  viewMode === "list" && "sm:flex-row"
                )}
              >
                {viewMode === "list" && (
                    <div className="w-full sm:w-20 flex-shrink-0 bg-muted/50 flex items-center justify-center p-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
                        <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                )}
                <div className="flex flex-col flex-1 p-4">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="font-headline text-lg leading-tight hover:text-primary transition-colors">{course.title}</CardTitle>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground mt-1">
                        <span>{course.type}</span>
                        <span>&bull; {course.difficulty}</span>
                        <span>&bull; {course.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className={cn("p-0 flex-1", viewMode === "grid" ? "h-16" : "mt-2")}>
                    <CardDescription className={cn("text-sm", viewMode === "grid" ? "line-clamp-3" : "line-clamp-2")}>
                      Explore {course.title.toLowerCase()}, a {course.type.toLowerCase()} designed for {course.difficulty.toLowerCase()} learners, spanning {course.duration}.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-0 mt-4">
                    <Link href={`/courses/${course.id}`} passHref className="w-full">
                      <Button className="w-full button-animated-gradient">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
              )})}
          </div>
        </main>
      </div>
    </div>
  );
}
