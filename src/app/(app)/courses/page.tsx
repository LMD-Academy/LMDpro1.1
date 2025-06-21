
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, Filter, Search, GraduationCap, BookCopy, ShieldCheck, Zap, Users, Building, ImageIcon, Video, FileText as FileTextIcon, Library, BookMarked, Lightbulb, Network, Info, Brain, Briefcase, ClipboardList, Settings2, HelpCircle, ScrollText } from "lucide-react"; 
import Link from "next/link";
import { cn } from "@/lib/utils";

const courseIcons: { [key: string]: React.ElementType } = {
    GraduationCap, BookCopy, ShieldCheck, Zap, Users, Building, Video, FileTextIcon, Library, BookMarked, Lightbulb, Network, Info, Brain, Briefcase, ClipboardList, Settings2, HelpCircle, ScrollText, ImageIcon,
    // Adding fallbacks or default icons if needed
    default: BookOpen,
};

const allCourses = [
  { id: "FBS_L1", title: "Foundational Business Skills L1", category: "CORE_L1", difficulty: "Beginner", duration: "15-18 hours", type: "Standalone Course", icon: "GraduationCap", description: "Essential concepts for understanding the business world and developing core professional competencies." },
  { id: "AMC_L2", title: "Applied Management & Communication L2", category: "CORE_L2", difficulty: "Intermediate", duration: "15-20 hours", type: "Standalone Course", icon: "Briefcase", description: "Enhancing skills in leadership, communication, financial understanding, problem-solving, and operational efficiency." },
  { id: "AB_L3", title: "Agile Business Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "20-25 hours", type: "Specialization", icon: "Zap", description: "Deep dive into Agile methodologies, product ownership, and coaching for business agility." },
  { id: "CS_L3", title: "Computer Science Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "25-30 hours", type: "Specialization", icon: "Network", description: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking." },
  { id: "AI_AGENT_DEV", title: "Autonomous AI Agent Development", category: "AI_SPEC", difficulty: "Advanced", duration: "40-60 hours", type: "Learning Path", icon: "Brain", description: "A comprehensive program to design, build, evaluate, and deploy autonomous AI agents." },
  { id: "PYTHON_DS", title: "Python for Data Science", category: "TECH_DEV", difficulty: "Intermediate", duration: "25 hours", type: "Standalone Course", icon: "BookCopy", description: "Learn to use Python and its powerful libraries (Pandas, NumPy, Matplotlib, Scikit-learn) for data analysis and machine learning." },
  { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", category: "LEAD_MGMT_FUND", difficulty: "Beginner", duration: "10 hours", type: "Standalone Course", icon: "Users", description: "Explores various leadership styles, motivational theories, team dynamics, and communication strategies for inspiring and guiding teams." },
  { id: "GM_L5_CAP", title: "General Management Executive Capstone L5", category: "EXEC_L5", difficulty: "Executive", duration: "20-30 hours", type: "Capstone", icon: "Building", description: "Leading global organizations and mastering C-suite strategy, large-scale transformation, and executive-level governance." },
  { id: "CY_L3", title: "Cybersecurity Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "20-25 hours", type: "Specialization", icon: "ShieldCheck", description: "Foundation of cybersecurity principles, common threats, network security fundamentals, and basic cryptography." },
  { id: "OMS_L3", title: "Online Marketing & Sales Specialization L3", category: "PROF_L3", difficulty: "Professional", duration: "23-28 hours", type: "Specialization", icon: "Zap", description: "Digital marketing strategy, content marketing, SEO optimization, CRM systems, and marketing automation." },
];

const categories = [
    { value: "All", label: "All Categories" },
    { value: "CORE_L1", label: "Core Skills L1" },
    { value: "CORE_L2", label: "Core Skills L2" },
    { value: "PROF_L3", label: "Professional Specializations" },
    { value: "SENIOR_L4", label: "Senior Leadership" },
    { value: "EXEC_L5", label: "Executive Capstone" },
    { value: "TECH_DEV", label: "Technology Development" },
    { value: "AI_SPEC", label: "AI Specialization" },
    { value: "LEAD_MGMT_FUND", label: "Leadership & Management" },
];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Professional", "Senior", "Executive"];
const courseTypes = ["All", "Standalone Course", "Learning Path", "Specialization", "Module", "Capstone"];


export default function CoursesCatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "All",
    difficulty: "All",
    type: "All",
  });

  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.category === "All" || course.category === filters.category) &&
    (filters.difficulty === "All" || course.difficulty === filters.difficulty) &&
    (filters.type === "All" || course.type === filters.type) 
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
          <Card className="shadow-md sticky top-20 rounded-xl">
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
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Zap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses match your criteria.</p>
              <p className="text-muted-foreground">Try adjusting your search or filters, or search for a new topic to have AI generate a course outline!</p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {filteredCourses.map(course => {
              const IconComponent = courseIcons[course.icon as keyof typeof courseIcons] || BookOpen;
              return (
                <Card key={course.id} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
                  <CardHeader className="relative p-4 pb-2">
                    <div className="absolute top-4 right-4 bg-primary/10 p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-lg leading-tight pr-12">{course.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground pt-1">
                      <span>{course.type}</span>
                      <span className="text-muted-foreground/50">&bull;</span>
                      <span>{course.difficulty}</span>
                      <span className="text-muted-foreground/50">&bull;</span>
                      <span>{course.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3">{course.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 mt-auto">
                    <Link href={`/courses/${course.id}`} passHref className="w-full">
                      <Button className="w-full button-animated-gradient">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )})}
          </div>
        </main>
      </div>
    </div>
  );
}
