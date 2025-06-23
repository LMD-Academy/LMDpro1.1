
// src/lib/course-data.ts
import { course_data_structure } from './course_structure_data';
import type { Field, SubCourse, Lesson } from './types';

// --- Content Loading via Explicit Imports for Robustness ---
// This replaces the dynamic require.context to prevent build/runtime errors.

import module_1_1_content from '../../EducationalMaterial/Modules/module_1_1_content.md';
import module_1_1_content_ar from '../../EducationalMaterial/Modules/module_1_1_content_ar.md';
import module_1_2_content from '../../EducationalMaterial/Modules/module_1_2_content.md';
import module_1_3_content from '../../EducationalMaterial/Modules/module_1_3_content.md';
import module_1_4_content from '../../EducationalMaterial/Modules/module_1_4_content.md';
import module_1_5_content from '../../EducationalMaterial/Modules/module_1_5_content.md';
import module_2_1_content from '../../EducationalMaterial/Modules/module_2_1_content.md';
import module_2_2_content from '../../EducationalMaterial/Modules/module_2_2_content.md';
import module_2_3_content from '../../EducationalMaterial/Modules/module_2_3_content.md';
import module_2_4_content from '../../EducationalMaterial/Modules/module_2_4_content.md';
import module_3_1_AB_content from '../../EducationalMaterial/Modules/module_3_1_AB_content.md';
import module_3_2_AB_content from '../../EducationalMaterial/Modules/module_3_2_AB_content.md';
import module_3_3_AB_content from '../../EducationalMaterial/Modules/module_3_3_AB_content.md';
import module_3_1_CS_content from '../../EducationalMaterial/Modules/module_3_1_CS_content.md';
import module_3_2_CS_content from '../../EducationalMaterial/Modules/module_3_2_CS_content.md';
import module_3_3_CS_content from '../../EducationalMaterial/Modules/module_3_3_CS_content.md';
import module_3_1_CY_content from '../../EducationalMaterial/Modules/module_3_1_CY_content.md';
import module_3_2_CY_content from '../../EducationalMaterial/Modules/module_3_2_CY_content.md';
import module_3_3_CY_content from '../../EducationalMaterial/Modules/module_3_3_CY_content.md';
import module_3_1_DS_content from '../../EducationalMaterial/Modules/module_3_1_DS_content.md';
import module_3_2_DS_content from '../../EducationalMaterial/Modules/module_3_2_DS_content.md';
import module_3_3_DS_content from '../../EducationalMaterial/Modules/module_3_3_DS_content.md';
import module_3_1_ENT_content from '../../EducationalMaterial/Modules/module_3_1_ENT_content.md';
import module_3_2_ENT_content from '../../EducationalMaterial/Modules/module_3_2_ENT_content.md';
import module_3_3_ENT_content from '../../EducationalMaterial/Modules/module_3_3_ENT_content.md';
import module_3_1_FA_content from '../../EducationalMaterial/Modules/module_3_1_FA_content.md';
import module_3_2_FA_content from '../../EducationalMaterial/Modules/module_3_2_FA_content.md';
import module_3_3_FA_content from '../../EducationalMaterial/Modules/module_3_3_FA_content.md';
import module_3_1_GM_content from '../../EducationalMaterial/Modules/module_3_1_GM_content.md';
import module_3_2_GM_content from '../../EducationalMaterial/Modules/module_3_2_GM_content.md';
import module_3_3_GM_content from '../../EducationalMaterial/Modules/module_3_3_GM_content.md';
import module_3_1_HR_content from '../../EducationalMaterial/Modules/module_3_1_HR_content.md';
import module_3_2_HR_content from '../../EducationalMaterial/Modules/module_3_2_HR_content.md';
import module_3_3_HR_content from '../../EducationalMaterial/Modules/module_3_3_HR_content.md';
import module_3_1_OMS_content from '../../EducationalMaterial/Modules/module_3_1_OMS_content.md';
import module_3_2_OMS_content from '../../EducationalMaterial/Modules/module_3_2_OMS_content.md';
import module_3_3_OMS_content from '../../EducationalMaterial/Modules/module_3_3_OMS_content.md';
import module_4_1_AB_content from '../../EducationalMaterial/Modules/module_4_1_AB_content.md';
import module_4_2_AB_content from '../../EducationalMaterial/Modules/module_4_2_AB_content.md';
import module_4_1_CS_content from '../../EducationalMaterial/Modules/module_4_1_CS_content.md';
import module_4_2_CS_content from '../../EducationalMaterial/Modules/module_4_2_CS_content.md';
import module_4_1_CY_content from '../../EducationalMaterial/Modules/module_4_1_CY_content.md';
import module_4_2_CY_content from '../../EducationalMaterial/Modules/module_4_2_CY_content.md';
import module_4_1_DS_content from '../../EducationalMaterial/Modules/module_4_1_DS_content.md';
import module_4_2_DS_content from '../../EducationalMaterial/Modules/module_4_2_DS_content.md';
import module_4_1_ENT_content from '../../EducationalMaterial/Modules/module_4_1_ENT_content.md';
import module_4_2_ENT_content from '../../EducationalMaterial/Modules/module_4_2_ENT_content.md';
import module_4_1_FA_content from '../../EducationalMaterial/Modules/module_4_1_FA_content.md';
import module_4_2_FA_content from '../../EducationalMaterial/Modules/module_4_2_FA_content.md';
import module_4_1_GM_content from '../../EducationalMaterial/Modules/module_4_1_GM_content.md';
import module_4_2_GM_content from '../../EducationalMaterial/Modules/module_4_2_GM_content.md';
import module_4_1_HR_content from '../../EducationalMaterial/Modules/module_4_1_HR_content.md';
import module_4_2_HR_content from '../../EducationalMaterial/Modules/module_4_2_HR_content.md';
import module_4_1_OMS_content from '../../EducationalMaterial/Modules/module_4_1_OMS_content.md';
import module_4_2_OMS_content from '../../EducationalMaterial/Modules/module_4_2_OMS_content.md';
import module_5_1_AB_content from '../../EducationalMaterial/Modules/module_5_1_AB_content.md';
import module_5_1_CS_content from '../../EducationalMaterial/Modules/module_5_1_CS_content.md';
import module_5_1_CY_content from '../../EducationalMaterial/Modules/module_5_1_CY_content.md';
import module_5_1_DS_content from '../../EducationalMaterial/Modules/module_5_1_DS_content.md';
import module_5_1_ENT_content from '../../EducationalMaterial/Modules/module_5_1_ENT_content.md';
import module_5_1_FA_content from '../../EducationalMaterial/Modules/module_5_1_FA_content.md';
import module_5_1_GM_content from '../../EducationalMaterial/Modules/module_5_1_GM_content.md';
import module_5_1_HR_content from '../../EducationalMaterial/Modules/module_5_1_HR_content.md';
import module_5_1_OMS_content from '../../EducationalMaterial/Modules/module_5_1_OMS_content.md';
import ai_module_1_foundations_content from '../../EducationalMaterial/Modules/ai_module_1_foundations_content.md';
import ai_module_2_architectures_content from '../../EducationalMaterial/Modules/ai_module_2_architectures_content.md';
import ai_module_3_perception_content from '../../EducationalMaterial/Modules/ai_module_3_perception_content.md';
import ai_module_4_planning_content from '../../EducationalMaterial/Modules/ai_module_4_planning_content.md';
import ai_module_5_action_content from '../../EducationalMaterial/Modules/ai_module_5_action_content.md';
import ai_module_6_memory_content from '../../EducationalMaterial/Modules/ai_module_6_memory_content.md';
import ai_module_7_evaluation_content from '../../EducationalMaterial/Modules/ai_module_7_evaluation_content.md';
import ai_module_8_deployment_future_content from '../../EducationalMaterial/Modules/ai_module_8_deployment_future_content.md';
import mgmt_intro_evolution from '../../EducationalMaterial/Modules/mgmt_intro_evolution.md';
import mgmt_intro_functions from '../../EducationalMaterial/Modules/mgmt_intro_functions.md';
import mgmt_intro_skills from '../../EducationalMaterial/Modules/mgmt_intro_skills.md';
import lead_found_styles from '../../EducationalMaterial/Modules/lead_found_styles.md';
import lead_found_motivation from '../../EducationalMaterial/Modules/lead_found_motivation.md';
import lead_found_comm from '../../EducationalMaterial/Modules/lead_found_comm.md';
import agile_scrum_manifesto from '../../EducationalMaterial/Modules/agile_scrum_manifesto.md';
import agile_scrum_roles from '../../EducationalMaterial/Modules/agile_scrum_roles.md';
import agile_scrum_events_artifacts from '../../EducationalMaterial/Modules/agile_scrum_events_artifacts.md';
import agile_scrum_user_stories from '../../EducationalMaterial/Modules/agile_scrum_user_stories.md';
import lean_think_principles from '../../EducationalMaterial/Modules/lean_think_principles.md';
import lean_think_waste from '../../EducationalMaterial/Modules/lean_think_waste.md';
import python_ds_numpy from '../../EducationalMaterial/Modules/python_ds_numpy.md';
import python_ds_pandas from '../../EducationalMaterial/Modules/python_ds_pandas.md';
import python_ds_viz from '../../EducationalMaterial/Modules/python_ds_viz.md';
import python_ds_sklearn from '../../EducationalMaterial/Modules/python_ds_sklearn.md';


// Create a map from filePath to the imported content
const contentMap: { [key: string]: string } = {
  "module_1_1_content.md": module_1_1_content,
  "module_1_1_content_ar.md": module_1_1_content_ar,
  "module_1_2_content.md": module_1_2_content,
  "module_1_3_content.md": module_1_3_content,
  "module_1_4_content.md": module_1_4_content,
  "module_1_5_content.md": module_1_5_content,
  "module_2_1_content.md": module_2_1_content,
  "module_2_2_content.md": module_2_2_content,
  "module_2_3_content.md": module_2_3_content,
  "module_2_4_content.md": module_2_4_content,
  "module_3_1_AB_content.md": module_3_1_AB_content,
  "module_3_2_AB_content.md": module_3_2_AB_content,
  "module_3_3_AB_content.md": module_3_3_AB_content,
  "module_3_1_CS_content.md": module_3_1_CS_content,
  "module_3_2_CS_content.md": module_3_2_CS_content,
  "module_3_3_CS_content.md": module_3_3_CS_content,
  "module_3_1_CY_content.md": module_3_1_CY_content,
  "module_3_2_CY_content.md": module_3_2_CY_content,
  "module_3_3_CY_content.md": module_3_3_CY_content,
  "module_3_1_DS_content.md": module_3_1_DS_content,
  "module_3_2_DS_content.md": module_3_2_DS_content,
  "module_3_3_DS_content.md": module_3_3_DS_content,
  "module_3_1_ENT_content.md": module_3_1_ENT_content,
  "module_3_2_ENT_content.md": module_3_2_ENT_content,
  "module_3_3_ENT_content.md": module_3_3_ENT_content,
  "module_3_1_FA_content.md": module_3_1_FA_content,
  "module_3_2_FA_content.md": module_3_2_FA_content,
  "module_3_3_FA_content.md": module_3_3_FA_content,
  "module_3_1_GM_content.md": module_3_1_GM_content,
  "module_3_2_GM_content.md": module_3_2_GM_content,
  "module_3_3_GM_content.md": module_3_3_GM_content,
  "module_3_1_HR_content.md": module_3_1_HR_content,
  "module_3_2_HR_content.md": module_3_2_HR_content,
  "module_3_3_HR_content.md": module_3_3_HR_content,
  "module_3_1_OMS_content.md": module_3_1_OMS_content,
  "module_3_2_OMS_content.md": module_3_2_OMS_content,
  "module_3_3_OMS_content.md": module_3_3_OMS_content,
  "module_4_1_AB_content.md": module_4_1_AB_content,
  "module_4_2_AB_content.md": module_4_2_AB_content,
  "module_4_1_CS_content.md": module_4_1_CS_content,
  "module_4_2_CS_content.md": module_4_2_CS_content,
  "module_4_1_CY_content.md": module_4_1_CY_content,
  "module_4_2_CY_content.md": module_4_2_CY_content,
  "module_4_1_DS_content.md": module_4_1_DS_content,
  "module_4_2_DS_content.md": module_4_2_DS_content,
  "module_4_1_ENT_content.md": module_4_1_ENT_content,
  "module_4_2_ENT_content.md": module_4_2_ENT_content,
  "module_4_1_FA_content.md": module_4_1_FA_content,
  "module_4_2_FA_content.md": module_4_2_FA_content,
  "module_4_1_GM_content.md": module_4_1_GM_content,
  "module_4_2_GM_content.md": module_4_2_GM_content,
  "module_4_1_HR_content.md": module_4_1_HR_content,
  "module_4_2_HR_content.md": module_4_2_HR_content,
  "module_4_1_OMS_content.md": module_4_1_OMS_content,
  "module_4_2_OMS_content.md": module_4_2_OMS_content,
  "module_5_1_AB_content.md": module_5_1_AB_content,
  "module_5_1_CS_content.md": module_5_1_CS_content,
  "module_5_1_CY_content.md": module_5_1_CY_content,
  "module_5_1_DS_content.md": module_5_1_DS_content,
  "module_5_1_ENT_content.md": module_5_1_ENT_content,
  "module_5_1_FA_content.md": module_5_1_FA_content,
  "module_5_1_GM_content.md": module_5_1_GM_content,
  "module_5_1_HR_content.md": module_5_1_HR_content,
  "module_5_1_OMS_content.md": module_5_1_OMS_content,
  "ai_module_1_foundations_content.md": ai_module_1_foundations_content,
  "ai_module_2_architectures_content.md": ai_module_2_architectures_content,
  "ai_module_3_perception_content.md": ai_module_3_perception_content,
  "ai_module_4_planning_content.md": ai_module_4_planning_content,
  "ai_module_5_action_content.md": ai_module_5_action_content,
  "ai_module_6_memory_content.md": ai_module_6_memory_content,
  "ai_module_7_evaluation_content.md": ai_module_7_evaluation_content,
  "ai_module_8_deployment_future_content.md": ai_module_8_deployment_future_content,
  "mgmt_intro_evolution.md": mgmt_intro_evolution,
  "mgmt_intro_functions.md": mgmt_intro_functions,
  "mgmt_intro_skills.md": mgmt_intro_skills,
  "lead_found_styles.md": lead_found_styles,
  "lead_found_motivation.md": lead_found_motivation,
  "lead_found_comm.md": lead_found_comm,
  "agile_scrum_manifesto.md": agile_scrum_manifesto,
  "agile_scrum_roles.md": agile_scrum_roles,
  "agile_scrum_events_artifacts.md": agile_scrum_events_artifacts,
  "agile_scrum_user_stories.md": agile_scrum_user_stories,
  "lean_think_principles.md": lean_think_principles,
  "lean_think_waste.md": lean_think_waste,
  "python_ds_numpy.md": python_ds_numpy,
  "python_ds_pandas.md": python_ds_pandas,
  "python_ds_viz.md": python_ds_viz,
  "python_ds_sklearn.md": python_ds_sklearn,
};

// --- Content Parsing ---

// A more robust function to parse module content into lessons
const parseContentToLessons = (content: string | undefined, moduleId: string, moduleTitle: string): Lesson[] => {
    // Guard against null, undefined, or non-string content
    if (!content || typeof content !== 'string' || !content.trim()) {
        return [{
            id: `l_${moduleId}_1`,
            title: moduleTitle,
            duration: '5 min',
            completed: false,
            type: 'reading',
            content: `Content for ${moduleTitle} is currently being developed.`,
            overview: `An introduction to ${moduleTitle}.`
        }];
    }

    // Split content by H2 headings. The regex uses a positive lookahead to keep the heading with its content.
    const sections = content.split(/(?=^##\s)/m).filter(s => s && s.trim() !== '');

    const lessons: { title: string, content: string }[] = [];

    if (sections.length === 0) {
        // No H2s found, treat the whole file as a single lesson, using H1 as title if present.
        const h1Match = content.match(/^#\s(.*)/m);
        const title = h1Match ? h1Match[1].trim() : moduleTitle;
        const lessonContent = content.trim();
        if (lessonContent) {
            lessons.push({ title, content: lessonContent });
        }
    } else {
        sections.forEach(section => {
            const lines = section.trim().split('\n');
            const firstLine = lines[0] || '';
            
            // Check if the section starts with an H2 heading
            if (firstLine.startsWith('##')) {
                const title = firstLine.replace(/^##\s*/, '').trim();
                const lessonContent = lines.slice(1).join('\n').trim();
                if (title && lessonContent) { // Only add if there is a title and content
                    lessons.push({ title, content: lessonContent });
                }
            } else {
                // This handles content before the first H2. We can treat it as an intro lesson.
                const h1Match = content.match(/^#\s(.*)/m);
                const title = h1Match ? h1Match[1].trim() : `${moduleTitle} - Introduction`;
                const lessonContent = section.trim();
                if (lessonContent) {
                    lessons.push({ title, content: lessonContent });
                }
            }
        });
    }
    
    // If after all parsing, we have no lessons, return a placeholder.
    if (lessons.length === 0) {
        return [{
            id: `l_${moduleId}_1`,
            title: moduleTitle,
            duration: '1 min',
            completed: false,
            type: 'reading',
            content: 'Content for this module is being processed.',
            overview: `An introduction to ${moduleTitle}.`
        }];
    }
    
    // Map the structured data to the final Lesson[] array
    return lessons.map((lesson, index) => ({
        id: `l_${moduleId}_${index + 1}`,
        title: lesson.title,
        duration: `${Math.max(5, Math.round(lesson.content.split(' ').length / 150))} min`,
        completed: Math.random() < 0.2, // Simulate some lessons being completed
        type: 'reading',
        content: lesson.content,
        overview: `An exploration of ${lesson.title}.`
    }));
};


// --- Data Hydration ---

// Hydrate the static course structure with the dynamically loaded content.
const populatedData: Field[] = course_data_structure.map(field => ({
    ...field,
    standaloneCourses: field.standaloneCourses.map(course => ({
        ...course,
        subCourses: course.subCourses.map(sc => {
            const content = contentMap[sc.filePath];
            return {
                ...sc,
                lessons: parseContentToLessons(content, sc.id, sc.title),
            };
        })
    }))
}));


export const courseData: Field[] = populatedData;

// --- Helper Functions ---

// Helper function to get all courses for the catalog page
export function getAllCourses() {
    const courses: any[] = [];
    courseData.forEach(field => {
        field.standaloneCourses.forEach(course => {
            const courseIcon = field.icon;
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
            const completedLessons = allLessons.length > 0 ? allLessons.filter(l => l.completed).length : 0;
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
