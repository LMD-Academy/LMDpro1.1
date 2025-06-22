
// src/lib/course-data.ts
import { BookCopy, Brain, Briefcase, Building, GraduationCap, Handshake, HelpCircle, Info, Lightbulb, Network, Settings2, ShieldCheck, User, Users as UsersIcon, Zap, BookMarked, Library, Film } from "lucide-react";
import React from 'react';

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
    type: 'reading' | 'video' | 'quiz' | 'activity';
    content: string;
    overview?: string;
}

export interface SubCourse {
    id: string;
    title: string;
    filePath: string;
    overview: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Senior' | 'Executive';
    length: string;
    language: string;
    quizPath?: string;
    lessons?: Lesson[];
}

export interface StandaloneCourse {
    id: string;
    title: string;
    overview: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Senior' | 'Executive';
    length: string;
    assessmentPath: string;
    subCourses: SubCourse[];
}

export interface Field {
    id: string;
    name: string;
    overview: string;
    icon: React.ElementType;
    standaloneCourses: StandaloneCourse[];
}

// Dynamically import all markdown files from the EducationalMaterial/Modules directory
const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().map(r);
// @ts-ignore
const markdownFiles = importAll(require.context('!!raw-loader!../../EducationalMaterial/Modules', true, /\.md$/));
// @ts-ignore
const markdownFileNames = importAll(require.context('../../EducationalMaterial/Modules', true, /\.md$/)).map(name => name.replace('./', ''));

const contentMap: { [key: string]: string } = {};
markdownFileNames.forEach((name, index) => {
    contentMap[name] = markdownFiles[index].default;
});

// A robust function to parse module content into lessons
const parseContentToLessons = (content: string, moduleId: string, moduleTitle: string): Lesson[] => {
    if (!content || !content.trim()) {
        return [{
            id: `l_${moduleId}_1`,
            title: moduleTitle,
            duration: '5 min',
            completed: false,
            type: 'reading',
            content: 'Content for this lesson is currently being developed.',
            overview: 'This lesson is a placeholder.'
        }];
    }

    const lessons: Lesson[] = [];
    // Split by H1 or H2 headings
    const sections = content.split(/^(#|##)\s(.+)/m).filter(Boolean);

    if (sections.length < 3) {
        lessons.push({
            id: `l_${moduleId}_1`,
            title: moduleTitle,
            duration: `${Math.max(5, Math.round(content.split(' ').length / 150) * 5)} min`,
            completed: false,
            type: 'reading',
            content: content.trim(),
            overview: `An introduction to ${moduleTitle}.`
        });
        return lessons;
    }

    let lessonCounter = 1;
    for (let i = 0; i < sections.length; i += 3) {
        const title = sections[i + 1].trim();
        const lessonContent = sections[i + 2].trim();
        if (title && lessonContent) {
            lessons.push({
                id: `l_${moduleId}_${lessonCounter++}`,
                title: title,
                duration: `${Math.max(5, Math.round(lessonContent.split(' ').length / 150) * 5)} min`,
                completed: false,
                type: 'reading',
                content: lessonContent,
                overview: `An exploration of ${title}.`
            });
        }
    }

    if(lessons.length === 0){
         lessons.push({
            id: `l_${moduleId}_1`,
            title: moduleTitle,
            duration: '5 min',
            completed: false,
            type: 'reading',
            content: 'Content for this lesson is being finalized.',
            overview: 'This lesson is a placeholder.'
        });
    }

    return lessons;
};

// Original course data structure
import { course_data_structure } from './course_structure_data';

const populatedData: Field[] = course_data_structure.map(field => ({
    ...field,
    standaloneCourses: field.standaloneCourses.map(course => ({
        ...course,
        subCourses: course.subCourses.map(sc => {
            const fileName = sc.filePath.split('/').pop() || '';
            const content = contentMap[fileName] || `Content for ${sc.title} is not available yet. Please check back later.`;
            return {
                ...sc,
                lessons: parseContentToLessons(content, sc.id, sc.title),
            };
        })
    }))
}));


export const courseData: Field[] = populatedData;

// Helper function to get all courses for the catalog page
export function getAllCourses() {
    const courses: any[] = [];
    courseData.forEach(field => {
        field.standaloneCourses.forEach(course => {
            const courseIcon = (field.id === 'AI_SPEC' || field.id === 'TECH_DEV') ? Brain : (field.id === 'LEAD_MGMT_FUND' || field.id === 'CORE_L1' || field.id === 'CORE_L2') ? GraduationCap : UsersIcon;
            courses.push({
                ...course,
                category: field.name,
                fieldId: field.id,
                icon: courseIcon, 
                type: course.difficulty === 'Executive' || course.difficulty === 'Senior' 
                      ? (course.id.includes('_CAP') ? 'Capstone' : 'Specialization') 
                      : (course.subCourses.length > 1 ? 'Standalone Course' : 'Module')
            });
        });
    });
    return courses;
}

// Helper function to get a specific course by ID
export function getCourseById(id: string) {
    for (const field of courseData) {
        const course = field.standaloneCourses.find(c => c.id === id);
        if (course) {
            // Calculate progress based on completed lessons
            const allLessons = course.subCourses.flatMap(sc => sc.lessons || []);
            const completedLessons = allLessons.filter(l => l.completed).length;
            const progress = allLessons.length > 0 ? Math.round((completedLessons / allLessons.length) * 100) : 0;

            return {
                ...course,
                fieldId: field.id,
                fieldName: field.name,
                category: field.name,
                instructor: "Dr. Alex Turing & LMDpro AI",
                instructorImage: "https://placehold.co/100x100.png",
                instructorTitle: "Lead AI Researcher",
                rating: 4.9,
                reviews: 2850,
                students: 7500,
                lastUpdated: "August 2024",
                progress: progress,
                skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"], 
            };
        }
    }
    return null;
}
