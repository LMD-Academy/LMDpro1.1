
// src/lib/types.ts

import React from 'react';

export interface Lesson {
    id: string;
    title: string;
    length: string; // Changed from duration to length
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
