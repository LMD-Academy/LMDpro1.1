// src/lib/course-data.ts
import { BookCopy, Brain, Briefcase, Building, CheckCircle, GraduationCap, Handshake, HelpCircle, Info, Lightbulb, Network, Settings2, ShieldCheck, User, Users as UsersIcon, Zap } from "lucide-react";

export interface SubCourse {
    id: string;
    title: string;
    filePath: string;
    overview: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Senior' | 'Executive';
    length: string;
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
                    { id: "mod_1_1", title: "Introduction to Business & Management Principles", filePath: "EducationalMaterial/Modules/module_1_1_content.md", overview: "Introduces basic business structures, the purpose of business, differentiates management from leadership, outlines key business functions, explains vision/mission/values, PESTLE analysis, and organizational culture basics.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz.md" },
                    { id: "mod_1_2", title: "Fundamentals of Professional Communication", filePath: "EducationalMaterial/Modules/module_1_2_content.md", overview: "Covers types of communication (verbal, non-verbal, written), active listening, basic presentation skills, business email etiquette, and teamwork fundamentals.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_1_2_Quiz.md" },
                    { id: "mod_1_3", title: "Basic Finance & Operations Concepts", filePath: "EducationalMaterial/Modules/module_1_3_content.md", overview: "Explains fundamental financial terms (revenue, cost, profit), basic budgeting, Key Performance Indicators (KPIs), common daily operational tasks, customer focus in operations, and an introduction to process thinking.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_1_3_Quiz.md" },
                    { id: "mod_1_4", title: "Introduction to Sales, Marketing & Customer Service", filePath: "EducationalMaterial/Modules/module_1_4_content.md", overview: "Defines sales and marketing roles, outlines the basic customer journey and sales process steps, introduces market segmentation concepts, and emphasizes customer service excellence and rapport building.", difficulty: "Beginner", length: "3-4 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_1_4_Quiz.md" },
                    { id: "mod_1_5", title: "Technology & Data in the Modern Workplace", filePath: "EducationalMaterial/Modules/module_1_5_content.md", overview: "Highlights the role of technology in business, common business software, basic data concepts (types, privacy, security), and fundamental digital literacy skills.", difficulty: "Beginner", length: "2-3 hours (10-15 pages)", quizPath: "EducationalMaterial/Quizzes/Module_1_5_Quiz.md" },
                ]
            }
        ]
    },
    {
        id: "CORE_L2",
        name: "General Core Studies Level 2",
        overview: "Developing core competencies for effective management and professional interaction at an intermediate level.",
        icon: Briefcase,
        standaloneCourses: [
            {
                id: "AMC_L2",
                title: "Applied Management and Communication L2",
                overview: "Enhancing skills in leadership, communication, financial understanding, problem-solving, and operational efficiency.",
                difficulty: "Intermediate",
                length: "15-20 hours (Approx. 60-80 pages total)",
                assessmentPath: "EducationalMaterial/Assessments/Level_2_AMC_Exam.md",
                subCourses: [
                    { id: "mod_2_1", title: "Effective Management & Leadership Styles", filePath: "EducationalMaterial/Modules/module_2_1_content.md", overview: "Analyzes leadership theories (trait, behavioral, contingency, transformational), situational leadership, motivation techniques, performance management fundamentals, effective delegation, and team cohesion strategies.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_2_1_Quiz.md" },
                    { id: "mod_2_2", title: "Business Communication & Negotiation", filePath: "EducationalMaterial/Modules/module_2_2_content.md", overview: "Develops advanced presentation skills, professional report writing, strategies for managing difficult conversations, core negotiation principles (BATNA, ZOPA), conflict resolution strategies, and cross-cultural communication basics.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_2_2_Quiz.md" },
                    { id: "mod_2_3", title: "Financial Acumen & Operational Efficiency", filePath: "EducationalMaterial/Modules/module_2_3_content.md", overview: "Focuses on interpreting financial statements (Income, Balance Sheet), budgeting processes, analyzing operational KPIs, basic process mapping for improvement, and introductory risk management in operations.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_2_3_Quiz.md" },
                    { id: "mod_2_4", title: "Problem Solving & Decision Making", filePath: "EducationalMaterial/Modules/module_2_4_content.md", overview: "Covers structured problem-solving models, Root Cause Analysis (RCA), decision-making biases, idea generation and solution evaluation techniques, group decision-making, critical thinking, and basic data analysis for decisions.", difficulty: "Intermediate", length: "3-5 hours (15-20 pages)", quizPath: "EducationalMaterial/Quizzes/Module_2_4_Quiz.md" },
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
            { id: "AB_L3", title: "Agile Business Specialization L3", overview: "Deep dive into Agile methodologies, product ownership, and coaching for business agility.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_AB_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "CS_L3", title: "Computer Science Specialization L3", overview: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking.", difficulty: "Professional", length: "25-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CS_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "CY_L3", title: "Cybersecurity Specialization L3", overview: "Foundation of cybersecurity principles, common threats, network security fundamentals, and basic cryptography.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CY_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "DS_L3", title: "Data Science Specialization L3", overview: "Core Python data science libraries, data analysis, visualization, and an introduction to machine learning concepts and algorithms.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "ENT_L3", title: "Entrepreneurship Specialization L3", overview: "Developing entrepreneurial mindset, business modeling, Lean Startup methodology, and startup financial management.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_ENT_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "FA_L3", title: "Finance and Accounting Specialization L3", overview: "Advanced financial statement analysis, budgeting, forecasting, variance analysis, and corporate finance fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_FA_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "GM_L3", title: "General Management and Leadership Specialization L3", overview: "Strategic management, business planning, organizational behavior, change management, and project management fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_GM_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "HR_L3", title: "Human Resources Specialization L3", overview: "Covers talent acquisition, performance management, employee development, employee relations, and labor law basics.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_HR_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "OMS_L3", title: "Online Marketing and Sales Specialization L3", overview: "Digital marketing strategy, content marketing, SEO optimization, social media marketing, CRM systems, and marketing automation.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_OMS_Exam.md", subCourses: [ /* ...subcourses... */ ] },
        ]
    },
    {
        id: "SENIOR_L4",
        name: "Senior Leadership Advanced Topics Level 4",
        overview: "Advanced topics for senior leaders and executives focusing on strategic scaling, transformation, and specialized management.",
        icon: UsersIcon,
        standaloneCourses: [
             { id: "AB_L4", title: "Agile Business Advanced L4", overview: "Mastering scaled Agile frameworks, Lean Portfolio Management, and leading enterprise-wide Agile transformations.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_AB_Exam.md", subCourses: [ /* ...subcourses... */ ] },
             // ... other L4 courses
        ]
    },
    {
        id: "EXEC_L5",
        name: "Executive Leadership Capstone Level 5",
        overview: "Capstone modules for executive-level strategic thinking, leadership, and enterprise-wide transformation across specializations.",
        icon: Building,
        standaloneCourses: [
            { id: "AB_L5_CAP", title: "Agile Business Executive Capstone L5", overview: "Synthesizing principles for enterprise agility, leading large-scale business transformations, and advanced Agile/Lean application beyond IT.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_AB_Assessment.md", subCourses: [ /* ...subcourses... */ ] },
            // ... other L5 courses
        ]
    },
    {
        id: "TECH_DEV",
        name: "Technology Development",
        overview: "Courses on programming, software engineering, data science, and emerging technologies.",
        icon: BookCopy,
        standaloneCourses: [
            { id: "PYTHON_DS", title: "Python for Data Science", overview: "Learn to use Python and its powerful libraries (Pandas, NumPy, Matplotlib, Scikit-learn) for data analysis, visualization, and machine learning.", difficulty: "Intermediate", length: "25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [ /* ...subcourses... */ ] },
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
                length: "40-60 hours (Approx. 160-200 pages total)",
                assessmentPath: "EducationalMaterial/Assessments/AI_AGENT_BUILD_Assessment.md",
                subCourses: [
                    { id: "ai_mod_1", title: "Foundations of Autonomous AI Agents", filePath: "EducationalMaterial/Modules/ai_module_1_foundations_content.md", overview: "Explores the evolution from automation to autonomy, the core architectural pillars of AI agents (LLM Brain, Perception, Planning, Action, Memory), and the LLM's role as a central orchestrator.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_1_Quiz.md" },
                    { id: "ai_mod_2", title: "Designing Agentic Architectures", filePath: "EducationalMaterial/Modules/ai_module_2_architectures_content.md", overview: "Covers essential system components for agentic systems, common architectural patterns (single vs. multi-agent, hierarchical planning), agent frameworks (LangChain, AutoGen), and learns from industry examples like Manus AI and Cline AI.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_2_Quiz.md" },
                    { id: "ai_mod_3", title: "Perception and Understanding the Environment", filePath: "EducationalMaterial/Modules/ai_module_3_perception_content.md", overview: "Details textual perception (user prompts, information extraction), visual perception using Multimodal LLMs (MLLMs) for GUI understanding, and integrating structured data (APIs, databases) for comprehensive environmental awareness.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_3_Quiz.md" },
                    { id: "ai_mod_4", title: "Planning and Reasoning", filePath: "EducationalMaterial/Modules/ai_module_4_planning_content.md", overview: "Focuses on task decomposition for complex goals, advanced planning strategies (Chain of Thought, Tree of Thoughts, ReAct), and practical implementation of LLM-driven planning modules integrated with perception and action.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_4_Quiz.md" },
                    { id: "ai_mod_5", title: "Action Execution and Tool Integration", filePath: "EducationalMaterial/Modules/ai_module_5_action_content.md", overview: "Covers designing effective tool abstraction layers, integrating core tools (web interaction, shell commands, file operations, code execution, API calls), and advanced GUI automation techniques for agents.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_5_Quiz.md" },
                    { id: "ai_mod_6", title: "Memory and Learning in Agents", filePath: "EducationalMaterial/Modules/ai_module_6_memory_content.md", overview: "Explores short-term working memory for task context and LLM window management, long-term memory implementation (Vector DBs, RAG), and mechanisms for agent skill acquisition and refinement through self-improvement.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_6_Quiz.md" },
                    { id: "ai_mod_7", title: "Building and Evaluating Agentic Systems", filePath: "EducationalMaterial/Modules/ai_module_7_evaluation_content.md", overview: "Provides practical guidance on setting up development environments, building a basic agent (e.g., with LangChain), methods for evaluating agent performance (task completion, efficiency, robustness), and responsible AI development practices.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_7_Quiz.md" },
                    { id: "ai_mod_8", title: "Deployment and Future Trends in AI Agents", filePath: "EducationalMaterial/Modules/ai_module_8_deployment_future_content.md", overview: "Discusses strategies for deploying agents (cloud vs. local, containerization), monitoring and maintenance in production, and explores advanced concepts like multi-agent collaboration, embodied AI, continual learning, and human-agent interaction.", difficulty: "Advanced", length: "5-7 hours", quizPath: "EducationalMaterial/Quizzes/Module_8_Quiz.md" }
                ]
            }
        ]
    },
    {
        id: "LEAD_MGMT_FUND",
        name: "Leadership and Management Fundamentals",
        overview: "Essential principles for effective leadership and management in today's dynamic business environment.",
        icon: UsersIcon,
        standaloneCourses: [
             { id: "MGMT_INTRO", title: "Introduction to Modern Management", overview: "Covers core management theories, functions (planning, organizing, leading, controlling), and essential skills for new managers. Explores the transition from individual contributor to manager.", difficulty: "Beginner", length: "12 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_MGMT_Exam.md", subCourses: [ /* ...subcourses... */ ] },
             { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", overview: "Explores various leadership styles, motivational theories, team dynamics, and communication strategies for inspiring and guiding teams.", difficulty: "Beginner", length: "10 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_LEAD_Exam.md", subCourses: [ /* ...subcourses... */ ] },
        ]
    },
    {
        id: "AGILE_PM",
        name: "Agile Business and Project Management",
        overview: "Principles and practices for managing projects and businesses in an agile and adaptive manner.",
        icon: Zap,
        standaloneCourses: [
            { id: "AGILE_SCRUM", title: "Agile Project Management with Scrum", overview: "A comprehensive introduction to the Scrum framework, its roles, events, artifacts, and underlying principles for managing complex projects.", difficulty: "Intermediate", length: "15 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_AGILE_SCRUM_Exam.md", subCourses: [ /* ...subcourses... */ ] },
            { id: "LEAN_THINK", title: "Introduction to Lean Thinking", overview: "Core principles of Lean methodology, focusing on value creation, waste elimination, and continuous improvement.", difficulty: "Intermediate", length: "8 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_LEAN_THINK_Exam.md", subCourses: [ /* ...subcourses... */ ] },
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
