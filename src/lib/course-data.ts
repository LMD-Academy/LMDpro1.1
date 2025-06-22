
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

// Content Imports
import module_1_1_content from '!!raw-loader!../../EducationalMaterial/Modules/module_1_1_content.md';
import module_1_1_content_ar from '!!raw-loader!../../EducationalMaterial/Modules/module_1_1_content_ar.md';
import module_1_2_content from '!!raw-loader!../../EducationalMaterial/Modules/module_1_2_content.md';
import module_1_3_content from '!!raw-loader!../../EducationalMaterial/Modules/module_1_3_content.md';
import module_1_4_content from '!!raw-loader!../../EducationalMaterial/Modules/module_1_4_content.md';
import module_1_5_content from '!!raw-loader!../../EducationalMaterial/Modules/module_1_5_content.md';

import module_2_1_content from '!!raw-loader!../../EducationalMaterial/Modules/module_2_1_content.md';
import module_2_2_content from '!!raw-loader!../../EducationalMaterial/Modules/module_2_2_content.md';
import module_2_3_content from '!!raw-loader!../../EducationalMaterial/Modules/module_2_3_content.md';
import module_2_4_content from '!!raw-loader!../../EducationalMaterial/Modules/module_2_4_content.md';

import module_3_1_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_AB_content.md';
import module_3_2_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_AB_content.md';
import module_3_3_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_AB_content.md';

import module_3_1_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_CS_content.md';
import module_3_2_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_CS_content.md';
import module_3_3_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_CS_content.md';

import module_3_1_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_CY_content.md';
import module_3_2_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_CY_content.md';
import module_3_3_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_CY_content.md';

import module_3_1_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_DS_content.md';
import module_3_2_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_DS_content.md';
import module_3_3_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_DS_content.md';

import module_3_1_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_ENT_content.md';
import module_3_2_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_ENT_content.md';
import module_3_3_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_ENT_content.md';

import module_3_1_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_FA_content.md';
import module_3_2_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_FA_content.md';
import module_3_3_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_FA_content.md';

import module_3_1_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_GM_content.md';
import module_3_2_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_GM_content.md';
import module_3_3_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_GM_content.md';

import module_3_1_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_HR_content.md';
import module_3_2_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_HR_content.md';
import module_3_3_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_HR_content.md';

import module_3_1_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_1_OMS_content.md';
import module_3_2_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_2_OMS_content.md';
import module_3_3_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_3_3_OMS_content.md';

import module_4_1_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_AB_content.md';
import module_4_2_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_AB_content.md';

import module_4_1_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_CS_content.md';
import module_4_2_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_CS_content.md';

import module_4_1_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_CY_content.md';
import module_4_2_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_CY_content.md';

import module_4_1_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_DS_content.md';
import module_4_2_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_DS_content.md';

import module_4_1_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_ENT_content.md';
import module_4_2_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_ENT_content.md';

import module_4_1_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_FA_content.md';
import module_4_2_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_FA_content.md';

import module_4_1_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_GM_content.md';
import module_4_2_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_GM_content.md';

import module_4_1_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_HR_content.md';
import module_4_2_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_HR_content.md';

import module_4_1_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_1_OMS_content.md';
import module_4_2_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_4_2_OMS_content.md';

import module_5_1_AB_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_AB_content.md';
import module_5_1_CS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_CS_content.md';
import module_5_1_CY_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_CY_content.md';
import module_5_1_DS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_DS_content.md';
import module_5_1_ENT_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_ENT_content.md';
import module_5_1_FA_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_FA_content.md';
import module_5_1_GM_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_GM_content.md';
import module_5_1_HR_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_HR_content.md';
import module_5_1_OMS_content from '!!raw-loader!../../EducationalMaterial/Modules/module_5_1_OMS_content.md';

import python_ds_numpy_content from '!!raw-loader!../../EducationalMaterial/Modules/python_ds_numpy.md';
import python_ds_pandas_content from '!!raw-loader!../../EducationalMaterial/Modules/python_ds_pandas.md';
import python_ds_viz_content from '!!raw-loader!../../EducationalMaterial/Modules/python_ds_viz.md';
import python_ds_sklearn_content from '!!raw-loader!../../EducationalMaterial/Modules/python_ds_sklearn.md';

import ai_module_1_foundations_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_1_foundations_content.md';
import ai_module_2_architectures_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_2_architectures_content.md';
import ai_module_3_perception_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_3_perception_content.md';
import ai_module_4_planning_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_4_planning_content.md';
import ai_module_5_action_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_5_action_content.md';
import ai_module_6_memory_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_6_memory_content.md';
import ai_module_7_evaluation_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_7_evaluation_content.md';
import ai_module_8_deployment_future_content from '!!raw-loader!../../EducationalMaterial/Modules/ai_module_8_deployment_future_content.md';

import mgmt_intro_evolution_content from '!!raw-loader!../../EducationalMaterial/Modules/mgmt_intro_evolution.md';
import mgmt_intro_functions_content from '!!raw-loader!../../EducationalMaterial/Modules/mgmt_intro_functions.md';
import mgmt_intro_skills_content from '!!raw-loader!../../EducationalMaterial/Modules/mgmt_intro_skills.md';

import lead_found_styles_content from '!!raw-loader!../../EducationalMaterial/Modules/lead_found_styles.md';
import lead_found_motivation_content from '!!raw-loader!../../EducationalMaterial/Modules/lead_found_motivation.md';
import lead_found_comm_content from '!!raw-loader!../../EducationalMaterial/Modules/lead_found_comm.md';

import agile_scrum_manifesto_content from '!!raw-loader!../../EducationalMaterial/Modules/agile_scrum_manifesto.md';
import agile_scrum_roles_content from '!!raw-loader!../../EducationalMaterial/Modules/agile_scrum_roles.md';
import agile_scrum_events_artifacts_content from '!!raw-loader!../../EducationalMaterial/Modules/agile_scrum_events_artifacts.md';
import agile_scrum_user_stories_content from '!!raw-loader!../../EducationalMaterial/Modules/agile_scrum_user_stories.md';

import lean_think_principles_content from '!!raw-loader!../../EducationalMaterial/Modules/lean_think_principles.md';
import lean_think_waste_content from '!!raw-loader!../../EducationalMaterial/Modules/lean_think_waste.md';

const contentMap: { [key: string]: string } = {
    'module_1_1_content.md': module_1_1_content,
    'module_1_1_content_ar.md': module_1_1_content_ar,
    'module_1_2_content.md': module_1_2_content,
    'module_1_3_content.md': module_1_3_content,
    'module_1_4_content.md': module_1_4_content,
    'module_1_5_content.md': module_1_5_content,
    'module_2_1_content.md': module_2_1_content,
    'module_2_2_content.md': module_2_2_content,
    'module_2_3_content.md': module_2_3_content,
    'module_2_4_content.md': module_2_4_content,
    'module_3_1_AB_content.md': module_3_1_AB_content,
    'module_3_2_AB_content.md': module_3_2_AB_content,
    'module_3_3_AB_content.md': module_3_3_AB_content,
    'module_3_1_CS_content.md': module_3_1_CS_content,
    'module_3_2_CS_content.md': module_3_2_CS_content,
    'module_3_3_CS_content.md': module_3_3_CS_content,
    'module_3_1_CY_content.md': module_3_1_CY_content,
    'module_3_2_CY_content.md': module_3_2_CY_content,
    'module_3_3_CY_content.md': module_3_3_CY_content,
    'module_3_1_DS_content.md': module_3_1_DS_content,
    'module_3_2_DS_content.md': module_3_2_DS_content,
    'module_3_3_DS_content.md': module_3_3_DS_content,
    'module_3_1_ENT_content.md': module_3_1_ENT_content,
    'module_3_2_ENT_content.md': module_3_2_ENT_content,
    'module_3_3_ENT_content.md': module_3_3_ENT_content,
    'module_3_1_FA_content.md': module_3_1_FA_content,
    'module_3_2_FA_content.md': module_3_2_FA_content,
    'module_3_3_FA_content.md': module_3_3_FA_content,
    'module_3_1_GM_content.md': module_3_1_GM_content,
    'module_3_2_GM_content.md': module_3_2_GM_content,
    'module_3_3_GM_content.md': module_3_3_GM_content,
    'module_3_1_HR_content.md': module_3_1_HR_content,
    'module_3_2_HR_content.md': module_3_2_HR_content,
    'module_3_3_HR_content.md': module_3_3_HR_content,
    'module_3_1_OMS_content.md': module_3_1_OMS_content,
    'module_3_2_OMS_content.md': module_3_2_OMS_content,
    'module_3_3_OMS_content.md': module_3_3_OMS_content,
    'module_4_1_AB_content.md': module_4_1_AB_content,
    'module_4_2_AB_content.md': module_4_2_AB_content,
    'module_4_1_CS_content.md': module_4_1_CS_content,
    'module_4_2_CS_content.md': module_4_2_CS_content,
    'module_4_1_CY_content.md': module_4_1_CY_content,
    'module_4_2_CY_content.md': module_4_2_CY_content,
    'module_4_1_DS_content.md': module_4_1_DS_content,
    'module_4_2_DS_content.md': module_4_2_DS_content,
    'module_4_1_ENT_content.md': module_4_1_ENT_content,
    'module_4_2_ENT_content.md': module_4_2_ENT_content,
    'module_4_1_FA_content.md': module_4_1_FA_content,
    'module_4_2_FA_content.md': module_4_2_FA_content,
    'module_4_1_GM_content.md': module_4_1_GM_content,
    'module_4_2_GM_content.md': module_4_2_GM_content,
    'module_4_1_HR_content.md': module_4_1_HR_content,
    'module_4_2_HR_content.md': module_4_2_HR_content,
    'module_4_1_OMS_content.md': module_4_1_OMS_content,
    'module_4_2_OMS_content.md': module_4_2_OMS_content,
    'module_5_1_AB_content.md': module_5_1_AB_content,
    'module_5_1_CS_content.md': module_5_1_CS_content,
    'module_5_1_CY_content.md': module_5_1_CY_content,
    'module_5_1_DS_content.md': module_5_1_DS_content,
    'module_5_1_ENT_content.md': module_5_1_ENT_content,
    'module_5_1_FA_content.md': module_5_1_FA_content,
    'module_5_1_GM_content.md': module_5_1_GM_content,
    'module_5_1_HR_content.md': module_5_1_HR_content,
    'module_5_1_OMS_content.md': module_5_1_OMS_content,
    'python_ds_numpy.md': python_ds_numpy_content,
    'python_ds_pandas.md': python_ds_pandas_content,
    'python_ds_viz.md': python_ds_viz_content,
    'python_ds_sklearn.md': python_ds_sklearn_content,
    'ai_module_1_foundations_content.md': ai_module_1_foundations_content,
    'ai_module_2_architectures_content.md': ai_module_2_architectures_content,
    'ai_module_3_perception_content.md': ai_module_3_perception_content,
    'ai_module_4_planning_content.md': ai_module_4_planning_content,
    'ai_module_5_action_content.md': ai_module_5_action_content,
    'ai_module_6_memory_content.md': ai_module_6_memory_content,
    'ai_module_7_evaluation_content.md': ai_module_7_evaluation_content,
    'ai_module_8_deployment_future_content.md': ai_module_8_deployment_future_content,
    'mgmt_intro_evolution.md': mgmt_intro_evolution_content,
    'mgmt_intro_functions.md': mgmt_intro_functions_content,
    'mgmt_intro_skills.md': mgmt_intro_skills_content,
    'lead_found_styles.md': lead_found_styles_content,
    'lead_found_motivation.md': lead_found_motivation_content,
    'lead_found_comm.md': lead_found_comm_content,
    'agile_scrum_manifesto.md': agile_scrum_manifesto_content,
    'agile_scrum_roles.md': agile_scrum_roles_content,
    'agile_scrum_events_artifacts.md': agile_scrum_events_artifacts_content,
    'agile_scrum_user_stories.md': agile_scrum_user_stories_content,
    'lean_think_principles.md': lean_think_principles_content,
    'lean_think_waste.md': lean_think_waste_content,
};

const initialCourseData: Field[] = [
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
          { id: "mod_1_1", title: "Introduction to Business & Management Principles", filePath: "EducationalMaterial/Modules/module_1_1_content.md", overview: "Introduces basic business structures, the purpose of business, differentiates management from leadership, outlines key business functions, explains vision/mission/values, PESTLE analysis, and organizational culture basics.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz.md"},
          { id: "mod_1_1_ar", title: "مقدمة في مبادئ الأعمال والإدارة (Arabic)", filePath: "EducationalMaterial/Modules/module_1_1_content_ar.md", overview: "يقدم هياكل الأعمال الأساسية، والغرض من الأعمال، ويميز الإدارة عن القيادة، ويحدد وظائف الأعمال الرئيسية، ويشرح الرؤية / الرسالة / القيم، وتحليل PESTLE، وأساسيات الثقافة التنظيمية.", difficulty: "Beginner", length: "3-4 hours", language: "Arabic", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz_ar.md" },
          { id: "mod_1_2", title: "Fundamentals of Professional Communication", filePath: "EducationalMaterial/Modules/module_1_2_content.md", overview: "Covers types of communication (verbal, non-verbal, written), active listening, basic presentation skills, business email etiquette, and teamwork fundamentals.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_2_Quiz.md" },
          { id: "mod_1_3", title: "Basic Finance & Operations Concepts", filePath: "EducationalMaterial/Modules/module_1_3_content.md", overview: "Explains fundamental financial terms (revenue, cost, profit), basic budgeting, Key Performance Indicators (KPIs), common daily operational tasks, customer focus in operations, and an introduction to process thinking.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_3_Quiz.md" },
          { id: "mod_1_4", title: "Introduction to Sales, Marketing & Customer Service", filePath: "EducationalMaterial/Modules/module_1_4_content.md", overview: "Defines sales and marketing roles, outlines the basic customer journey and sales process steps, introduces market segmentation concepts, and emphasizes customer service excellence and rapport building.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_4_Quiz.md" },
          { id: "mod_1_5", title: "Technology & Data in the Modern Workplace", filePath: "EducationalMaterial/Modules/module_1_5_content.md", overview: "Highlights the role of technology in business, common business software, basic data concepts (types, privacy, security), and fundamental digital literacy skills.", difficulty: "Beginner", length: "2-3 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_5_Quiz.md" },
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
        length: "15-20 hours",
        assessmentPath: "EducationalMaterial/Assessments/Level_2_AMC_Exam.md",
        subCourses: [
          { id: "mod_2_1", title: "Effective Management & Leadership Styles", filePath: "EducationalMaterial/Modules/module_2_1_content.md", overview: "Analyzes leadership theories, situational leadership, motivation techniques, performance management, delegation, and team cohesion.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_1_Quiz.md"},
          { id: "mod_2_2", title: "Business Communication & Negotiation", filePath: "EducationalMaterial/Modules/module_2_2_content.md", overview: "Develops advanced presentation skills, report writing, managing difficult conversations, negotiation principles, and conflict resolution.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_2_Quiz.md"},
          { id: "mod_2_3", title: "Financial Acumen & Operational Efficiency", filePath: "EducationalMaterial/Modules/module_2_3_content.md", overview: "Focuses on interpreting financial statements, budgeting processes, analyzing KPIs, process mapping, and risk management.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_3_Quiz.md"},
          { id: "mod_2_4", title: "Problem Solving & Decision Making", filePath: "EducationalMaterial/Modules/module_2_4_content.md", overview: "Covers structured problem-solving, Root Cause Analysis (RCA), decision-making biases, and group decision-making.", difficulty: "Intermediate", length: "3-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_4_Quiz.md"},
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
        { id: "mod_3_1_ab", title: "Agile Methodologies & Frameworks (Scrum, Kanban, Lean)", filePath: "EducationalMaterial/Modules/module_3_1_AB_content.md", overview: "Explores the Agile Manifesto, Scrum framework (roles, events, artifacts), Kanban principles and practices, Lean thinking fundamentals, and an introduction to scaling Agile.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_ab", title: "Product Ownership & Backlog Management", filePath: "EducationalMaterial/Modules/module_3_2_AB_content.md", overview: "Covers the Product Owner role in Scrum, techniques for Product Backlog creation and refinement, prioritization methods (MoSCoW, Value vs. Effort), writing user stories and acceptance criteria, and release planning.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_3_ab", title: "Agile Coaching & Facilitation", filePath: "EducationalMaterial/Modules/module_3_3_AB_content.md", overview: "Details the Agile Coach role, mindset, and competencies, differentiating coaching from mentoring/teaching/facilitating. Covers facilitation techniques for Agile events, coaching individuals/teams, and conflict resolution.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "CS_L3", title: "Computer Science Specialization L3", overview: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking.", difficulty: "Professional", length: "25-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CS_Exam.md", subCourses: [
        { id: "mod_3_1_cs", title: "Programming Fundamentals (Python Focus)", filePath: "EducationalMaterial/Modules/module_3_1_CS_content.md", overview: "Covers fundamental programming concepts like algorithms, Python syntax, data types, variables, control structures (loops, conditionals), functions, basic I/O, and an introduction to Object-Oriented Programming (OOP).", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_2_cs", title: "Data Structures & Algorithms I", filePath: "EducationalMaterial/Modules/module_3_2_CS_content.md", overview: "Introduces Abstract Data Types (ADTs), algorithm complexity (Big O notation), linear data structures (arrays, linked lists, stacks, queues), non-linear structures (trees, hash tables), basic sorting and searching algorithms, and recursion.", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_3_cs", title: "OS & Networking Fundamentals", filePath: "EducationalMaterial/Modules/module_3_3_CS_content.md", overview: "Explains the role and components of Operating Systems (processes, memory management, file systems), concurrency basics, network models (OSI, TCP/IP), key network protocols (IP, TCP, HTTP, DNS), IP addressing, and basic network security concepts.", difficulty: "Professional", length: "9-10 hours", language: "English"},
      ] },
      { id: "CY_L3", title: "Cybersecurity Specialization L3", overview: "Foundation of cybersecurity principles, common threats, network security fundamentals, and basic cryptography.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CY_Exam.md", subCourses: [
        { id: "mod_3_1_cy", title: "Introduction to Cybersecurity & Threats", filePath: "EducationalMaterial/Modules/module_3_1_CY_content.md", overview: "Covers the CIA Triad, common cyber threats (malware, phishing, DDoS, APTs), threat actors, vulnerability management, risk management basics, and foundational security controls.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_2_cy", title: "Network Security Fundamentals", filePath: "EducationalMaterial/Modules/module_3_2_CY_content.md", overview: "Explores network security devices (firewalls, IDS/IPS), network segmentation strategies (DMZs, VLANs), wireless network security (WPA2/3), VPNs, and secure network design principles.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_cy", title: "Cryptography Basics & Applications", filePath: "EducationalMaterial/Modules/module_3_3_CY_content.md", overview: "Introduces symmetric and asymmetric encryption, hash functions, digital signatures, Public Key Infrastructure (PKI) basics, and common applications of cryptography like SSL/TLS and data encryption.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "DS_L3", title: "Data Science Specialization L3", overview: "Core Python data science libraries, data analysis, visualization, and an introduction to machine learning concepts and algorithms.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [
        { id: "mod_3_1_ds", title: "Data Science Fundamentals & Python Programming", filePath: "EducationalMaterial/Modules/module_3_1_DS_content.md", overview: "Defines Data Science, its lifecycle, and key skills. Covers Python programming basics relevant to data science and introduces NumPy and Pandas for data manipulation.", difficulty: "Professional", length: "7-8 hours", language: "English" },
        { id: "mod_3_2_ds", title: "Data Analysis & Visualization", filePath: "EducationalMaterial/Modules/module_3_2_DS_content.md", overview: "Explores principles of Exploratory Data Analysis (EDA) using Pandas for data summarization and pattern discovery. Covers data visualization principles and use of Matplotlib and Seaborn.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_ds", title: "Introduction to Machine Learning", filePath: "EducationalMaterial/Modules/module_3_3_DS_content.md", overview: "Introduces Machine Learning concepts, types (supervised, unsupervised), and workflow. Implements basic algorithms like K-Nearest Neighbors, Linear Regression, and K-Means using Scikit-learn, and covers model evaluation.", difficulty: "Professional", length: "6-8 hours", language: "English" },
      ] },
      { id: "ENT_L3", title: "Entrepreneurship Specialization L3", overview: "Developing entrepreneurial mindset, business modeling, Lean Startup methodology, and startup financial management.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_ENT_Exam.md", subCourses: [
        { id: "mod_3_1_ent", title: "Entrepreneurial Mindset & Opportunity Recognition", filePath: "EducationalMaterial/Modules/module_3_1_ENT_content.md", overview: "Defines the entrepreneurial mindset and its key characteristics. Explores theories of opportunity recognition, techniques for identifying business opportunities, the role of creativity, and idea validation.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_2_ent", title: "Business Modeling & Lean Startup Methodology", filePath: "EducationalMaterial/Modules/module_3_2_ENT_content.md", overview: "Covers the Business Model Canvas (BMC) framework for designing and analyzing business models. Introduces Lean Startup principles (Build-Measure-Learn), Minimum Viable Product (MVP), customer development, and pivoting.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_ent", title: "Startup Funding & Financial Management", filePath: "EducationalMaterial/Modules/module_3_3_ENT_content.md", overview: "Explores startup funding sources (bootstrapping, angels, VCs, crowdfunding). Covers startup valuation basics, term sheets, creating financial projections, key startup metrics (burn rate, runway, LTV:CAC), and early-stage financial management.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "FA_L3", title: "Finance and Accounting Specialization L3", overview: "Advanced financial statement analysis, budgeting, forecasting, variance analysis, and corporate finance fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_FA_Exam.md", subCourses: [
        { id: "mod_3_1_fa", title: "Advanced Financial Statement Analysis", filePath: "EducationalMaterial/Modules/module_3_1_FA_content.md", overview: "Provides an in-depth analysis of the Income Statement, Balance Sheet, and Cash Flow Statement. Covers calculation and interpretation of key financial ratios, common-size analysis, trend analysis, and DuPont analysis.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_fa", title: "Budgeting, Forecasting, and Variance Analysis", filePath: "EducationalMaterial/Modules/module_3_2_FA_content.md", overview: "Focuses on developing comprehensive operating and financial budgets, applying forecasting techniques (time series, regression basics), performing detailed variance analysis (price, quantity, efficiency), and understanding flexible budgeting.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_fa", title: "Corporate Finance & Valuation Basics", filePath: "EducationalMaterial/Modules/module_3_3_FA_content.md", overview: "Introduces capital budgeting techniques (NPV, IRR, Payback), cost of capital (WACC), long-term financing decisions, business valuation methods (DCF, comparables), and working capital management.", difficulty: "Professional", length: "8-10 hours", language: "English"},
      ] },
      { id: "GM_L3", title: "General Management and Leadership Specialization L3", overview: "Strategic management, business planning, organizational behavior, change management, and project management fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_GM_Exam.md", subCourses: [
        { id: "mod_3_1_gm", title: "Strategic Management & Business Planning", filePath: "EducationalMaterial/Modules/module_3_1_GM_content.md", overview: "Applies strategic analysis frameworks like SWOT, PESTLE, and Porter's Five Forces. Covers the Business Model Canvas, developing strategic objectives, translating strategy into operational plans, and basic competitive analysis.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_gm", title: "Organizational Behavior & Change Management", filePath: "EducationalMaterial/Modules/module_3_2_GM_content.md", overview: "Explores individual and group behavior in organizations, organizational culture, theories and models of organizational change (Lewin, Kotter), strategies for leading change, and addressing resistance.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_gm", title: "Project Management Fundamentals", filePath: "EducationalMaterial/Modules/module_3_3_GM_content.md", overview: "Covers the project lifecycle, key project management processes (initiating, planning, executing, monitoring & controlling, closing), defining scope, WBS, basic scheduling (Gantt charts), risk management, stakeholder management, and an introduction to Agile vs. Waterfall.", difficulty: "Professional", length: "8-10 hours", language: "English"},
      ] },
      { id: "HR_L3", title: "Human Resources Specialization L3", overview: "Covers talent acquisition, performance management, employee development, employee relations, and labor law basics.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_HR_Exam.md", subCourses: [
        { id: "mod_3_1_hr", title: "Talent Acquisition & Management", filePath: "EducationalMaterial/Modules/module_3_1_HR_content.md", overview: "Details strategic workforce planning, job analysis and design, sourcing and recruitment strategies (including employer branding), structured interviewing and selection processes, onboarding best practices, and an introduction to talent management frameworks and succession planning.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_hr", title: "Performance Management & Employee Development", filePath: "EducationalMaterial/Modules/module_3_2_HR_content.md", overview: "Explores the performance management cycle, setting SMART goals, providing constructive feedback, various performance appraisal methods, managing underperformance, the importance of employee development and career planning, and different learning and development methodologies.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_hr", title: "Employee Relations & Labor Law Basics", filePath: "EducationalMaterial/Modules/module_3_3_HR_content.md", overview: "Focuses on principles of positive employee relations, managing workplace conflict, disciplinary procedures, grievances, fundamental concepts of labor law (discrimination, harassment, wage & hour, safety), DEI, and basics of collective bargaining.", difficulty: "Professional", length: "9-10 hours", language: "English"},
      ] },
      { id: "OMS_L3", title: "Online Marketing and Sales Specialization L3", overview: "Digital marketing strategy, content marketing, SEO optimization, social media marketing, CRM systems, and marketing automation.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_OMS_Exam.md", subCourses: [
        { id: "mod_3_1_oms", title: "Digital Marketing Strategy & Channels", filePath: "EducationalMaterial/Modules/module_3_1_OMS_content.md", overview: "Covers components of a digital marketing strategy, the digital marketing funnel, customer journey mapping, key channels (SEO, SEM, Social Media, Email, Content), channel selection, and setting objectives/KPIs.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_oms", title: "Content Marketing & SEO Optimization", filePath: "EducationalMaterial/Modules/module_3_2_OMS_content.md", overview: "Details developing a content marketing strategy, keyword research, on-page SEO, off-page SEO (link building), creating engaging content types (blogs, videos, infographics), content distribution, and performance measurement.", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_3_oms", title: "CRM & Marketing Automation", filePath: "EducationalMaterial/Modules/module_3_3_OMS_content.md", overview: "Explains CRM systems (selection, implementation, best practices), marketing automation platforms (capabilities, lead nurturing workflows), CRM and automation integration, and analyzing data from these tools for optimization.", difficulty: "Professional", length: "8-10 hours", language: "English"},
      ] },
    ]
  },
  {
    id: "SENIOR_L4",
    name: "Senior Leadership Advanced Topics Level 4",
    overview: "Advanced topics for senior leaders and executives focusing on strategic scaling, transformation, and specialized management.",
    icon: UsersIcon,
    standaloneCourses: [
      { id: "AB_L4", title: "Agile Business Advanced L4", overview: "Mastering scaled Agile frameworks, Lean Portfolio Management, and leading enterprise-wide Agile transformations.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_AB_Exam.md", subCourses: [
        { id: "mod_4_1_ab", title: "Scaling Agile & Lean Portfolio Management", filePath: "EducationalMaterial/Modules/module_4_1_AB_content.md", overview: "Explores challenges of scaling Agile, details of SAFe, LeSS, Nexus, Scrum@Scale. Covers Lean Portfolio Management (strategy, funding, operations, governance), aligning strategy with execution, and flow metrics for scaled environments.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_1_AB_Assessment.md"},
        { id: "mod_4_2_ab", title: "Agile Leadership & Organizational Agility", filePath: "EducationalMaterial/Modules/module_4_2_AB_content.md", overview: "Focuses on the Agile leadership mindset, fostering an Agile culture, coaching leaders and executives, understanding organizational agility models, and designing Agile-supportive structures and processes for leading transformations.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Assessments/Module_4_2_AB_Assessment.md"},
      ] },
      { id: "CS_L4", title: "Computer Science Advanced L4", overview: "Delving into advanced algorithms, complexity theory, distributed systems, and cloud computing architectures.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CS_Exam.md", subCourses: [
        { id: "mod_4_1_cs", title: "Advanced Algorithms & Complexity", filePath: "EducationalMaterial/Modules/module_4_1_CS_content.md", overview: "Covers advanced algorithm design (dynamic programming, greedy algorithms, network flow), deeper complexity analysis (amortized, recurrence relations), NP-completeness theory, approximation algorithms, randomized algorithms, and advanced data structures.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_cs", title: "Distributed Systems & Cloud Computing", filePath: "EducationalMaterial/Modules/module_4_2_CS_content.md", overview: "Explores principles of distributed systems, architectural patterns, consistency models, consensus algorithms, cloud computing (IaaS, PaaS, SaaS, deployment models), virtualization, containerization (Docker, Kubernetes), and distributed data management.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "CY_L4", title: "Cybersecurity Advanced L4", overview: "Mastering advanced network security, modern cryptography, offensive security techniques, and incident response strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CY_Exam.md", subCourses: [
        { id: "mod_4_1_cy", title: "Advanced Network Security & Cryptography", filePath: "EducationalMaterial/Modules/module_4_1_CY_content.md", overview: "Details defense-in-depth network architectures (Zero Trust, SDN security, Cloud network security), securing advanced protocols (BGP, DNSSEC), advanced security devices (NGFWs, WAFs), advanced wireless security (WPA3, 802.1X), modern crypto techniques (AES-GCM, ECC), and PKI design.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_cy", title: "Offensive Security, Threat Hunting & Incident Response", filePath: "EducationalMaterial/Modules/module_4_2_CY_content.md", overview: "Covers penetration testing methodologies (PTES), advanced vulnerability assessment, exploit development basics, proactive threat hunting strategies, incident response frameworks (NIST, SANS), digital forensics fundamentals, and malware analysis basics.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "DS_L4", title: "Data Science Advanced L4", overview: "Advanced machine learning, AI, Big Data technologies, and leveraging cloud platforms for data science.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_DS_Exam.md", subCourses: [
        { id: "mod_4_1_ds", title: "Advanced Machine Learning & AI", filePath: "EducationalMaterial/Modules/module_4_1_DS_content.md", overview: "Explores ensemble methods (Random Forests, Gradient Boosting), Support Vector Machines (SVMs), advanced unsupervised learning (DBSCAN, t-SNE), Deep Learning (ANNs, CNNs, RNNs, Transformers), Natural Language Processing (NLP) foundations, and Reinforcement Learning basics.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_ds", title: "Big Data Technologies & Cloud Platforms", filePath: "EducationalMaterial/Modules/module_4_2_DS_content.md", overview: "Covers Big Data characteristics (Vs), Hadoop Distributed File System (HDFS), MapReduce, Apache Spark, NoSQL databases, stream processing, and utilizing cloud platforms (AWS, Azure, GCP) for Big Data and ML workloads.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "ENT_L4", title: "Entrepreneurship Advanced L4", overview: "Strategies for scaling ventures, managing growth, advanced financing, and planning exit strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_ENT_Exam.md", subCourses: [
        { id: "mod_4_1_ent", title: "Scaling Ventures & Growth Strategies", filePath: "EducationalMaterial/Modules/module_4_1_ENT_content.md", overview: "Addresses challenges of scaling, growth models (Ansoff, Greiner), scaling operations, sales, and marketing engines, international expansion strategies, and managing organizational culture during rapid growth.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_ent", title: "Advanced Finance & Exit Strategies", filePath: "EducationalMaterial/Modules/module_4_2_ENT_content.md", overview: "Covers advanced startup valuation, later-stage financing (Series B/C+, growth equity, venture debt), complex term sheet negotiations, financial modeling for growth stages, M&A as a buyer/seller, and exit strategies (IPO vs. M&A).", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "FA_L4", title: "Finance and Accounting Advanced L4", overview: "Advanced topics in investment management, portfolio theory, corporate finance, and risk management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_FA_Exam.md", subCourses: [
        { id: "mod_4_1_fa", title: "Investment Management & Portfolio Theory", filePath: "EducationalMaterial/Modules/module_4_1_FA_content.md", overview: "Explores Modern Portfolio Theory (MPT), Capital Asset Pricing Model (CAPM), Arbitrage Pricing Theory (APT), asset classes, investment strategies, portfolio construction, behavioral finance, and portfolio performance evaluation.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_fa", title: "Advanced Corporate Finance & Risk Management", filePath: "EducationalMaterial/Modules/module_4_2_FA_content.md", overview: "Covers advanced capital budgeting (real options), capital structure theory (M&M, trade-off, pecking order), dividend policy, corporate restructuring (M&A, divestitures), Enterprise Risk Management (ERM), financial risk management (FX, interest rate), and derivatives for hedging.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "GM_L4", title: "General Management and Leadership Advanced L4", overview: "Advanced strategic management, innovation, global leadership, executive decision-making, and crisis leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_GM_Exam.md", subCourses: [
        { id: "mod_4_1_gm", title: "Advanced Strategic Management & Innovation", filePath: "EducationalMaterial/Modules/module_4_1_GM_content.md", overview: "Explores advanced strategic frameworks (Blue Ocean, Scenario Planning), Dynamic Capabilities, corporate and global strategy formulation, innovation management, leading in globalized environments, and advanced corporate governance topics.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Advanced_Strategic_Analysis_Frameworks_Quiz.md"},
        { id: "mod_4_2_gm", title: "Executive Decision Making & Crisis Leadership", filePath: "EducationalMaterial/Modules/module_4_2_GM_content.md", overview: "Covers advanced decision-making models, cognitive biases in executive judgment, leading high-stakes decisions, crisis leadership and management, ethical considerations in executive decisions, and building resilient organizations.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/02_Cognitive_Biases_in_Executive_Judgment_Quiz.md"},
      ] },
      { id: "HR_L4", title: "Human Resources Advanced L4", overview: "Strategic HR management, workforce planning, HR analytics, organizational development, and change leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_HR_Exam.md", subCourses: [
        { id: "mod_4_1_hr", title: "Strategic HR Management & Workforce Planning", filePath: "EducationalMaterial/Modules/module_4_1_HR_content.md", overview: "Focuses on SHRM principles, advanced strategic workforce planning models, leveraging HR analytics for strategic decisions, managing talent systems, robust succession planning, building high-performance cultures, and HR's role in M&A.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_hr", title: "Organizational Development & Change Management", filePath: "EducationalMaterial/Modules/module_4_2_HR_content.md", overview: "Covers advanced Organizational Development (OD) theories and models, designing complex OD interventions (e.g., culture change, organizational redesign), leading large-scale change initiatives, managing resistance effectively, and evaluating OD/change impact.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "OMS_L4", title: "Online Marketing and Sales Advanced L4", overview: "Advanced digital marketing strategies, sophisticated PPC/SEO, content ecosystems, sales leadership, and strategic sales management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_OMS_Exam.md", subCourses: [
        { id: "mod_4_1_oms", title: "Advanced Digital Marketing Strategies", filePath: "EducationalMaterial/Modules/module_4_1_OMS_content.md", overview: "Details advanced SEO (technical, semantic), sophisticated PPC strategies (bidding, audience targeting), building content ecosystems, advanced social media marketing (paid social ROI, influencer strategies), marketing analytics, and attribution modeling.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_oms", title: "Strategic Sales Management & Leadership", filePath: "EducationalMaterial/Modules/module_4_2_OMS_content.md", overview: "Covers strategic sales planning, advanced sales forecasting techniques, complex territory management, sales compensation design, sales leadership and coaching, Key Account Management (KAM) strategies, and sales technology stack optimization.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
    ]
  },
  {
    id: "EXEC_L5",
    name: "Executive Leadership Capstone Level 5",
    overview: "Capstone modules for executive-level strategic thinking, leadership, and enterprise-wide transformation across specializations.",
    icon: Building,
    standaloneCourses: [
      { id: "AB_L5_CAP", title: "Agile Business Executive Capstone L5", overview: "Synthesizing principles for enterprise agility, leading large-scale business transformations, and advanced Agile/Lean application beyond IT.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_AB_Assessment.md", subCourses: [
        { id: "mod_5_1_ab", title: "Enterprise Agility & Business Transformation", filePath: "EducationalMaterial/Modules/module_5_1_AB_content.md", overview: "Focuses on formulating the vision for enterprise business agility, designing adaptive organizational structures, leading cultural and mindset shifts at scale, implementing Lean Portfolio Management aligned with enterprise strategy, measuring the business value of agility, and navigating complex transformation challenges.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Introduction_Extending_Agility_Across_the_Enterprise_Quiz.md"},
      ] },
      { id: "CS_L5_CAP", title: "Computer Science Executive Capstone L5", overview: "Formulating enterprise technology strategy, leading digital transformation, and governing innovation at an executive (CTO/CIO) level.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CS_Assessment.md", subCourses: [
        { id: "mod_5_1_cs", title: "Executive Leadership in Technology Strategy & Innovation", filePath: "EducationalMaterial/Modules/module_5_1_CS_content.md", overview: "Covers developing enterprise technology strategy, evaluating and integrating emerging technologies (AI, Quantum), leading large-scale digital transformation initiatives, governing enterprise architecture, fostering a culture of tech innovation, and executive-level cybersecurity and data governance.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "CY_L5_CAP", title: "Cybersecurity Executive Capstone L5", overview: "Leading enterprise cybersecurity strategy, risk management, and fostering a security-aware culture from an executive perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CY_Assessment.md", subCourses: [
        { id: "mod_5_1_cy", title: "Executive Leadership in Cybersecurity & Risk Management", filePath: "EducationalMaterial/Modules/module_5_1_CY_content.md", overview: "Focuses on formulating enterprise cybersecurity strategy, designing resilient security architectures (e.g., Zero Trust), maturing security operations and incident response, integrating cyber risk with ERM, navigating global regulations, and communicating cyber risk effectively to the board.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "DS_L5_CAP", title: "Data Science Executive Capstone L5", overview: "Strategic leadership in enterprise AI, building data-driven culture, and governing scalable, ethical AI deployment from a CDAO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_DS_Assessment.md", subCourses: [
        { id: "mod_5_1_ds", title: "Strategic Leadership in Data Science & AI", filePath: "EducationalMaterial/Modules/module_5_1_DS_content.md", overview: "Covers developing enterprise AI strategy, managing AI initiative portfolios, ensuring scalable, reliable, and ethical AI deployment (MLOps), building high-performing AI teams, championing data-driven organizational culture, and establishing robust AI ethics and governance frameworks.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "ENT_L5_CAP", title: "Entrepreneurship Executive Capstone L5", overview: "Advanced entrepreneurial leadership, navigating hyper-growth, complex financial/exit strategies, and ecosystem engagement for venture leaders.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_ENT_Assessment.md", subCourses: [
        { id: "mod_5_1_ent", title: "Entrepreneurial Leadership & Ecosystem Strategy", filePath: "EducationalMaterial/Modules/module_5_1_ENT_content.md", overview: "Focuses on advanced entrepreneurial leadership for scaling ventures, managing culture during hyper-growth, strategic engagement with the entrepreneurial ecosystem, late-stage fundraising (Series D+, pre-IPO), architecting complex exits (IPO, M&A), and governance for late-stage private companies.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "FA_L5_CAP", title: "Finance and Accounting Executive Capstone L5", overview: "Formulating enterprise financial strategy, leading complex capital allocation, advanced risk management, and executive financial governance from a CFO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_FA_Assessment.md", subCourses: [
        { id: "mod_5_1_fa", title: "Executive Financial Strategy & Governance", filePath: "EducationalMaterial/Modules/module_5_1_FA_content.md", overview: "Covers formulating enterprise financial strategy, complex capital allocation decisions (M&A, divestitures), advanced Enterprise Risk Management (ERM), global treasury and hedging strategies, strategic FP&A, investor relations, and the CFO's role in corporate governance.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "GM_L5_CAP", title: "General Management and Leadership Executive Capstone L5", overview: "Leading global organizations, C-suite strategic thinking, large-scale transformation, and upholding executive-level governance and ethics.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_GM_Exam.md", subCourses: [
        { id: "mod_5_1_gm", title: "Global Leadership & C-Suite Strategy", filePath: "EducationalMaterial/Modules/module_5_1_GM_content.md", overview: "Synthesizes leading complex global organizations, C-suite level corporate and portfolio strategy (including M&A), navigating macro-environmental trends, executive presence and communication, leading large-scale transformation and innovation, and ensuring robust corporate governance and ethical leadership.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_The_Global_Leadership_Imperative_Quiz.md"},
      ] },
      { id: "HR_L5_CAP", title: "Human Resources Executive Capstone L5", overview: "Formulating enterprise human capital strategy, leading talent and culture in transformation, and executive HR leadership from a CHRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_HR_Assessment.md", subCourses: [
        { id: "mod_5_1_hr", title: "Strategic Human Capital & Executive Leadership", filePath: "EducationalMaterial/Modules/module_5_1_HR_content.md", overview: "Focuses on developing enterprise human capital strategy, executive talent management and succession planning, strategic DEI implementation, executive compensation philosophy, the CHRO's role in governance, global HR compliance, and leveraging HR technology and analytics for strategic impact.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "OMS_L5_CAP", title: "Online Marketing and Sales Executive Capstone L5", overview: "Leading enterprise revenue strategy, digital transformation in GTM, and orchestrating omnichannel customer experiences from a CRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_OMS_Assessment.md", subCourses: [
        { id: "mod_5_1_oms", title: "Executive Leadership in Marketing & Sales Strategy", filePath: "EducationalMaterial/Modules/module_5_1_OMS_content.md", overview: "Covers formulating enterprise revenue strategy, leading digital transformation in go-to-market functions, orchestrating seamless omnichannel customer experiences, optimizing global GTM models, implementing Revenue Operations (RevOps), leveraging advanced analytics and AI for revenue growth, and strategic brand positioning.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
    ]
  },
  {
    id: "TECH_DEV",
    name: "Technology Development",
    overview: "Courses on programming, software engineering, data science, and emerging technologies.",
    icon: BookCopy,
    standaloneCourses: [
      { id: "PYTHON_DS", title: "Python for Data Science", overview: "Learn to use Python and its powerful libraries (Pandas, NumPy, Matplotlib, Scikit-learn) for data analysis, visualization, and machine learning.", difficulty: "Intermediate", length: "25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [
        { id: "python_ds_numpy", title: "Python Fundamentals Recap and NumPy", filePath: "EducationalMaterial/Modules/python_ds_numpy.md", overview: "Reviews core Python concepts crucial for data science and introduces NumPy for efficient numerical computation, covering array creation, attributes, indexing, and basic operations.", difficulty: "Intermediate", length: "5 hours", language: "English"},
        { id: "python_ds_pandas", title: "Data Manipulation with Pandas", filePath: "EducationalMaterial/Modules/python_ds_pandas.md", overview: "Focuses on Pandas Series and DataFrames for data analysis, covering creation, indexing, filtering, cleaning, transformation, grouping, aggregation, and merging data.", difficulty: "Intermediate", length: "7 hours", language: "English"},
        { id: "python_ds_viz", title: "Data Visualization with Matplotlib and Seaborn", filePath: "EducationalMaterial/Modules/python_ds_viz.md", overview: "Covers data visualization principles and practical application of Matplotlib and Seaborn for creating various plots (histograms, scatter plots, bar charts, line plots) to explore and communicate data insights.", difficulty: "Intermediate", length: "6 hours", language: "English"},
        { id: "python_ds_sklearn", title: "Introduction to Machine Learning with Scikit-learn", filePath: "EducationalMaterial/Modules/python_ds_sklearn.md", overview: "Introduces fundamental ML concepts (supervised/unsupervised learning), the ML workflow, and implementing basic algorithms (KNN, Logistic Regression, Linear Regression, K-Means) with Scikit-learn, including data preprocessing and model evaluation.", difficulty: "Advanced", length: "7 hours", language: "English"},
      ] },
    ]
  },
  {
    id: "LEAD_MGMT_FUND",
    name: "Leadership and Management Fundamentals",
    overview: "Essential principles for effective leadership and management in today's dynamic business environment.",
    icon: UsersIcon,
    standaloneCourses: [
      { id: "MGMT_INTRO", title: "Introduction to Modern Management", overview: "Covers core management theories, functions (planning, organizing, leading, controlling), and essential skills for new managers. Explores the transition from individual contributor to manager.", difficulty: "Beginner", length: "12 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_MGMT_Exam.md", subCourses: [
        { id: "mgmt_intro_evolution", title: "The Evolution of Management Thought", filePath: "EducationalMaterial/Modules/mgmt_intro_evolution.md", overview: "Traces the history of management theories, from classical approaches like Scientific Management and Bureaucracy to contemporary ideas including Systems Theory and Contingency Theory.", difficulty: "Beginner", length: "3 hours", language: "English"},
        { id: "mgmt_intro_functions", title: "Core Management Functions", filePath: "EducationalMaterial/Modules/mgmt_intro_functions.md", overview: "Provides a deep dive into the POLC framework: Planning, Organizing, Leading, and Controlling.", difficulty: "Beginner", length: "5 hours", language: "English"},
        { id: "mgmt_intro_skills", title: "Essential Managerial Skills", filePath: "EducationalMaterial/Modules/mgmt_intro_skills.md", overview: "Focuses on developing practical skills crucial for managerial success, including communication, problem-solving, decision-making, and time management.", difficulty: "Beginner", length: "4 hours", language: "English"},
      ] },
      { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", overview: "Explores various leadership styles, motivational theories, team dynamics, and communication strategies for inspiring and guiding teams.", difficulty: "Beginner", length: "10 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_LEAD_Exam.md", subCourses: [
        { id: "lead_found_styles", title: "Understanding Leadership Styles", filePath: "EducationalMaterial/Modules/lead_found_styles.md", overview: "Introduces classical and contemporary leadership styles, Situational Leadership®, and the role of emotional intelligence.", difficulty: "Beginner", length: "3-4 hours", language: "English"},
        { id: "lead_found_motivation", title: "Motivating and Engaging Teams", filePath: "EducationalMaterial/Modules/lead_found_motivation.md", overview: "Covers key theories of motivation and provides practical strategies for creating an engaging team environment.", difficulty: "Beginner", length: "4 hours", language: "English"},
        { id: "lead_found_comm", title: "Effective Team Communication", filePath: "EducationalMaterial/Modules/lead_found_comm.md", overview: "Develops crucial team communication skills, including active listening, constructive feedback, and conflict resolution.", difficulty: "Beginner", length: "3 hours", language: "English"},
      ] },
    ]
  },
  {
    id: "AGILE_PM",
    name: "Agile Business and Project Management",
    overview: "Principles and practices for managing projects and businesses in an agile and adaptive manner.",
    icon: Zap,
    standaloneCourses: [
      { id: "AGILE_SCRUM", title: "Agile Project Management with Scrum", overview: "A comprehensive introduction to the Scrum framework, its roles, events, artifacts, and underlying principles for managing complex projects.", difficulty: "Intermediate", length: "15 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_AGILE_SCRUM_Exam.md", subCourses: [
        { id: "agile_scrum_manifesto", title: "Agile Manifesto and Principles", filePath: "EducationalMaterial/Modules/agile_scrum_manifesto.md", overview: "Explores the historical context, the four core values, and the twelve supporting principles of the Agile Manifesto.", difficulty: "Intermediate", length: "3 hours", language: "English"},
        { id: "agile_scrum_roles", title: "Scrum Roles and Responsibilities", filePath: "EducationalMaterial/Modules/agile_scrum_roles.md", overview: "Details the primary accountabilities of the Product Owner, Scrum Master, and Developers within the Scrum Team.", difficulty: "Intermediate", length: "4 hours", language: "English"},
        { id: "agile_scrum_events_artifacts", title: "Scrum Events and Artifacts", filePath: "EducationalMaterial/Modules/agile_scrum_events_artifacts.md", overview: "Covers the five Scrum events and the three official Scrum artifacts along with their commitments.", difficulty: "Intermediate", length: "5 hours", language: "English"},
        { id: "agile_scrum_user_stories", title: "User Story Writing and Estimation", filePath: "EducationalMaterial/Modules/agile_scrum_user_stories.md", overview: "Focuses on techniques for writing effective user stories, defining acceptance criteria, and relative estimation with story points.", difficulty: "Intermediate", length: "3 hours", language: "English"},
      ] },
      { id: "LEAN_THINK", title: "Introduction to Lean Thinking", overview: "Core principles of Lean methodology, focusing on value creation, waste elimination, and continuous improvement.", difficulty: "Intermediate", length: "8 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_LEAN_THINK_Exam.md", subCourses: [
        { id: "lean_think_principles", title: "The Five Principles of Lean", filePath: "EducationalMaterial/Modules/lean_think_principles.md", overview: "Explains the five core principles of Lean: Define Value, Map the Value Stream, Create Flow, Establish Pull, and Pursue Perfection.", difficulty: "Intermediate", length: "4 hours", language: "English"},
        { id: "lean_think_waste", title: "Identifying and Eliminating Waste (Muda)", filePath: "EducationalMaterial/Modules/lean_think_waste.md", overview: "Defines 'waste' (Muda) and details the eight common types, providing practical techniques for identification and elimination.", difficulty: "Intermediate", length: "4 hours", language: "English"},
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
          { id: "ai_module_1", title: "Foundations of Autonomous AI Agents", filePath: "EducationalMaterial/Modules/ai_module_1_foundations_content.md", overview: "Explores the evolution from automation to autonomy, the core architectural pillars of AI agents (LLM Brain, Perception, Planning, Action, Memory), and the LLM's role as a central orchestrator.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_Quiz.md"},
          { id: "ai_module_2", title: "Designing Agentic Architectures", filePath: "EducationalMaterial/Modules/ai_module_2_architectures_content.md", overview: "Covers essential system components for agentic systems, common architectural patterns (single vs. multi-agent, hierarchical planning), agent frameworks (LangChain, AutoGen), and learns from industry examples like Manus AI and Cline AI.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_Quiz.md"},
          { id: "ai_module_3", title: "Perception and Understanding the Environment", filePath: "EducationalMaterial/Modules/ai_module_3_perception_content.md", overview: "Details textual perception (user prompts, information extraction), visual perception using Multimodal LLMs (MLLMs) for GUI understanding, and integrating structured data (APIs, databases) for comprehensive environmental awareness.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_3_Quiz.md"},
          { id: "ai_module_4", title: "Planning and Reasoning", filePath: "EducationalMaterial/Modules/ai_module_4_planning_content.md", overview: "Focuses on task decomposition for complex goals, advanced planning strategies (Chain of Thought, Tree of Thoughts, ReAct), and practical implementation of LLM-driven planning modules integrated with perception and action.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_Quiz.md"},
          { id: "ai_module_5", title: "Action Execution and Tool Integration", filePath: "EducationalMaterial/Modules/ai_module_5_action_content.md", overview: "Covers designing effective tool abstraction layers, integrating core tools (web interaction, shell commands, file operations, code execution, API calls), and advanced GUI automation techniques for agents.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_5_Quiz.md"},
          { id: "ai_module_6", title: "Memory and Learning in Agents", filePath: "EducationalMaterial/Modules/ai_module_6_memory_content.md", overview: "Explores short-term working memory for task context and LLM window management, long-term memory implementation (Vector DBs, RAG), and mechanisms for agent skill acquisition and refinement through self-improvement.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_6_Quiz.md"},
          { id: "ai_module_7", title: "Building and Evaluating Agentic Systems", filePath: "EducationalMaterial/Modules/ai_module_7_evaluation_content.md", overview: "Provides practical guidance on setting up development environments, building a basic agent (e.g., with LangChain), methods for evaluating agent performance (task completion, efficiency, robustness), and responsible AI development practices.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_7_Quiz.md"},
          { id: "ai_module_8", title: "Deployment and Future Trends in AI Agents", filePath: "EducationalMaterial/Modules/ai_module_8_deployment_future_content.md", overview: "Discusses strategies for deploying agents (cloud vs. local, containerization), monitoring and maintenance in production, and explores advanced concepts like multi-agent collaboration, embodied AI, continual learning, and human-agent interaction.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_8_Quiz.md"},
        ]
      }
    ]
  },
];

// Function to populate lesson content
const populateLessons = (subCourses: SubCourse[]): SubCourse[] => {
    return subCourses.map(sc => {
        const fileName = sc.filePath.split('/').pop() || '';
        const content = contentMap[fileName] || `Content for ${sc.title} is not available yet.`;
        
        // Let's create more granular lessons by splitting the content
        const contentSections = content.split(/^(#+)\s(.*)/m).filter(Boolean);
        let lessons: Lesson[] = [];

        if (contentSections.length <= 2) { // No proper markdown headers found, treat as one lesson
             lessons.push({
                id: `l_${sc.id}_1`,
                title: sc.title, // Use subcourse title if only one lesson
                overview: sc.overview,
                duration: '45 min', 
                completed: false,
                type: 'reading',
                content: content
            });
        } else {
            let currentTitle = sc.title;
            let currentContent = '';
            let lessonCounter = 1;

            for(let i = 0;  i < contentSections.length; i += 2) {
                const headerLevel = contentSections[i];
                const headerText = contentSections[i+1];
                const lessonContent = (contentSections[i+2] && !contentSections[i+2].startsWith('#')) ? contentSections[i+2] : '';
                
                // We'll treat H1 and H2 as new lessons. H3 and below are part of the current lesson.
                if (headerLevel === '# ' || headerLevel === '## ' || headerLevel === '##') {
                    if (currentContent.trim() !== '' && lessonCounter > 1) { // Save previous lesson
                        lessons.push({
                            id: `l_${sc.id}_${lessonCounter-1}`,
                            title: currentTitle,
                            duration: `${Math.max(5, Math.round(currentContent.split(' ').length / 200) * 5)} min`, // Estimate duration
                            completed: false,
                            type: 'reading',
                            content: currentContent.trim(),
                            overview: `Exploring the key concepts of ${currentTitle}.`
                        });
                    }
                    currentTitle = headerText.trim();
                    currentContent = `#${headerLevel}${headerText}\n${lessonContent}`;
                    lessonCounter++;
                } else {
                    currentContent += `${headerLevel}${headerText}\n${lessonContent}`;
                }
            }
             // Add the last lesson
             if (currentContent.trim() !== '') {
                 lessons.push({
                    id: `l_${sc.id}_${lessonCounter-1}`,
                    title: currentTitle,
                    duration: `${Math.max(5, Math.round(currentContent.split(' ').length / 200) * 5)} min`,
                    completed: false,
                    type: 'reading',
                    content: currentContent.trim(),
                    overview: `Exploring the key concepts of ${currentTitle}.`
                });
            }

            if (lessons.length === 0) { // Fallback if splitting fails
                lessons.push({
                     id: `l_${sc.id}_1`,
                    title: sc.title,
                    duration: '45 min',
                    completed: false,
                    type: 'reading',
                    content: content
                });
            }
        }
        
        return {
            ...sc,
            lessons: lessons
        };
    });
};

const populatedData = initialCourseData.map(field => ({
    ...field,
    standaloneCourses: field.standaloneCourses.map(course => ({
        ...course,
        subCourses: populateLessons(course.subCourses)
    }))
}));


export const courseData: Field[] = populatedData;

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
                instructorImage: "/img/user-avatar.png",
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

    