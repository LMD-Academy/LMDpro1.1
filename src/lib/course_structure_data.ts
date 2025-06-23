
// src/lib/course_structure_data.ts
// This file contains the static structure of the courses, which is then hydrated with content by course-data.ts
// It is separated to keep the main data file cleaner and focused on logic.

import { BookCopy, Brain, Briefcase, Building, GraduationCap, Users as UsersIcon, Zap } from "lucide-react";
import type { Field } from './types';

export const course_data_structure: Omit<Field, 'standaloneCourses'> & { standaloneCourses: Omit<Field['standaloneCourses'][0], 'subCourses'> & { subCourses: Omit<Field['standaloneCourses'][0]['subCourses'][0], 'lessons'>[] }[] }[] = [
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
          { id: "mod_1_1", title: "Introduction to Business & Management Principles", filePath: "module_1_1_content.md", overview: "Introduces basic business structures, the purpose of business, differentiates management from leadership, outlines key business functions, explains vision/mission/values, PESTLE analysis, and organizational culture basics.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz.md"},
          { id: "mod_1_1_ar", title: "مقدمة في مبادئ الأعمال والإدارة (Arabic)", filePath: "module_1_1_content_ar.md", overview: "يقدم هياكل الأعمال الأساسية، والغرض من الأعمال، ويميز الإدارة عن القيادة، ويحدد وظائف الأعمال الرئيسية، ويشرح الرؤية / الرسالة / القيم، وتحليل PESTLE، وأساسيات الثقافة التنظيمية.", difficulty: "Beginner", length: "3-4 hours", language: "Arabic", quizPath: "EducationalMaterial/Quizzes/Module_1_1_Quiz_ar.md" },
          { id: "mod_1_2", title: "Fundamentals of Professional Communication", filePath: "module_1_2_content.md", overview: "Covers types of communication (verbal, non-verbal, written), active listening, basic presentation skills, business email etiquette, and teamwork fundamentals.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_2_Quiz.md" },
          { id: "mod_1_3", title: "Basic Finance & Operations Concepts", filePath: "module_1_3_content.md", overview: "Explains fundamental financial terms (revenue, cost, profit), basic budgeting, Key Performance Indicators (KPIs), common daily operational tasks, customer focus in operations, and an introduction to process thinking.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_3_Quiz.md" },
          { id: "mod_1_4", title: "Introduction to Sales, Marketing & Customer Service", filePath: "module_1_4_content.md", overview: "Defines sales and marketing roles, outlines the basic customer journey and sales process steps, introduces market segmentation concepts, and emphasizes customer service excellence and rapport building.", difficulty: "Beginner", length: "3-4 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_4_Quiz.md" },
          { id: "mod_1_5", title: "Technology & Data in the Modern Workplace", filePath: "module_1_5_content.md", overview: "Highlights the role of technology in business, common business software, basic data concepts (types, privacy, security), and fundamental digital literacy skills.", difficulty: "Beginner", length: "2-3 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_5_Quiz.md" },
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
          { id: "mod_2_1", title: "Effective Management & Leadership Styles", filePath: "module_2_1_content.md", overview: "Analyzes leadership theories, situational leadership, motivation techniques, performance management, delegation, and team cohesion.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_1_Quiz.md"},
          { id: "mod_2_2", title: "Business Communication & Negotiation", filePath: "module_2_2_content.md", overview: "Develops advanced presentation skills, report writing, managing difficult conversations, negotiation principles, and conflict resolution.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_2_Quiz.md"},
          { id: "mod_2_3", title: "Financial Acumen & Operational Efficiency", filePath: "module_2_3_content.md", overview: "Focuses on interpreting financial statements, budgeting processes, analyzing KPIs, process mapping, and risk management.", difficulty: "Intermediate", length: "4-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_3_Quiz.md"},
          { id: "mod_2_4", title: "Problem Solving & Decision Making", filePath: "module_2_4_content.md", overview: "Covers structured problem-solving, Root Cause Analysis (RCA), decision-making biases, and group decision-making.", difficulty: "Intermediate", length: "3-5 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_4_Quiz.md"},
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
        { id: "mod_3_1_ab", title: "Agile Methodologies & Frameworks (Scrum, Kanban, Lean)", filePath: "module_3_1_AB_content.md", overview: "Explores the Agile Manifesto, Scrum framework, Kanban principles, Lean thinking, and scaling Agile.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_ab", title: "Product Ownership & Backlog Management", filePath: "module_3_2_AB_content.md", overview: "Covers the Product Owner role, backlog refinement, prioritization, user stories, and release planning.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_3_ab", title: "Agile Coaching & Facilitation", filePath: "module_3_3_AB_content.md", overview: "Details the Agile Coach role, facilitation techniques, and coaching skills for individuals and teams.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "CS_L3", title: "Computer Science Specialization L3", overview: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking.", difficulty: "Professional", length: "25-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CS_Exam.md", subCourses: [
        { id: "mod_3_1_cs", title: "Programming Fundamentals (Python Focus)", filePath: "module_3_1_CS_content.md", overview: "Covers Python syntax, data types, control structures, functions, and an intro to OOP.", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_2_cs", title: "Data Structures & Algorithms I", filePath: "module_3_2_CS_content.md", overview: "Introduces ADTs, Big O notation, linear/non-linear data structures, and basic sorting/searching algorithms.", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_3_cs", title: "OS & Networking Fundamentals", filePath: "module_3_3_CS_content.md", overview: "Explains OS concepts (processes, memory), and networking fundamentals (OSI/TCP/IP models, protocols).", difficulty: "Professional", length: "9-10 hours", language: "English"},
      ] },
      { id: "CY_L3", title: "Cybersecurity Specialization L3", overview: "Foundation of cybersecurity principles, common threats, network security fundamentals, and basic cryptography.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CY_Exam.md", subCourses: [
        { id: "mod_3_1_cy", title: "Introduction to Cybersecurity & Threats", filePath: "module_3_1_CY_content.md", overview: "Covers the CIA Triad, common threats, threat actors, and risk management basics.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_2_cy", title: "Network Security Fundamentals", filePath: "module_3_2_CY_content.md", overview: "Explores firewalls, IDS/IPS, network segmentation (DMZs, VLANs), wireless security, and VPNs.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_cy", title: "Cryptography Basics & Applications", filePath: "module_3_3_CY_content.md", overview: "Introduces symmetric/asymmetric encryption, hashing, digital signatures, PKI, and SSL/TLS.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "DS_L3", title: "Data Science Specialization L3", overview: "Core Python data science libraries, data analysis, visualization, and an introduction to machine learning concepts and algorithms.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [
        { id: "mod_3_1_ds", title: "Data Science Fundamentals & Python Programming", filePath: "module_3_1_DS_content.md", overview: "Defines Data Science, its lifecycle, and key skills. Covers Python and introduces NumPy and Pandas.", difficulty: "Professional", length: "7-8 hours", language: "English" },
        { id: "mod_3_2_ds", title: "Data Analysis & Visualization", filePath: "module_3_2_DS_content.md", overview: "Explores EDA using Pandas and covers visualization principles with Matplotlib and Seaborn.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_ds", title: "Introduction to Machine Learning", filePath: "module_3_3_DS_content.md", overview: "Introduces ML concepts, workflow, and basic algorithms (KNN, Linear Regression, K-Means) with Scikit-learn.", difficulty: "Professional", length: "6-8 hours", language: "English" },
      ] },
      { id: "ENT_L3", title: "Entrepreneurship Specialization L3", overview: "Developing entrepreneurial mindset, business modeling, Lean Startup methodology, and startup financial management.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_ENT_Exam.md", subCourses: [
        { id: "mod_3_1_ent", title: "Entrepreneurial Mindset & Opportunity Recognition", filePath: "module_3_1_ENT_content.md", overview: "Defines the entrepreneurial mindset and explores techniques for identifying and validating business opportunities.", difficulty: "Professional", length: "6-8 hours", language: "English"},
        { id: "mod_3_2_ent", title: "Business Modeling & Lean Startup Methodology", filePath: "module_3_2_ENT_content.md", overview: "Covers the Business Model Canvas, Lean Startup principles (Build-Measure-Learn), MVP, and pivoting.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_ent", title: "Startup Funding & Financial Management", filePath: "module_3_3_ENT_content.md", overview: "Explores startup funding sources, valuation basics, term sheets, financial projections, and key startup metrics.", difficulty: "Professional", length: "7-8 hours", language: "English"},
      ] },
      { id: "FA_L3", title: "Finance and Accounting Specialization L3", overview: "Advanced financial statement analysis, budgeting, forecasting, variance analysis, and corporate finance fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_FA_Exam.md", subCourses: [
        { id: "mod_3_1_fa", title: "Advanced Financial Statement Analysis", filePath: "module_3_1_FA_content.md", overview: "In-depth analysis of financial statements, key ratios, common-size analysis, and DuPont analysis.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_fa", title: "Budgeting, Forecasting, and Variance Analysis", filePath: "module_3_2_FA_content.md", overview: "Developing comprehensive budgets, forecasting techniques, variance analysis, and flexible budgeting.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_fa", title: "Corporate Finance & Valuation Basics", filePath: "module_3_3_FA_content.md", overview: "Introduces capital budgeting, WACC, financing decisions, valuation methods, and working capital management.", difficulty: "Professional", length: "8-10 hours", language: "English"},
      ] },
      { id: "GM_L3", title: "General Management and Leadership Specialization L3", overview: "Strategic management, business planning, organizational behavior, change management, and project management fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_GM_Exam.md", subCourses: [
        { id: "mod_3_1_gm", title: "Strategic Management & Business Planning", filePath: "module_3_1_GM_content.md", overview: "Applies strategic analysis frameworks (SWOT, PESTLE, Porter's Five Forces), the Business Model Canvas, and competitive analysis.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_gm", title: "Organizational Behavior & Change Management", filePath: "module_3_2_GM_content.md", overview: "Explores individual/group behavior, organizational culture, and models for leading and managing change.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_gm", title: "Project Management Fundamentals", filePath: "module_3_3_GM_content.md", overview: "Covers the project lifecycle, planning techniques (WBS, Gantt), risk and stakeholder management, and Agile vs. Waterfall.", difficulty: "Professional", length: "8-10 hours", language: "English"},
      ] },
      { id: "HR_L3", title: "Human Resources Specialization L3", overview: "Covers talent acquisition, performance management, employee development, employee relations, and labor law basics.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_HR_Exam.md", subCourses: [
        { id: "mod_3_1_hr", title: "Talent Acquisition & Management", filePath: "module_3_1_HR_content.md", overview: "Details strategic workforce planning, job analysis, recruitment strategies, structured interviewing, and onboarding.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_hr", title: "Performance Management & Employee Development", filePath: "module_3_2_HR_content.md", overview: "Explores the performance management cycle, SMART goals, constructive feedback, appraisal methods, and L&D methodologies.", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_3_hr", title: "Employee Relations & Labor Law Basics", filePath: "module_3_3_HR_content.md", overview: "Focuses on positive employee relations, conflict/discipline management, and foundational awareness of labor laws.", difficulty: "Professional", length: "9-10 hours", language: "English"},
      ] },
      { id: "OMS_L3", title: "Online Marketing and Sales Specialization L3", overview: "Digital marketing strategy, content marketing, SEO optimization, social media marketing, CRM systems, and marketing automation.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_OMS_Exam.md", subCourses: [
        { id: "mod_3_1_oms", title: "Digital Marketing Strategy & Channels", filePath: "module_3_1_OMS_content.md", overview: "Covers digital marketing strategy, the marketing funnel, customer journey mapping, and key channels (SEO, SEM, SMM, Email).", difficulty: "Professional", length: "7-9 hours", language: "English"},
        { id: "mod_3_2_oms", title: "Content Marketing & SEO Optimization", filePath: "module_3_2_OMS_content.md", overview: "Details content strategy, keyword research, on-page SEO, off-page SEO, and content distribution.", difficulty: "Professional", length: "8-10 hours", language: "English"},
        { id: "mod_3_3_oms", title: "CRM & Marketing Automation", filePath: "module_3_3_OMS_content.md", overview: "Explains CRM systems, marketing automation platforms, lead nurturing workflows, and integration strategies.", difficulty: "Professional", length: "8-10 hours", language: "English"},
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
        { id: "mod_4_1_ab", title: "Scaling Agile & Lean Portfolio Management", filePath: "module_4_1_AB_content.md", overview: "Explores challenges of scaling, details of SAFe, LeSS, Nexus, Scrum@Scale, and Lean Portfolio Management.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_1_AB_Assessment.md"},
        { id: "mod_4_2_ab", title: "Agile Leadership & Organizational Agility", filePath: "module_4_2_AB_content.md", overview: "Focuses on the Agile leadership mindset, fostering an Agile culture, and designing Agile-supportive structures.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Assessments/Module_4_2_AB_Assessment.md"},
      ] },
      { id: "CS_L4", title: "Computer Science Advanced L4", overview: "Delving into advanced algorithms, complexity theory, distributed systems, and cloud computing architectures.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CS_Exam.md", subCourses: [
        { id: "mod_4_1_cs", title: "Advanced Algorithms & Complexity", filePath: "module_4_1_CS_content.md", overview: "Covers dynamic programming, greedy algorithms, NP-completeness, and advanced data structures.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_cs", title: "Distributed Systems & Cloud Computing", filePath: "module_4_2_CS_content.md", overview: "Explores distributed systems principles, cloud models (IaaS, PaaS, SaaS), and containerization (Docker, Kubernetes).", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "CY_L4", title: "Cybersecurity Advanced L4", overview: "Mastering advanced network security, modern cryptography, offensive security techniques, and incident response strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CY_Exam.md", subCourses: [
        { id: "mod_4_1_cy", title: "Advanced Network Security & Cryptography", filePath: "module_4_1_CY_content.md", overview: "Details Zero Trust architecture, advanced security devices (NGFWs, WAFs), modern crypto, and PKI design.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_cy", title: "Offensive Security, Threat Hunting & Incident Response", filePath: "module_4_2_CY_content.md", overview: "Covers penetration testing, threat hunting, incident response frameworks, and digital forensics.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "DS_L4", title: "Data Science Advanced L4", overview: "Advanced machine learning, AI, Big Data technologies, and leveraging cloud platforms for data science.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_DS_Exam.md", subCourses: [
        { id: "mod_4_1_ds", title: "Advanced Machine Learning & AI", filePath: "module_4_1_DS_content.md", overview: "Explores ensemble methods, SVMs, deep learning (CNNs, RNNs), and NLP foundations.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_ds", title: "Big Data Technologies & Cloud Platforms", filePath: "module_4_2_DS_content.md", overview: "Covers Hadoop, Spark, NoSQL databases, stream processing, and using cloud platforms for Big Data.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "ENT_L4", title: "Entrepreneurship Advanced L4", overview: "Strategies for scaling ventures, managing growth, advanced financing, and planning exit strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_ENT_Exam.md", subCourses: [
        { id: "mod_4_1_ent", title: "Scaling Ventures & Growth Strategies", filePath: "module_4_1_ENT_content.md", overview: "Addresses challenges of scaling, growth models, international expansion, and managing culture during growth.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_ent", title: "Advanced Finance & Exit Strategies", filePath: "module_4_2_ENT_content.md", overview: "Covers later-stage financing, complex term sheets, M&A, and preparing for exits (IPO vs. acquisition).", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "FA_L4", title: "Finance and Accounting Advanced L4", overview: "Advanced topics in investment management, portfolio theory, corporate finance, and risk management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_FA_Exam.md", subCourses: [
        { id: "mod_4_1_fa", title: "Investment Management & Portfolio Theory", filePath: "module_4_1_FA_content.md", overview: "Explores MPT, CAPM, APT, asset classes, and portfolio performance evaluation.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_fa", title: "Advanced Corporate Finance & Risk Management", filePath: "module_4_2_FA_content.md", overview: "Covers advanced capital budgeting, capital structure theory, dividend policy, restructuring, and ERM.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "GM_L4", title: "General Management and Leadership Advanced L4", overview: "Advanced strategic management, innovation, global leadership, executive decision-making, and crisis leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_GM_Exam.md", subCourses: [
        { id: "mod_4_1_gm", title: "Advanced Strategic Management & Innovation", filePath: "module_4_1_GM_content.md", overview: "Explores Blue Ocean Strategy, scenario planning, dynamic capabilities, and innovation management.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Advanced_Strategic_Analysis_Frameworks_Quiz.md"},
        { id: "mod_4_2_gm", title: "Executive Decision Making & Crisis Leadership", filePath: "module_4_2_GM_content.md", overview: "Covers advanced decision models, cognitive biases, crisis leadership, and ethical considerations.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/02_Cognitive_Biases_in_Executive_Judgment_Quiz.md"},
      ] },
      { id: "HR_L4", title: "Human Resources Advanced L4", overview: "Strategic HR management, workforce planning, HR analytics, organizational development, and change leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_HR_Exam.md", subCourses: [
        { id: "mod_4_1_hr", title: "Strategic HR Management & Workforce Planning", filePath: "module_4_1_HR_content.md", overview: "Focuses on SHRM, advanced workforce planning, HR analytics, and HR's role in M&A.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_hr", title: "Organizational Development & Change Leadership", filePath: "module_4_2_HR_content.md", overview: "Covers advanced OD theories, designing complex interventions, and leading large-scale change.", difficulty: "Senior", length: "10-14 hours", language: "English"},
      ] },
      { id: "OMS_L4", title: "Online Marketing and Sales Advanced L4", overview: "Advanced digital marketing strategies, sophisticated PPC/SEO, content ecosystems, sales leadership, and strategic sales management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_OMS_Exam.md", subCourses: [
        { id: "mod_4_1_oms", title: "Advanced Digital Marketing Strategies", filePath: "module_4_1_OMS_content.md", overview: "Details advanced SEO, sophisticated PPC, content ecosystems, influencer marketing ROI, and attribution modeling.", difficulty: "Senior", length: "10-14 hours", language: "English"},
        { id: "mod_4_2_oms", title: "Strategic Sales Management & Leadership", filePath: "module_4_2_OMS_content.md", overview: "Covers strategic sales planning, forecasting, territory/quota design, compensation plans, and KAM strategies.", difficulty: "Senior", length: "10-14 hours", language: "English"},
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
        { id: "mod_5_1_ab", title: "Enterprise Agility & Business Transformation", filePath: "module_5_1_AB_content.md", overview: "Focuses on formulating the vision for business agility, designing adaptive structures, and leading cultural shifts.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Introduction_Extending_Agility_Across_the_Enterprise_Quiz.md"},
      ] },
      { id: "CS_L5_CAP", title: "Computer Science Executive Capstone L5", overview: "Formulating enterprise technology strategy, leading digital transformation, and governing innovation at an executive (CTO/CIO) level.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CS_Assessment.md", subCourses: [
        { id: "mod_5_1_cs", title: "Executive Leadership in Technology Strategy & Innovation", filePath: "module_5_1_CS_content.md", overview: "Covers developing tech strategy, evaluating emerging tech, and leading digital transformation.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "CY_L5_CAP", title: "Cybersecurity Executive Capstone L5", overview: "Leading enterprise cybersecurity strategy, risk management, and fostering a security-aware culture from an executive perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CY_Assessment.md", subCourses: [
        { id: "mod_5_1_cy", title: "Executive Leadership in Cybersecurity & Risk Management", filePath: "module_5_1_CY_content.md", overview: "Focuses on formulating cyber strategy, integrating with ERM, and communicating risk to the board.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "DS_L5_CAP", title: "Data Science Executive Capstone L5", overview: "Strategic leadership in enterprise AI, building data-driven culture, and governing scalable, ethical AI deployment from a CDAO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_DS_Assessment.md", subCourses: [
        { id: "mod_5_1_ds", title: "Strategic Leadership in Data Science & AI", filePath: "module_5_1_DS_content.md", overview: "Covers developing enterprise AI strategy, managing AI portfolios, MLOps, and establishing AI ethics.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "ENT_L5_CAP", title: "Entrepreneurship Executive Capstone L5", overview: "Advanced entrepreneurial leadership, navigating hyper-growth, complex financial/exit strategies, and ecosystem engagement for venture leaders.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_ENT_Assessment.md", subCourses: [
        { id: "mod_5_1_ent", title: "Entrepreneurial Leadership & Ecosystem Strategy", filePath: "module_5_1_ENT_content.md", overview: "Focuses on advanced leadership for scaling, ecosystem strategy, late-stage fundraising, and exit architecture.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "FA_L5_CAP", title: "Finance and Accounting Executive Capstone L5", overview: "Formulating enterprise financial strategy, leading complex capital allocation, advanced risk management, and executive financial governance from a CFO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_FA_Assessment.md", subCourses: [
        { id: "mod_5_1_fa", title: "Executive Financial Strategy & Governance", filePath: "module_5_1_FA_content.md", overview: "Covers enterprise financial strategy, capital allocation, capital structure, and investor relations.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "GM_L5_CAP", title: "General Management and Leadership Executive Capstone L5", overview: "Leading global organizations, C-suite strategic thinking, large-scale transformation, and upholding executive-level governance and ethics.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_GM_Exam.md", subCourses: [
        { id: "mod_5_1_gm", title: "Global Leadership & C-Suite Strategy", filePath: "module_5_1_GM_content.md", overview: "Synthesizes leading complex global organizations, C-suite corporate strategy, and executive communication.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_The_Global_Leadership_Imperative_Quiz.md"},
      ] },
      { id: "HR_L5_CAP", title: "Human Resources Executive Capstone L5", overview: "Formulating enterprise human capital strategy, leading talent and culture in transformation, and executive HR leadership from a CHRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_HR_Assessment.md", subCourses: [
        { id: "mod_5_1_hr", title: "Strategic Human Capital & Executive Leadership", filePath: "module_5_1_HR_content.md", overview: "Focuses on human capital strategy, executive talent management, succession planning, and DEI as a strategic imperative.", difficulty: "Executive", length: "20-30 hours", language: "English"},
      ] },
      { id: "OMS_L5_CAP", title: "Online Marketing and Sales Executive Capstone L5", overview: "Leading enterprise revenue strategy, digital transformation in GTM, and orchestrating omnichannel customer experiences from a CRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_OMS_Assessment.md", subCourses: [
        { id: "mod_5_1_oms", title: "Executive Leadership in Marketing & Sales Strategy", filePath: "module_5_1_OMS_content.md", overview: "Covers formulating revenue strategy, leading digital transformation in GTM, RevOps, and advanced analytics.", difficulty: "Executive", length: "20-30 hours", language: "English"},
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
          { id: "ai_module_1", title: "Foundations of Autonomous AI Agents", filePath: "ai_module_1_foundations_content.md", overview: "Explores the evolution from automation to autonomy, core architectural pillars, and the LLM's role.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_1_Quiz.md"},
          { id: "ai_module_2", title: "Designing Agentic Architectures", filePath: "ai_module_2_architectures_content.md", overview: "Covers architectural patterns, agent frameworks (LangChain), and industry examples.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_Quiz.md"},
          { id: "ai_module_3", title: "Perception and Understanding the Environment", filePath: "ai_module_3_perception_content.md", overview: "Details textual, visual (MLLM), and structured data perception for agents.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_3_Quiz.md"},
          { id: "ai_module_4", title: "Planning and Reasoning", filePath: "ai_module_4_planning_content.md", overview: "Focuses on task decomposition and advanced planning strategies like CoT, ToT, and ReAct.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_Quiz.md"},
          { id: "ai_module_5", title: "Action Execution and Tool Integration", filePath: "ai_module_5_action_content.md", overview: "Covers tool abstraction layers, core tools integration, and advanced GUI automation.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_5_Quiz.md"},
          { id: "ai_module_6", title: "Memory and Learning in Agents", filePath: "ai_module_6_memory_content.md", overview: "Explores short-term and long-term memory, RAG, and skill acquisition.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_6_Quiz.md"},
          { id: "ai_module_7", title: "Building and Evaluating Agentic Systems", filePath: "ai_module_7_evaluation_content.md", overview: "Practical workshop on building agents, evaluation metrics, and responsible AI.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_7_Quiz.md"},
          { id: "ai_module_8", title: "Deployment and Future Trends in AI Agents", filePath: "ai_module_8_deployment_future_content.md", overview: "Discusses deployment strategies, monitoring, and future trends like embodied AI.", difficulty: "Advanced", length: "5-7 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_8_Quiz.md"},
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
      { id: "MGMT_INTRO", title: "Introduction to Modern Management", overview: "Covers core management theories, functions (planning, organizing, leading, controlling), and essential skills for new managers. Explores the transition from individual contributor to manager.", difficulty: "Beginner", length: "12 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_MGMT_Exam.md", subCourses: [
        { id: "mgmt_intro_evolution", title: "The Evolution of Management Thought", filePath: "mgmt_intro_evolution.md", overview: "Traces the history of management theories from classical to contemporary ideas.", difficulty: "Beginner", length: "3 hours", language: "English"},
        { id: "mgmt_intro_functions", title: "Core Management Functions", filePath: "mgmt_intro_functions.md", overview: "Provides a deep dive into the POLC framework: Planning, Organizing, Leading, and Controlling.", difficulty: "Beginner", length: "5 hours", language: "English"},
        { id: "mgmt_intro_skills", title: "Essential Managerial Skills", filePath: "mgmt_intro_skills.md", overview: "Focuses on practical skills like communication, problem-solving, and time management.", difficulty: "Beginner", length: "4 hours", language: "English"},
      ] },
      { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", overview: "Explores various leadership styles, motivational theories, team dynamics, and communication strategies for inspiring and guiding teams.", difficulty: "Beginner", length: "10 hours", assessmentPath: "EducationalMaterial/Assessments/Level_1_LEAD_Exam.md", subCourses: [
        { id: "lead_found_styles", title: "Understanding Leadership Styles", filePath: "lead_found_styles.md", overview: "Introduces leadership styles, Situational Leadership®, and emotional intelligence.", difficulty: "Beginner", length: "3-4 hours", language: "English"},
        { id: "lead_found_motivation", title: "Motivating and Engaging Teams", filePath: "lead_found_motivation.md", overview: "Covers motivation theories and practical strategies for team engagement.", difficulty: "Beginner", length: "4 hours", language: "English"},
        { id: "lead_found_comm", title: "Effective Team Communication", filePath: "lead_found_comm.md", overview: "Develops team communication skills, including feedback and conflict resolution.", difficulty: "Beginner", length: "3 hours", language: "English"},
      ] },
    ]
  },
   {
    id: "AGILE_PM",
    name: "Agile Business and Project Management",
    overview: "Principles and practices for managing projects and businesses in an agile and adaptive manner.",
    icon: Zap,
    standaloneCourses: [
      { id: "AGILE_SCRUM", title: "Agile Project Management with Scrum", overview: "A comprehensive introduction to the Scrum framework for managing complex projects.", difficulty: "Intermediate", length: "15 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_AGILE_SCRUM_Exam.md", subCourses: [
        { id: "agile_scrum_manifesto", title: "Agile Manifesto and Principles", filePath: "agile_scrum_manifesto.md", overview: "Explores the core values and twelve principles of the Agile Manifesto.", difficulty: "Intermediate", length: "3 hours", language: "English"},
        { id: "agile_scrum_roles", title: "Scrum Roles and Responsibilities", filePath: "agile_scrum_roles.md", overview: "Details the accountabilities of the Product Owner, Scrum Master, and Developers.", difficulty: "Intermediate", length: "4 hours", language: "English"},
        { id: "agile_scrum_events_artifacts", title: "Scrum Events and Artifacts", filePath: "agile_scrum_events_artifacts.md", overview: "Covers the five Scrum events and three official Scrum artifacts.", difficulty: "Intermediate", length: "5 hours", language: "English"},
        { id: "agile_scrum_user_stories", title: "User Story Writing and Estimation", filePath: "agile_scrum_user_stories.md", overview: "Focuses on writing user stories and relative estimation with story points.", difficulty: "Intermediate", length: "3 hours", language: "English"},
      ] },
      { id: "LEAN_THINK", title: "Introduction to Lean Thinking", overview: "Core principles of Lean methodology, focusing on value creation, waste elimination, and continuous improvement.", difficulty: "Intermediate", length: "8 hours", assessmentPath: "EducationalMaterial/Assessments/Level_2_LEAN_THINK_Exam.md", subCourses: [
        { id: "lean_think_principles", title: "The Five Principles of Lean", filePath: "lean_think_principles.md", overview: "Explains the five core principles of Lean: Define Value, Map the Value Stream, Create Flow, Establish Pull, and Pursue Perfection.", difficulty: "Intermediate", length: "4 hours", language: "English"},
        { id: "lean_think_waste", title: "Identifying and Eliminating Waste (Muda)", filePath: "lean_think_waste.md", overview: "Defines 'waste' (Muda) and details the eight common types, providing practical techniques for identification and elimination.", difficulty: "Intermediate", length: "4 hours", language: "English"},
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
        { id: "python_ds_numpy", title: "Python Fundamentals Recap and NumPy", filePath: "python_ds_numpy.md", overview: "Reviews core Python and introduces NumPy for numerical computation.", difficulty: "Intermediate", length: "5 hours", language: "English"},
        { id: "python_ds_pandas", title: "Data Manipulation with Pandas", filePath: "python_ds_pandas.md", overview: "Focuses on Pandas for data analysis, covering Series, DataFrames, and data manipulation.", difficulty: "Intermediate", length: "7 hours", language: "English"},
        { id: "python_ds_viz", title: "Data Visualization with Matplotlib and Seaborn", filePath: "python_ds_viz.md", overview: "Covers data visualization principles and practical use of Matplotlib and Seaborn.", difficulty: "Intermediate", length: "6 hours", language: "English"},
        { id: "python_ds_sklearn", title: "Introduction to Machine Learning with Scikit-learn", filePath: "python_ds_sklearn.md", overview: "Introduces fundamental ML concepts and implementing basic algorithms with Scikit-learn.", difficulty: "Advanced", length: "7 hours", language: "English"},
      ] },
    ]
  },
];
