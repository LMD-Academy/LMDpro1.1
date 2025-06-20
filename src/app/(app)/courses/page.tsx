"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Filter, List, Grid, Search, GraduationCap, BookCopy, ShieldCheck, Zap, Users, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const allCourses = [
  { id: "1", title: "Executive Leadership Development", category: "Business", difficulty: "Advanced", duration: "12 Weeks", type: "Learning Path", icon: GraduationCap, imageHint: "leadership team" },
  { id: "2", title: "AI for Business Professionals", category: "Technology", difficulty: "Intermediate", duration: "8 Weeks", type: "Course", icon: Zap, imageHint: "AI business" },
  { id: "3", title: "Full-Stack Web Development Bootcamp", category: "Technology", difficulty: "Beginner to Advanced", duration: "24 Weeks", type: "Learning Path", icon: Zap, imageHint: "web development" },
  { id: "4", title: "Strategic Communication for Leaders", category: "Business", difficulty: "Intermediate", duration: "6 Weeks", type: "Course", icon: GraduationCap, imageHint: "communication strategy" },
  { id: "5", title: "Introduction to UX Design", category: "Design", difficulty: "Beginner", duration: "4 Weeks", type: "Course", icon: Zap, imageHint: "UX design app" },
  { id: "6", title: "Data Analysis with Python", category: "Technology", difficulty: "Intermediate", duration: "10 Weeks", type: "Course", icon: Zap, imageHint: "python data" },
];

const categories = ["All", "Business", "Technology", "Design", "Personal Development"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const durations = ["All", "1-4 Weeks", "4-8 Weeks", "8-12 Weeks", "12+ Weeks"];

export default function CoursesCatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "All",
    difficulty: "All",
    duration: "All",
  });

  // Dummy filter logic
  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.category === "All" || course.category === filters.category) &&
    (filters.difficulty === "All" || course.difficulty === filters.difficulty)
    // Add duration filter logic if needed
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
        <aside className="lg:w-1/4 space-y-6 p-1">
          <Card className="shadow-md">
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
                        className="pl-9"
                    />
                </div>
              </div>
              <div>
                <Label htmlFor="category-filter" className="font-semibold">Category</Label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange("category", value)}>
                  <SelectTrigger id="category-filter" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="difficulty-filter" className="font-semibold">Difficulty</Label>
                <Select value={filters.difficulty} onValueChange={(value) => handleFilterChange("difficulty", value)}>
                  <SelectTrigger id="difficulty-filter" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {difficulties.map(diff => <SelectItem key={diff} value={diff}>{diff}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration-filter" className="font-semibold">Duration</Label>
                 <Select value={filters.duration} onValueChange={(value) => handleFilterChange("duration", value)}>
                  <SelectTrigger id="duration-filter" className="mt-1"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {durations.map(dur => <SelectItem key={dur} value={dur}>{dur}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              {/* More filters can be added like Content Type (Course, Learning Path) */}
            </CardContent>
          </Card>
        </aside>

        {/* Courses Column */}
        <main className="lg:w-3/4">
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
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}

          <div className={cn(
            "gap-6",
            viewMode === "grid" ? "grid md:grid-cols-2 xl:grid-cols-3" : "space-y-4"
          )}>
            {filteredCourses.map(course => (
              <Card 
                key={course.id} 
                className={cn(
                  "shadow-lg hover:shadow-xl transition-shadow duration-300",
                  viewMode === "list" && "flex flex-col sm:flex-row overflow-hidden"
                )}
              >
                <Image 
                  src={`https://placehold.co/600x400.png`} 
                  alt={course.title} 
                  width={viewMode === "grid" ? 600 : 200} 
                  height={viewMode === "grid" ? 400 : 150}
                  className={cn(
                    "object-cover",
                    viewMode === "grid" ? "w-full h-48" : "w-full sm:w-48 h-48 sm:h-auto"
                  )}
                  data-ai-hint={course.imageHint}
                />
                <div className="flex flex-col flex-1">
                  <CardHeader className={cn(viewMode === "list" && "sm:py-4 sm:pr-4")}>
                    <div className="flex items-center gap-2 mb-1">
                       <course.icon className="h-5 w-5 text-primary shrink-0" />
                       <CardTitle className="font-headline text-lg leading-tight">{course.title}</CardTitle>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span>{course.category}</span>
                        <span>&bull; {course.difficulty}</span>
                        <span>&bull; {course.duration}</span>
                    </div>
                    <CardDescription className={cn("text-sm mt-2", viewMode === "grid" ? "h-12 overflow-hidden" : "line-clamp-2")}>
                      A comprehensive {course.type.toLowerCase()} to master {course.title.toLowerCase()}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={cn("flex-1 flex items-end", viewMode === "list" && "sm:pb-4 sm:pr-4")}>
                    <Link href={`/courses/${course.id}`} passHref className="w-full">
                      <Button className="w-full button-animated-gradient mt-2">
                        View {course.type} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          {/* Pagination could be added here */}
        </main>
      </div>
    </div>
  );
}
