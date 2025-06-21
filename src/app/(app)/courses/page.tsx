
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, Filter, Search, BookOpen } from "lucide-react"; 
import Link from "next/link";
import { getAllCourses, courseData } from "@/lib/course-data";

const allCourses = getAllCourses();

const categories = [{ value: "All", label: "All Categories" }].concat(
    courseData.map(field => ({ value: field.id, label: field.name }))
);
const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Professional", "Senior", "Executive"];
const courseTypes = ["All", "Standalone Course", "Learning Path", "Specialization", "Capstone"];


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
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold">No courses match your criteria.</p>
              <p className="text-muted-foreground">Try adjusting your search or filters, or search for a new topic to have AI generate a course outline!</p>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {filteredCourses.map(course => {
              const IconComponent = course.icon || BookOpen;
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
                      <span>{course.length}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3">{course.overview}</p>
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
