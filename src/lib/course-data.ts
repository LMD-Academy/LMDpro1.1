
// src/lib/course-data.ts
import { BookCopy, Brain, Briefcase, Building, GraduationCap, Handshake, HelpCircle, Info, Lightbulb, Network, Settings2, ShieldCheck, User, Users as UsersIcon, Zap, BookMarked, Library } from "lucide-react";
import React from 'react';

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
    type: 'reading' | 'video' | 'quiz' | 'activity';
    content: string;
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

export const courseData: Field[] = [
  {
    id: "CORE_L1",
    name: "General Core Studies Level 1",
    overview: "Foundational knowledge applicable across various professional domains, designed for beginners.",
    icon: GraduationCap,
    standaloneCourses: [
      {
        id: "FBS_L1",
        title: "Foundational Business Skills L1",
        overview: "Essential concepts for understanding the business world and developing core professional competencies.",
        difficulty: "Beginner",
        length: "15-18 hours",
        assessmentPath: "EducationalMaterial/Assessments/Level_1_FBS_Exam.md",
        subCourses: [
          { id: "mod_1_1", title: "Introduction to Business & Management Principles", filePath: "EducationalMaterial/Modules/module_1_1_content.md", overview: "Introduces basic business structures, the purpose of business, differentiates management from leadership, outlines key business functions, explains vision/mission/values, PESTLE analysis, and organizational culture basics.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz.md", lessons: [{id: 'l111', title: 'What is a Business?', duration: '15 min', completed: true, type: 'reading', content: 'Content for what is a business'}]},
          { id: "mod_1_1_ar", title: "مقدمة في مبادئ الأعمال والإدارة (Arabic)", filePath: "EducationalMaterial/Modules/module_1_1_content_ar.md", overview: "يقدم هياكل الأعمال الأساسية، والغرض من الأعمال، ويميز الإدارة عن القيادة، ويحدد وظائف الأعمال الرئيسية، ويشرح الرؤية / الرسالة / القيم، وتحليل PESTLE، وأساسيات الثقافة التنظيمية.", difficulty: "Beginner", length: "3-4 hours", language: "Arabic", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz_ar.md", lessons: [{id: 'l111_ar', title: 'ما هو العمل التجاري؟', duration: '15 دقيقة', completed: false, type: 'reading', content: 'محتوى عن ماهية العمل التجاري'}] },
          { id: "mod_1_2", title: "Fundamentals of Professional Communication", filePath: "EducationalMaterial/Modules/module_1_2_content.md", overview: "Covers types of communication (verbal, non-verbal, written), active listening, basic presentation skills, business email etiquette, and teamwork fundamentals.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_2_Quiz.md", lessons: [{id: 'l121', title: 'Types of Communication', duration: '20 min', completed: true, type: 'reading', content: 'Content for types of communication'}] },
          { id: "mod_1_3", title: "Basic Finance & Operations Concepts", filePath: "EducationalMaterial/Modules/module_1_3_content.md", overview: "Explains fundamental financial terms (revenue, cost, profit), basic budgeting, Key Performance Indicators (KPIs), common daily operational tasks, customer focus in operations, and an introduction to process thinking.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_3_Quiz.md", lessons: [{id: 'l131', title: 'Revenue, Cost, Profit', duration: '25 min', completed: false, type: 'reading', content: 'Content for finance concepts'}] },
          { id: "mod_1_4", title: "Introduction to Sales, Marketing & Customer Service", filePath: "EducationalMaterial/Modules/module_1_4_content.md", overview: "Defines sales and marketing roles, outlines the basic customer journey and sales process steps, introduces market segmentation concepts, and emphasizes customer service excellence and rapport building.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_4_Quiz.md", lessons: [{id: 'l141', title: 'The Customer Journey', duration: '20 min', completed: false, type: 'reading', content: 'Content for customer journey'}] },
          { id: "mod_1_5", title: "Technology & Data in the Modern Workplace", filePath: "EducationalMaterial/Modules/module_1_5_content.md", overview: "Highlights the role of technology in business, common business software, basic data concepts (types, privacy, security), and fundamental digital literacy skills.", difficulty: "Beginner", length: "2-3 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_5_Quiz.md", lessons: [{id: 'l151', title: 'Data Privacy Basics', duration: '15 min', completed: false, type: 'reading', content: 'Content for data privacy'}] },
        ]
      }
    ]
  },
  {
    id: "PROF_L3",
    name: "Professional Specializations Level 3",
    overview: "Specialized tracks for in-depth knowledge in specific professional domains.",
    icon: Zap,
    standaloneCourses: [
      { id: "AB_L3", title: "Agile Business Specialization L3", overview: "Deep dive into Agile methodologies, product ownership, and coaching for business agility.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_AB_Exam.md", subCourses: [
        { id: "mod_3_1_ab", title: "Agile Methodologies & Frameworks", filePath: "EducationalMaterial/Modules/module_3_1_AB_content.md", overview: "Explores the Agile Manifesto, Scrum, Kanban, Lean thinking, and an introduction to scaling.", difficulty: "Professional", length: "7-9 hours", language: "English", lessons: [] },
        { id: "mod_3_2_ab", title: "Product Ownership & Backlog Management", filePath: "EducationalMaterial/Modules/module_3_2_AB_content.md", overview: "Covers the Product Owner role, backlog refinement, prioritization methods, and writing user stories.", difficulty: "Professional", length: "6-8 hours", language: "English", lessons: [] },
        { id: "mod_3_3_ab", title: "Agile Coaching & Facilitation", filePath: "EducationalMaterial/Modules/module_3_3_AB_content.md", overview: "Details the Agile Coach role, facilitation techniques, coaching individuals/teams, and conflict resolution.", difficulty: "Professional", length: "7-8 hours", language: "English", lessons: [] },
      ] },
      { id: "CS_L3", title: "Computer Science Specialization L3", overview: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking.", difficulty: "Professional", length: "25-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CS_Exam.md", subCourses: [
        { id: "mod_3_1_cs", title: "Programming Fundamentals (Python Focus)", filePath: "EducationalMaterial/Modules/module_3_1_CS_content.md", overview: "Covers algorithms, Python syntax, data structures, functions, and an introduction to OOP.", difficulty: "Professional", length: "8-10 hours", language: "English", lessons: [] },
        { id: "mod_3_2_cs", title: "Data Structures & Algorithms I", filePath: "EducationalMaterial/Modules/module_3_2_CS_content.md", overview: "Introduces ADTs, Big O notation, linear and non-linear data structures, sorting, searching, and recursion.", difficulty: "Professional", length: "8-10 hours", language: "English", lessons: [] },
        { id: "mod_3_3_cs", title: "OS & Networking Fundamentals", filePath: "EducationalMaterial/Modules/module_3_3_CS_content.md", overview: "Explains OS components, concurrency, network models, protocols, IP addressing, and basic network security.", difficulty: "Professional", length: "9-10 hours", language: "English", lessons: [] },
      ] },
    ]
  },
  {
    id: "AI_SPEC",
    name: "AI Specialization",
    overview: "In-depth courses on Artificial Intelligence, Machine Learning, and the development of AI Agentic Systems.",
    icon: Brain,
    standaloneCourses: [
        {
            id: "AI_AGENT_DEV",
            title: "Autonomous AI Agent Development",
            overview: "A comprehensive program to design, build, evaluate, and deploy autonomous AI agents capable of complex reasoning, planning, and action.",
            difficulty: "Advanced",
            length: "40-60 hours",
            assessmentPath: "EducationalMaterial/Assessments/AI_AGENT_BUILD_Assessment.md",
            subCourses: [
                { id: "ai_module_1", title: "Foundations of Autonomous AI Agents", filePath: "EducationalMaterial/Modules/ai_module_1_foundations_content.md", overview: "Explores the evolution from automation to autonomy, the core architectural pillars of AI agents, and the LLM's role as a central orchestrator.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_Quiz.md", lessons: [{id: "ai1_1", title: "Lesson 1.1", duration: "15 min", completed: true, type: "reading", content: "..."}] },
                { id: "ai_module_2", title: "Designing Agentic Architectures", filePath: "EducationalMaterial/Modules/ai_module_2_architectures_content.md", overview: "Covers essential system components, architectural patterns (single vs. multi-agent), agent frameworks (LangChain), and learns from industry examples.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_Quiz.md", lessons: [{id: "ai2_1", title: "Lesson 2.1", duration: "20 min", completed: false, type: "video", content: "..."}] },
                { id: "ai_module_3", title: "Perception and Understanding the Environment", filePath: "EducationalMaterial/Modules/ai_module_3_perception_content.md", overview: "Details textual perception, visual perception using MLLMs for GUI understanding, and integrating structured data.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_3_Quiz.md", lessons: [] },
                { id: "ai_module_4", title: "Planning and Reasoning", filePath: "EducationalMaterial/Modules/ai_module_4_planning_content.md", overview: "Focuses on task decomposition, advanced planning strategies (CoT, ReAct), and implementing LLM-driven planning modules.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_Quiz.md", lessons: [] },
                { id: "ai_module_5", title: "Action Execution and Tool Integration", filePath: "EducationalMaterial/Modules/ai_module_5_action_content.md", overview: "Covers tool abstraction layers, integrating core tools (web, shell, file ops), and advanced GUI automation.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_5_Quiz.md", lessons: [] },
                { id: "ai_module_6", title: "Memory and Learning in Agents", filePath: "EducationalMaterial/Modules/ai_module_6_memory_content.md", overview: "Explores short-term memory, long-term memory (Vector DBs, RAG), and mechanisms for agent skill acquisition.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_6_Quiz.md", lessons: [] },
                { id: "ai_module_7", title: "Building and Evaluating Agentic Systems", filePath: "EducationalMaterial/Modules/ai_module_7_evaluation_content.md", overview: "Provides practical guidance on building, evaluating agent performance (task completion, efficiency), and responsible AI practices.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_7_Quiz.md", lessons: [] },
                { id: "ai_module_8", title: "Deployment and Future Trends in AI Agents", filePath: "EducationalMaterial/Modules/ai_module_8_deployment_future_content.md", overview: "Discusses deployment strategies, monitoring, and future trends like multi-agent collaboration and embodied AI.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_8_Quiz.md", lessons: [] },
            ]
        }
    ]
  }
];


// Helper function to get all courses for the catalog page
export function getAllCourses() {
    const courses: any[] = [];
    courseData.forEach(field => {
        field.standaloneCourses.forEach(course => {
            courses.push({
                ...course,
                category: field.name, // Use field name for display
                fieldId: field.id, // Keep fieldId for filtering
                icon: field.icon, 
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
            return {
                ...course,
                fieldId: field.id,
                fieldName: field.name,
                category: field.name,
                instructor: "Dr. Alex Turing & LMDpro AI", // Example static data
                instructorImage: "",
                instructorTitle: "Lead AI Researcher",
                rating: 4.9,
                reviews: 2850,
                students: 7500,
                lastUpdated: "August 2024",
                language: "English",
                level: course.difficulty,
                progress: Math.floor(Math.random() * (80 - 20 + 1)) + 20, // Random progress for demo
                skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"], // Example static data
            };
        }
    }
    return null;
}
