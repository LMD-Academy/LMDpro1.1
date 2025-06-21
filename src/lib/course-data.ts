
// src/lib/course-data.ts
import { BookCopy, Brain, Briefcase, Building, GraduationCap, Handshake, HelpCircle, Info, Lightbulb, Network, Settings2, ShieldCheck, User, Users as UsersIcon, Zap } from "lucide-react";
import React from 'react';

export interface SubCourse {
    id: string;
    title: string;
    filePath: string;
    overview: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional' | 'Senior' | 'Executive';
    length: string;
    language: string;
    quizPath?: string;
    lessons?: any[]; // For CourseViewPage display
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
          { id: "mod_2_1", title: "Effective Management & Leadership Styles", filePath: "EducationalMaterial/Modules/module_2_1_content.md", overview: "Analyzes leadership theories (trait, behavioral, contingency, transformational), situational leadership, motivation techniques, performance management fundamentals, effective delegation, and team cohesion strategies.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_1_Quiz.md" },
          { id: "mod_2_2", title: "Business Communication & Negotiation", filePath: "EducationalMaterial/Modules/module_2_2_content.md", overview: "Develops advanced presentation skills, professional report writing, strategies for managing difficult conversations, core negotiation principles (BATNA, ZOPA), conflict resolution strategies, and cross-cultural communication basics.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_2_Quiz.md" },
          { id: "mod_2_3", title: "Financial Acumen & Operational Efficiency", filePath: "EducationalMaterial/Modules/module_2_3_content.md", overview: "Focuses on interpreting financial statements (Income, Balance Sheet), budgeting processes, analyzing operational KPIs, basic process mapping for improvement, and introductory risk management in operations.", difficulty: "Intermediate", length: "4-5 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_3_Quiz.md" },
          { id: "mod_2_4", title: "Problem Solving & Decision Making", filePath: "EducationalMaterial/Modules/module_2_4_content.md", overview: "Covers structured problem-solving models, Root Cause Analysis (RCA), decision-making biases, idea generation and solution evaluation techniques, group decision-making, critical thinking, and basic data analysis for decisions.", difficulty: "Intermediate", length: "3-5 hours (15-20 pages)", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_2_4_Quiz.md" },
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
        { id: "mod_3_1_ab", title: "Agile Methodologies & Frameworks", filePath: "EducationalMaterial/Modules/module_3_1_AB_content.md", overview: "Explores the Agile Manifesto, Scrum, Kanban, Lean thinking, and an introduction to scaling.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_2_ab", title: "Product Ownership & Backlog Management", filePath: "EducationalMaterial/Modules/module_3_2_AB_content.md", overview: "Covers the Product Owner role, backlog refinement, prioritization methods, and writing user stories.", difficulty: "Professional", length: "6-8 hours", language: "English" },
        { id: "mod_3_3_ab", title: "Agile Coaching & Facilitation", filePath: "EducationalMaterial/Modules/module_3_3_AB_content.md", overview: "Details the Agile Coach role, facilitation techniques, coaching individuals/teams, and conflict resolution.", difficulty: "Professional", length: "7-8 hours", language: "English" },
      ] },
      { id: "CS_L3", title: "Computer Science Specialization L3", overview: "Core concepts in programming (Python), data structures, algorithms, operating systems, and computer networking.", difficulty: "Professional", length: "25-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CS_Exam.md", subCourses: [
        { id: "mod_3_1_cs", title: "Programming Fundamentals (Python)", filePath: "EducationalMaterial/Modules/module_3_1_CS_content.md", overview: "Covers algorithms, Python syntax, data structures, functions, and an introduction to OOP.", difficulty: "Professional", length: "8-10 hours", language: "English" },
        { id: "mod_3_2_cs", title: "Data Structures & Algorithms I", filePath: "EducationalMaterial/Modules/module_3_2_CS_content.md", overview: "Introduces ADTs, Big O notation, linear and non-linear data structures, sorting, searching, and recursion.", difficulty: "Professional", length: "8-10 hours", language: "English" },
        { id: "mod_3_3_cs", title: "OS & Networking Fundamentals", filePath: "EducationalMaterial/Modules/module_3_3_CS_content.md", overview: "Explains OS components, concurrency, network models, protocols, IP addressing, and basic network security.", difficulty: "Professional", length: "9-10 hours", language: "English" },
      ] },
      { id: "CY_L3", title: "Cybersecurity Specialization L3", overview: "Foundation of cybersecurity principles, common threats, network security fundamentals, and basic cryptography.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_CY_Exam.md", subCourses: [
        { id: "mod_3_1_cy", title: "Intro to Cybersecurity & Threats", filePath: "EducationalMaterial/Modules/module_3_1_CY_content.md", overview: "Covers the CIA Triad, common threats, vulnerability management, and foundational security controls.", difficulty: "Professional", length: "6-8 hours", language: "English" },
        { id: "mod_3_2_cy", title: "Network Security Fundamentals", filePath: "EducationalMaterial/Modules/module_3_2_CY_content.md", overview: "Explores firewalls, IDS/IPS, network segmentation, wireless security, VPNs, and secure network design.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_cy", title: "Cryptography Basics & Applications", filePath: "EducationalMaterial/Modules/module_3_3_CY_content.md", overview: "Introduces symmetric/asymmetric encryption, hashing, digital signatures, PKI basics, and applications like SSL/TLS.", difficulty: "Professional", length: "7-8 hours", language: "English" },
      ] },
      { id: "DS_L3", title: "Data Science Specialization L3", overview: "Core Python data science libraries, data analysis, visualization, and an introduction to machine learning.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [
        { id: "mod_3_1_ds", title: "Data Science Fundamentals & Python", filePath: "EducationalMaterial/Modules/module_3_1_DS_content.md", overview: "Defines Data Science, its lifecycle, and covers Python, NumPy, and Pandas for data manipulation.", difficulty: "Professional", length: "7-8 hours", language: "English" },
        { id: "mod_3_2_ds", title: "Data Analysis & Visualization", filePath: "EducationalMaterial/Modules/module_3_2_DS_content.md", overview: "Covers EDA using Pandas and visualization principles with Matplotlib and Seaborn.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_ds", title: "Introduction to Machine Learning", filePath: "EducationalMaterial/Modules/module_3_3_DS_content.md", overview: "Introduces ML concepts, workflow, and basic algorithms like KNN, Linear Regression, and K-Means with Scikit-learn.", difficulty: "Professional", length: "6-8 hours", language: "English" },
      ] },
      { id: "ENT_L3", title: "Entrepreneurship Specialization L3", overview: "Developing entrepreneurial mindset, business modeling, Lean Startup, and startup financial management.", difficulty: "Professional", length: "20-25 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_ENT_Exam.md", subCourses: [
        { id: "mod_3_1_ent", title: "Entrepreneurial Mindset & Opportunity", filePath: "EducationalMaterial/Modules/module_3_1_ENT_content.md", overview: "Defines the entrepreneurial mindset, theories of opportunity recognition, and idea validation techniques.", difficulty: "Professional", length: "6-8 hours", language: "English" },
        { id: "mod_3_2_ent", title: "Business Modeling & Lean Startup", filePath: "EducationalMaterial/Modules/module_3_2_ENT_content.md", overview: "Covers the Business Model Canvas, Lean Startup principles, MVP, customer development, and pivoting.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_ent", title: "Startup Funding & Financial Management", filePath: "EducationalMaterial/Modules/module_3_3_ENT_content.md", overview: "Explores funding sources, valuation basics, term sheets, financial projections, and key startup metrics.", difficulty: "Professional", length: "7-8 hours", language: "English" },
      ] },
      { id: "FA_L3", title: "Finance & Accounting Specialization L3", overview: "Advanced financial statement analysis, budgeting, forecasting, and corporate finance fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_FA_Exam.md", subCourses: [
        { id: "mod_3_1_fa", title: "Advanced Financial Statement Analysis", filePath: "EducationalMaterial/Modules/module_3_1_FA_content.md", overview: "In-depth analysis of financial statements, key ratios, common-size analysis, and DuPont analysis.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_2_fa", title: "Budgeting, Forecasting & Variance Analysis", filePath: "EducationalMaterial/Modules/module_3_2_FA_content.md", overview: "Covers developing budgets, forecasting techniques, detailed variance analysis, and flexible budgeting.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_fa", title: "Corporate Finance & Valuation Basics", filePath: "EducationalMaterial/Modules/module_3_3_FA_content.md", overview: "Introduces capital budgeting (NPV, IRR), WACC, financing decisions, and business valuation methods.", difficulty: "Professional", length: "8-10 hours", language: "English" },
      ] },
      { id: "GM_L3", title: "General Management & Leadership Specialization L3", overview: "Strategic management, organizational behavior, change management, and project management fundamentals.", difficulty: "Professional", length: "22-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_GM_Exam.md", subCourses: [
        { id: "mod_3_1_gm", title: "Strategic Management & Business Planning", filePath: "EducationalMaterial/Modules/module_3_1_GM_content.md", overview: "Applies SWOT, PESTLE, Porter's Five Forces, Business Model Canvas, and competitive analysis.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_2_gm", title: "Organizational Behavior & Change Management", filePath: "EducationalMaterial/Modules/module_3_2_GM_content.md", overview: "Explores individual/group behavior, organizational culture, and change management models (Lewin, Kotter).", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_gm", title: "Project Management Fundamentals", filePath: "EducationalMaterial/Modules/module_3_3_GM_content.md", overview: "Covers the project lifecycle, processes, scope, WBS, scheduling, risk, and stakeholder management.", difficulty: "Professional", length: "8-10 hours", language: "English" },
      ] },
      { id: "HR_L3", title: "Human Resources Specialization L3", overview: "Covers talent acquisition, performance management, employee development, employee relations, and labor law basics.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_HR_Exam.md", subCourses: [
        { id: "mod_3_1_hr", title: "Talent Acquisition & Management", filePath: "EducationalMaterial/Modules/module_3_1_HR_content.md", overview: "Details strategic workforce planning, job analysis, recruitment, interviewing, and onboarding.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_2_hr", title: "Performance Management & Employee Development", filePath: "EducationalMaterial/Modules/module_3_2_HR_content.md", overview: "Explores the performance cycle, goal setting, feedback, appraisal methods, and L&D methodologies.", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_3_hr", title: "Employee Relations & Labor Law Basics", filePath: "EducationalMaterial/Modules/module_3_3_HR_content.md", overview: "Focuses on positive employee relations, conflict/discipline management, and labor law fundamentals.", difficulty: "Professional", length: "9-10 hours", language: "English" },
      ] },
      { id: "OMS_L3", title: "Online Marketing & Sales Specialization L3", overview: "Digital marketing strategy, content marketing, SEO, social media, CRM, and marketing automation.", difficulty: "Professional", length: "23-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_3_OMS_Exam.md", subCourses: [
        { id: "mod_3_1_oms", title: "Digital Marketing Strategy & Channels", filePath: "EducationalMaterial/Modules/module_3_1_OMS_content.md", overview: "Covers digital strategy, marketing funnel, customer journey, and key channels (SEO, SEM, Social, Email).", difficulty: "Professional", length: "7-9 hours", language: "English" },
        { id: "mod_3_2_oms", title: "Content Marketing & SEO Optimization", filePath: "EducationalMaterial/Modules/module_3_2_OMS_content.md", overview: "Details content strategy, keyword research, on-page/off-page SEO, and content creation/distribution.", difficulty: "Professional", length: "8-10 hours", language: "English" },
        { id: "mod_3_3_oms", title: "CRM & Marketing Automation", filePath: "EducationalMaterial/Modules/module_3_3_OMS_content.md", overview: "Explains CRM systems, marketing automation, lead nurturing, and integrating these platforms.", difficulty: "Professional", length: "8-10 hours", language: "English" },
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
        { id: "mod_4_1_ab", title: "Scaling Agile & Lean Portfolio Management", filePath: "EducationalMaterial/Modules/module_4_1_AB_content.md", overview: "Explores SAFe, LeSS, Nexus, Scrum@Scale, and Lean Portfolio Management.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/Module_4_1_AB_Assessment.md" },
        { id: "mod_4_2_ab", title: "Agile Leadership & Organizational Agility", filePath: "EducationalMaterial/Modules/module_4_2_AB_content.md", overview: "Focuses on the Agile leadership mindset, fostering culture, coaching leaders, and designing for agility.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Assessments/Module_4_2_AB_Assessment.md" },
      ] },
      { id: "CS_L4", title: "Computer Science Advanced L4", overview: "Delving into advanced algorithms, complexity theory, distributed systems, and cloud computing architectures.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CS_Exam.md", subCourses: [
        { id: "mod_4_1_cs", title: "Advanced Algorithms & Complexity", filePath: "EducationalMaterial/Modules/module_4_1_CS_content.md", overview: "Covers dynamic programming, greedy algorithms, NP-completeness, and advanced data structures.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_cs", title: "Distributed Systems & Cloud Computing", filePath: "EducationalMaterial/Modules/module_4_2_CS_content.md", overview: "Explores distributed systems principles, cloud models (IaaS, PaaS, SaaS), containerization, and orchestration.", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "CY_L4", title: "Cybersecurity Advanced L4", overview: "Mastering advanced network security, modern cryptography, offensive security, and incident response strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_CY_Exam.md", subCourses: [
        { id: "mod_4_1_cy", title: "Advanced Network Security & Cryptography", filePath: "EducationalMaterial/Modules/module_4_1_CY_content.md", overview: "Details Zero Trust, advanced protocols (BGP, DNSSEC), NGFWs, WAFs, WPA3, ECC, and PKI design.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_cy", title: "Offensive Security & Incident Response", filePath: "EducationalMaterial/Modules/module_4_2_CY_content.md", overview: "Covers penetration testing, vulnerability management, threat hunting, incident response, and forensics.", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "DS_L4", title: "Data Science Advanced L4", overview: "Advanced machine learning, AI, Big Data technologies, and leveraging cloud platforms for data science.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_DS_Exam.md", subCourses: [
        { id: "mod_4_1_ds", title: "Advanced Machine Learning & AI", filePath: "EducationalMaterial/Modules/module_4_1_DS_content.md", overview: "Explores ensemble methods, SVMs, deep learning (CNNs, RNNs), NLP, and Reinforcement Learning.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_ds", title: "Big Data Technologies & Cloud Platforms", filePath: "EducationalMaterial/Modules/module_4_2_DS_content.md", overview: "Covers Hadoop, MapReduce, Spark, NoSQL, stream processing, and cloud ML platforms.", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "ENT_L4", title: "Entrepreneurship Advanced L4", overview: "Strategies for scaling ventures, managing growth, advanced financing, and planning exit strategies.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_ENT_Exam.md", subCourses: [
        { id: "mod_4_1_ent", title: "Scaling Ventures & Growth Strategies", filePath: "EducationalMaterial/Modules/module_4_1_ENT_content.md", overview: "Addresses challenges of scaling, growth models, international expansion, and managing culture during growth.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_ent", title: "Advanced Finance & Exit Strategies", filePath: "EducationalMaterial/Modules/module_4_2_ENT_content.md", overview: "Covers later-stage financing, complex term sheets, financial modeling for growth, and exit strategies (IPO vs. M&A).", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "FA_L4", title: "Finance & Accounting Advanced L4", overview: "Advanced topics in investment management, portfolio theory, corporate finance, and risk management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_FA_Exam.md", subCourses: [
        { id: "mod_4_1_fa", title: "Investment Management & Portfolio Theory", filePath: "EducationalMaterial/Modules/module_4_1_FA_content.md", overview: "Explores MPT, CAPM, investment strategies, portfolio construction, and behavioral finance.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_fa", title: "Advanced Corporate Finance & Risk Management", filePath: "EducationalMaterial/Modules/module_4_2_FA_content.md", overview: "Covers capital structure theory, dividend policy, corporate restructuring, ERM, and derivatives.", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "GM_L4", title: "General Management & Leadership Advanced L4", overview: "Advanced strategic management, innovation, global leadership, executive decision-making, and crisis leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_GM_Exam.md", subCourses: [
        { id: "mod_4_1_gm", title: "Advanced Strategic Management & Innovation", filePath: "EducationalMaterial/Modules/module_4_1_GM_content.md", overview: "Explores advanced strategic frameworks, corporate/global strategy, innovation management, and corporate governance.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Advanced_Strategic_Analysis_Frameworks_Quiz.md" },
        { id: "mod_4_2_gm", title: "Executive Decision Making & Crisis Leadership", filePath: "EducationalMaterial/Modules/module_4_2_GM_content.md", overview: "Covers advanced decision-making models, cognitive biases, crisis leadership, and ethical considerations.", difficulty: "Senior", length: "10-14 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/02_Cognitive_Biases_in_Executive_Judgment_Quiz.md" },
      ] },
      { id: "HR_L4", title: "Human Resources Advanced L4", overview: "Strategic HR management, workforce planning, HR analytics, organizational development, and change leadership.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_HR_Exam.md", subCourses: [
        { id: "mod_4_1_hr", title: "Strategic HR Management & Workforce Planning", filePath: "EducationalMaterial/Modules/module_4_1_HR_content.md", overview: "Focuses on SHRM, advanced workforce planning, HR analytics, talent management, and HR's role in M&A.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_hr", title: "Organizational Development & Change Management", filePath: "EducationalMaterial/Modules/module_4_2_HR_content.md", overview: "Covers advanced OD theories, designing complex OD interventions, leading large-scale change, and managing resistance.", difficulty: "Senior", length: "10-14 hours", language: "English" },
      ] },
      { id: "OMS_L4", title: "Online Marketing & Sales Advanced L4", overview: "Advanced digital marketing strategies, sophisticated PPC/SEO, sales leadership, and strategic sales management.", difficulty: "Senior", length: "20-28 hours", assessmentPath: "EducationalMaterial/Assessments/Level_4_OMS_Exam.md", subCourses: [
        { id: "mod_4_1_oms", title: "Advanced Digital Marketing Strategies", filePath: "EducationalMaterial/Modules/module_4_1_OMS_content.md", overview: "Details advanced SEO, sophisticated PPC strategies, content ecosystems, and attribution modeling.", difficulty: "Senior", length: "10-14 hours", language: "English" },
        { id: "mod_4_2_oms", title: "Strategic Sales Management & Leadership", filePath: "EducationalMaterial/Modules/module_4_2_OMS_content.md", overview: "Covers strategic sales planning, forecasting, territory management, compensation design, and KAM.", difficulty: "Senior", length: "10-14 hours", language: "English" },
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
        { id: "mod_5_1_ab", title: "Enterprise Agility & Business Transformation", filePath: "EducationalMaterial/Modules/module_5_1_AB_content.md", overview: "Focuses on formulating vision for enterprise agility, designing adaptive structures, leading cultural shifts, and implementing Lean Portfolio Management.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_Introduction_Extending_Agility_Across_the_Enterprise_Quiz.md" },
      ] },
      { id: "CS_L5_CAP", title: "Computer Science Executive Capstone L5", overview: "Formulating enterprise technology strategy, leading digital transformation, and governing innovation at an executive (CTO/CIO) level.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CS_Assessment.md", subCourses: [
        { id: "mod_5_1_cs", title: "Executive Leadership in Technology Strategy & Innovation", filePath: "EducationalMaterial/Modules/module_5_1_CS_content.md", overview: "Covers developing enterprise tech strategy, evaluating emerging tech, leading digital transformation, and governing architecture.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "CY_L5_CAP", title: "Cybersecurity Executive Capstone L5", overview: "Leading enterprise cybersecurity strategy, risk management, and fostering a security-aware culture from an executive perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_CY_Assessment.md", subCourses: [
        { id: "mod_5_1_cy", title: "Executive Leadership in Cybersecurity & Risk Management", filePath: "EducationalMaterial/Modules/module_5_1_CY_content.md", overview: "Focuses on formulating cyber strategy, designing resilient architectures, maturing security operations, and communicating risk to the board.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "DS_L5_CAP", title: "Data Science Executive Capstone L5", overview: "Strategic leadership in enterprise AI, building data-driven culture, and governing scalable, ethical AI deployment from a CDAO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_DS_Assessment.md", subCourses: [
        { id: "mod_5_1_ds", title: "Strategic Leadership in Data Science & AI", filePath: "EducationalMaterial/Modules/module_5_1_DS_content.md", overview: "Covers developing enterprise AI strategy, managing AI portfolios, ensuring ethical AI, and building data-driven culture.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "ENT_L5_CAP", title: "Entrepreneurship Executive Capstone L5", overview: "Advanced entrepreneurial leadership, navigating hyper-growth, complex financial/exit strategies, and ecosystem engagement for venture leaders.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_ENT_Assessment.md", subCourses: [
        { id: "mod_5_1_ent", title: "Entrepreneurial Leadership & Ecosystem Strategy", filePath: "EducationalMaterial/Modules/module_5_1_ENT_content.md", overview: "Focuses on leadership for scaling ventures, managing culture, late-stage fundraising, and architecting exits.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "FA_L5_CAP", title: "Finance & Accounting Executive Capstone L5", overview: "Formulating enterprise financial strategy, leading complex capital allocation, and executive financial governance from a CFO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_FA_Assessment.md", subCourses: [
        { id: "mod_5_1_fa", title: "Executive Financial Strategy & Governance", filePath: "EducationalMaterial/Modules/module_5_1_FA_content.md", overview: "Covers formulating financial strategy, capital allocation, advanced ERM, and the CFO's role in governance.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "GM_L5_CAP", title: "General Management & Leadership Executive Capstone L5", overview: "Leading global organizations, C-suite strategic thinking, large-scale transformation, and upholding executive-level governance and ethics.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_GM_Assessment.md", subCourses: [
        { id: "mod_5_1_gm", title: "Global Leadership & C-Suite Strategy", filePath: "EducationalMaterial/Modules/module_5_1_GM_content.md", overview: "Synthesizes leading complex global organizations, C-suite corporate strategy, navigating global trends, and executive communication.", difficulty: "Executive", length: "20-30 hours", language: "English", quizPath: "EducationalMaterial/Quizzes/01_The_Global_Leadership_Imperative_Quiz.md" },
      ] },
      { id: "HR_L5_CAP", title: "Human Resources Executive Capstone L5", overview: "Formulating enterprise human capital strategy, leading talent and culture in transformation, and executive HR leadership from a CHRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_HR_Assessment.md", subCourses: [
        { id: "mod_5_1_hr", title: "Strategic Human Capital & Executive Leadership", filePath: "EducationalMaterial/Modules/module_5_1_HR_content.md", overview: "Focuses on enterprise human capital strategy, executive talent management, strategic DEI, and the CHRO's role in governance.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
      { id: "OMS_L5_CAP", title: "Online Marketing & Sales Executive Capstone L5", overview: "Leading enterprise revenue strategy, digital transformation in GTM, and orchestrating omnichannel customer experiences from a CRO perspective.", difficulty: "Executive", length: "20-30 hours", assessmentPath: "EducationalMaterial/Assessments/Level_5_OMS_Assessment.md", subCourses: [
        { id: "mod_5_1_oms", title: "Executive Leadership in Marketing & Sales Strategy", filePath: "EducationalMaterial/Modules/module_5_1_OMS_content.md", overview: "Covers formulating enterprise revenue strategy, leading digital GTM transformation, and implementing RevOps.", difficulty: "Executive", length: "20-30 hours", language: "English" },
      ] },
    ]
  },
  {
      id: "TECH_DEV",
      name: "Technology Development",
      overview: "Courses on programming, software engineering, data science, and emerging technologies.",
      icon: BookCopy,
      standaloneCourses: [
        { id: "PYTHON_DS", title: "Python for Data Science", overview: "Learn to use Python and its powerful libraries (Pandas, NumPy, Matplotlib, Scikit-learn) for data analysis, visualization, and machine learning.", difficulty: "Intermediate", length: "25 hours (Approx. 75-100 pages total)", assessmentPath: "EducationalMaterial/Assessments/Level_3_DS_Exam.md", subCourses: [
            { id: "python_ds_numpy", title: "Python Fundamentals Recap and NumPy", filePath: "EducationalMaterial/Modules/python_ds_numpy.md", overview: "Reviews core Python concepts crucial for data science and introduces NumPy for efficient numerical computation, covering array creation, attributes, indexing, and basic operations.", difficulty: "Intermediate", length: "5 hours (15-20 pages)", language: "English" },
            { id: "python_ds_pandas", title: "Data Manipulation with Pandas", filePath: "EducationalMaterial/Modules/python_ds_pandas.md", overview: "Focuses on Pandas Series and DataFrames for data analysis, covering creation, indexing, filtering, cleaning, transformation, grouping, aggregation, and merging data.", difficulty: "Intermediate", length: "7 hours (15-20 pages)", language: "English" },
            { id: "python_ds_viz", title: "Data Visualization with Matplotlib and Seaborn", filePath: "EducationalMaterial/Modules/python_ds_viz.md", overview: "Covers data visualization principles and practical application of Matplotlib and Seaborn for creating various plots (histograms, scatter plots, bar charts, line plots) to explore and communicate data insights.", difficulty: "Intermediate", length: "6 hours (15-20 pages)", language: "English" },
            { id: "python_ds_sklearn", title: "Introduction to Machine Learning with Scikit-learn", filePath: "EducationalMaterial/Modules/python_ds_sklearn.md", overview: "Introduces fundamental ML concepts (supervised/unsupervised learning), the ML workflow, and implementing basic algorithms (KNN, Logistic Regression, Linear Regression, K-Means) with Scikit-learn, including data preprocessing and model evaluation.", difficulty: "Advanced", length: "7 hours (18-25 pages)", language: "English" },
        ] }
      ]
  },
  {
      id: "LEAD_MGMT_FUND",
      name: "Leadership and Management Fundamentals",
      overview: "Essential principles for effective leadership and management in today's dynamic business environment.",
      icon: UsersIcon,
      standaloneCourses: [
        { id: "MGMT_INTRO", title: "Introduction to Modern Management", overview: "Covers core management theories, functions (planning, organizing, leading, controlling), and essential skills for new managers. Explores the transition from individual contributor to manager.", difficulty: "Beginner", length: "12 hours (Approx. 45-60 pages total)", assessmentPath: "EducationalMaterial/Assessments/Level_1_MGMT_Exam.md", subCourses: [
            { id: "mgmt_intro_evolution", title: "The Evolution of Management Thought", filePath: "EducationalMaterial/Modules/mgmt_intro_evolution.md", overview: "Traces the history of management theories, from classical approaches like Scientific Management and Bureaucracy to contemporary ideas including Systems Theory and Contingency Theory.", difficulty: "Beginner", length: "3 hours (15-20 pages)", language: "English" },
            { id: "mgmt_intro_functions", title: "Core Management Functions", filePath: "EducationalMaterial/Modules/mgmt_intro_functions.md", overview: "Provides a deep dive into the POLC framework: Planning, Organizing, Leading, and Controlling.", difficulty: "Beginner", length: "5 hours (15-20 pages)", language: "English" },
            { id: "mgmt_intro_skills", title: "Essential Managerial Skills", filePath: "EducationalMaterial/Modules/mgmt_intro_skills.md", overview: "Focuses on developing practical skills crucial for managerial success, including communication, problem-solving, decision-making, and time management.", difficulty: "Beginner", length: "4 hours (15-20 pages)", language: "English" },
        ] },
        { id: "LEAD_FOUND", title: "Foundations of Effective Leadership", overview: "Explores various leadership styles, motivational theories, team dynamics, and communication strategies for inspiring and guiding teams.", difficulty: "Beginner", length: "10 hours (Approx. 45-60 pages total)", assessmentPath: "EducationalMaterial/Assessments/Level_1_LEAD_Exam.md", subCourses: [
            { id: "lead_found_styles", title: "Understanding Leadership Styles", filePath: "EducationalMaterial/Modules/lead_found_styles.md", overview: "Introduces classical and contemporary leadership styles, the Situational Leadership® model, and the role of emotional intelligence.", difficulty: "Beginner", length: "3 hours (15-20 pages)", language: "English" },
            { id: "lead_found_motivation", title: "Motivating and Engaging Teams", filePath: "EducationalMaterial/Modules/lead_found_motivation.md", overview: "Covers key theories of motivation and provides practical strategies for motivating individuals and creating an engaging team environment.", difficulty: "Beginner", length: "4 hours (15-20 pages)", language: "English" },
            { id: "lead_found_comm", title: "Effective Team Communication", filePath: "EducationalMaterial/Modules/lead_found_comm.md", overview: "Develops crucial team communication skills, including active listening, giving and receiving constructive feedback, and basic conflict resolution.", difficulty: "Beginner", length: "3 hours (15-20 pages)", language: "English" },
        ] }
      ]
  },
  {
      id: "AGILE_PM",
      name: "Agile Business and Project Management",
      overview: "Principles and practices for managing projects and businesses in an agile and adaptive manner.",
      icon: Zap,
      standaloneCourses: [
        { id: "AGILE_SCRUM", title: "Agile Project Management with Scrum", overview: "A comprehensive introduction to the Scrum framework, its roles, events, artifacts, and underlying principles for managing complex projects.", difficulty: "Intermediate", length: "15 hours (Approx. 55-75 pages total)", assessmentPath: "EducationalMaterial/Assessments/Level_2_AGILE_SCRUM_Exam.md", subCourses: [
            { id: "agile_scrum_manifesto", title: "Agile Manifesto and Principles", filePath: "EducationalMaterial/Modules/agile_scrum_manifesto.md", overview: "Explores the historical context, the four core values, and the twelve supporting principles of the Agile Manifesto.", difficulty: "Intermediate", length: "3 hours (10-15 pages)", language: "English" },
            { id: "agile_scrum_roles", title: "Scrum Roles and Responsibilities", filePath: "EducationalMaterial/Modules/agile_scrum_roles.md", overview: "Details the primary accountabilities of the Product Owner, Scrum Master, and Developers within the Scrum Team.", difficulty: "Intermediate", length: "4 hours (15-20 pages)", language: "English" },
            { id: "agile_scrum_events_artifacts", title: "Scrum Events and Artifacts", filePath: "EducationalMaterial/Modules/agile_scrum_events_artifacts.md", overview: "Covers the five Scrum events (Sprint, Planning, Daily Scrum, Review, Retrospective) and the three official artifacts.", difficulty: "Intermediate", length: "5 hours (15-20 pages)", language: "English" },
            { id: "agile_scrum_user_stories", title: "User Story Writing and Estimation", filePath: "EducationalMaterial/Modules/agile_scrum_user_stories.md", overview: "Focuses on techniques for writing effective user stories, defining acceptance criteria, and relative estimation with story points.", difficulty: "Intermediate", length: "3 hours (15-20 pages)", language: "English" },
        ] },
        { id: "LEAN_THINK", title: "Introduction to Lean Thinking", overview: "Core principles of Lean methodology, focusing on value creation, waste elimination, and continuous improvement.", difficulty: "Intermediate", length: "8 hours (Approx. 30-40 pages total)", assessmentPath: "EducationalMaterial/Assessments/Level_2_LEAN_THINK_Exam.md", subCourses: [
            { id: "lean_think_principles", title: "The Five Principles of Lean", filePath: "EducationalMaterial/Modules/lean_think_principles.md", overview: "Explains the five core principles of Lean: Define Value, Map the Value Stream, Create Flow, Establish Pull, and Pursue Perfection.", difficulty: "Intermediate", length: "4 hours (15-20 pages)", language: "English" },
            { id: "lean_think_waste", title: "Identifying and Eliminating Waste (Muda)", filePath: "EducationalMaterial/Modules/lean_think_waste.md", overview: "Defines 'waste' (Muda) and details the eight common types of waste, providing techniques for identification and elimination.", difficulty: "Intermediate", length: "4 hours (15-20 pages)", language: "English" },
        ] }
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
