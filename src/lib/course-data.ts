
// src/lib/course-data.ts
import { BookCopy, Brain, Briefcase, Building, CheckCircle, GraduationCap, Handshake, HelpCircle, Info, Lightbulb, Network, Settings2, ShieldCheck, User, Users as UsersIcon, Zap } from "lucide-react";

export interface SubCourse {
    id: string;
    title: string;
    filePath: string;
    overview: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Senior' | 'Executive';
    length: string;
    language: string; // Added language
    quizPath?: string;
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
                length: "15-18 hours (Approx. 60-75 pages total)",
                assessmentPath: "EducationalMaterial/Assessments/Level_1_FBS_Exam.md",
                subCourses: [
                    { id: "mod_1_1", title: "Introduction to Business & Management Principles", filePath: "EducationalMaterial/Modules/module_1_1_content.md", overview: "Introduces basic business structures, the purpose of business, differentiates management from leadership, outlines key business functions, explains vision/mission/values, PESTLE analysis, and organizational culture basics.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz.md" },
                    { id: "mod_1_1_ar", title: "مقدمة في مبادئ الأعمال والإدارة (Arabic)", filePath: "EducationalMaterial/Modules/module_1_1_content_ar.md", overview: "يقدم هياكل الأعمال الأساسية، والغرض من الأعمال، ويميز الإدارة عن القيادة، ويحدد وظائف الأعمال الرئيسية، ويشرح الرؤية / الرسالة / القيم، وتحليل PESTLE، وأساسيات الثقافة التنظيمية.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", language: "Arabic", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz_ar.md" },
                    { id: "mod_1_2", title: "Fundamentals of Professional Communication", filePath: "EducationalMaterial/Modules/module_1_2_content.md", overview: "Covers types of communication (verbal, non-verbal, written), active listening, basic presentation skills, business email etiquette, and teamwork fundamentals.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_2_Quiz.md" },
                    { id: "mod_1_3", title: "Basic Finance & Operations Concepts", filePath: "EducationalMaterial/Modules/module_1_3_content.md", overview: "Explains fundamental financial terms (revenue, cost, profit), basic budgeting, Key Performance Indicators (KPIs), common daily operational tasks, customer focus in operations, and an introduction to process thinking.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_3_Quiz.md" },
                    { id: "mod_1_4", title: "Introduction to Sales, Marketing & Customer Service", filePath: "EducationalMaterial/Modules/module_1_4_content.md", overview: "Defines sales and marketing roles, outlines the basic customer journey and sales process steps, introduces market segmentation concepts, and emphasizes customer service excellence and rapport building.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_4_Quiz.md" },
                    { id: "mod_1_5", title: "Technology & Data in the Modern Workplace", filePath: "EducationalMaterial/Modules/module_1_5_content.md", overview: "Highlights the role of technology in business, common business software, basic data concepts (types, privacy, security), and fundamental digital literacy skills.", difficulty: "Beginner", length: "2-3 hours (10-15 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_5_Quiz.md" },
                ]
            }
        ]
    },
    // ... all other fields and courses would be populated here similarly from course_structure.md ...
    // For brevity, only the changed field is fully shown. The full data structure would be here.
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
                length: "40-60 hours (Approx. 160-200 pages total)",
                assessmentPath: "EducationalMaterial/Assessments/AI_AGENT_BUILD_Assessment.md",
                subCourses: [
                    { id: "ai_mod_1", title: "Foundations of Autonomous AI Agents", filePath: "EducationalMaterial/Modules/ai_module_1_foundations_content.md", overview: "Explores the evolution from automation to autonomy, the core architectural pillars of AI agents (LLM Brain, Perception, Planning, Action, Memory), and the LLM's role as a central orchestrator.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_Quiz.md" },
                    { id: "ai_mod_2", title: "Designing Agentic Architectures", filePath: "EducationalMaterial/Modules/ai_module_2_architectures_content.md", overview: "Covers essential system components for agentic systems, common architectural patterns (single vs. multi-agent, hierarchical planning), agent frameworks (LangChain, AutoGen), and learns from industry examples like Manus AI and Cline AI.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_Quiz.md" },
                    { id: "ai_mod_3", title: "Perception and Understanding the Environment", filePath: "EducationalMaterial/Modules/ai_module_3_perception_content.md", overview: "Details textual perception (user prompts, information extraction), visual perception using Multimodal LLMs (MLLMs) for GUI understanding, and integrating structured data (APIs, databases) for comprehensive environmental awareness.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_3_Quiz.md" },
                    { id: "ai_mod_4", title: "Planning and Reasoning", filePath: "EducationalMaterial/Modules/ai_module_4_planning_content.md", overview: "Focuses on task decomposition for complex goals, advanced planning strategies (Chain of Thought, Tree of Thoughts, ReAct), and practical implementation of LLM-driven planning modules integrated with perception and action.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_Quiz.md" },
                    { id: "ai_mod_5", title: "Action Execution and Tool Integration", filePath: "EducationalMaterial/Modules/ai_module_5_action_content.md", overview: "Covers designing effective tool abstraction layers, integrating core tools (web interaction, shell commands, file operations, code execution, API calls), and advanced GUI automation techniques for agents.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_5_Quiz.md" },
                    { id: "ai_mod_6", title: "Memory and Learning in Agents", filePath: "EducationalMaterial/Modules/ai_module_6_memory_content.md", overview: "Explores short-term working memory for task context and LLM window management, long-term memory implementation (Vector DBs, RAG), and mechanisms for agent skill acquisition and refinement through self-improvement.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_6_Quiz.md" },
                    { id: "ai_mod_7", title: "Building and Evaluating Agentic Systems", filePath: "EducationalMaterial/Modules/ai_module_7_evaluation_content.md", overview: "Provides practical guidance on setting up development environments, building a basic agent (e.g., with LangChain), methods for evaluating agent performance (task completion, efficiency, robustness), and responsible AI development practices.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_7_Quiz.md" },
                    { id: "ai_mod_8", title: "Deployment and Future Trends in AI Agents", filePath: "EducationalMaterial/Modules/ai_module_8_deployment_future_content.md", overview: "Discusses strategies for deploying agents (cloud vs. local, containerization), monitoring and maintenance in production, and explores advanced concepts like multi-agent collaboration, embodied AI, continual learning, and human-agent interaction.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_8_Quiz.md" }
                ]
            }
        ]
    },
];

// Helper function to get all courses for the catalog page
export function getAllCourses() {
    const courses: any[] = [];
    courseData.forEach(field => {
        field.standaloneCourses.forEach(course => {
            courses.push({
                ...course,
                category: field.id,
                icon: field.icon, // Add icon from field
                type: course.difficulty === 'Executive' || course.difficulty === 'Senior' ? 'Capstone' : 'Standalone Course' // Simplified type
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
            };
        }
    }
    return null;
}
