
# LMDpro Application Documentation

## 1. Introduction

Welcome to the LMDpro AI eLearning Academy! This documentation provides an overview of the application's features, functionalities, and how to get started. Our platform is designed to offer a comprehensive learning experience in leadership, management, professional development, and technical skills, significantly enhanced by cutting-edge AI capabilities, including Google's Gemini models.

LMDpro is an advanced AI-driven agentic system. Our mission is to revolutionize skill acquisition and career advancement through personalized, intelligent, and practical learning experiences. We aim to create a direct correlation between your educational investment and tangible career growth.

## 2. Getting Started

### 2.1 Account Creation & Login
- **Unified Authentication with Roles:** LMDpro uses a single authentication page with tabs for "Learner" and "Admin / IAM".
    - **Registration (`/register`):** New users can create an account, selecting their intended role via the tabs. Social login options are also available.
    - **Login (`/login`):** Existing users can log in. If an admin logs in on the learner tab, they receive a notification. Users with dual roles will see an option to switch views in their profile menu.
- **Admin Access:** The "Admin / IAM" portal is for users on Teams or Enterprise plans to manage their organization's learning.

### 2.2 Navigating the Interface

#### Public View (Before Login):
- **Homepage (`/`):** Provides an overview of LMDpro's offerings, featured courses, and subscription tiers.
- **Header (Public):** Contains links for "Explore Courses", "Pricing", "Docs", and "About Us".
- **Footer (Public):** Contains links to important pages like About, Contact, Terms, Privacy, and Help Center.

#### Authenticated View (After Login - The App Shell):
The interface is structured into three main columns:
1.  **Left Sidebar (Navigation):** Collapsible, icon-only by default, expands on hover or can be pinned open. Provides access to all user-facing features.
2.  **Center Main Content Area:** Displays the currently selected page. This is the primary interaction area.
3.  **Right Sidebar (Tools - Fixed, Icon-Only):** A fixed vertical bar below the header containing icons for:
    *   **AI Assistant:** Opens a popover with the AI chat for learning support.
    *   **Notepad:** Opens a popover with a persistent notepad for taking and saving notes.
    *   **Help & Support:** Opens a popover with quick links to the support page.

The **Header Bar** (top of the main content area) is fixed and contains:
*   A sidebar toggle, global search, notifications, theme switcher, and a user profile dropdown.
*   **Admin Switch:** For users with dual roles, the profile dropdown contains a "Switch to Admin/Learner View" option.

## 3. Core Features

### 3.1 Authenticated User Features

#### Dashboard (`/dashboard`)
- Personalized welcome message and visual summary of learning progress.
- AI-assessed resume strength indicator.
- AI-recommended courses.
- Quick links to ongoing courses and recent activity feed.

#### IAM Dashboard (`/iam`) - *Admin Only*
- A dedicated dashboard for administrators on Teams/Enterprise plans.
- Features include:
    - **Team Progress Tracking:** Monitor learning progress for all team members.
    - **Course Assignments:** Assign specific courses or learning paths to individuals or groups.
    - **User Management:** Add or remove team members.
    - **Reporting & Analytics:** View detailed reports on team engagement, skill acquisition, and course completion rates.

#### Course Catalog (`/courses`)
- Browse all available courses with advanced filtering and search.
- **AI Course Generation:** If a search query yields no results, our AI can generate a relevant course outline on the fly.

#### Course View Page (`/courses/:id`)
- An immersive, paragraph-by-paragraph learning experience.
- **AI Enhancements:**
    - **Paragraph Audio:** Uses browser's text-to-speech to read lesson content cleanly (markdown is stripped).
    - **AI Q&A:** Ask questions about the lesson content.
    - **AI Insights:** Get AI-generated summaries and key takeaways for each lesson.

#### Resume Builder (`/resume-builder`)
- Craft a professional resume with AI assistance.
- Import data from LinkedIn (conceptual), add LMDpro skills automatically.
- Get AI-powered suggestions based on a target job description to improve content and ATS compatibility.
- Select from multiple templates and export to PDF.

### 3.2 AI-Powered Features Summary
- **AI Assistant (Right Sidebar):** General learning support.
- **Notepad AI Analysis (Right Sidebar):** Get insights on your notes.
- **AI Course Generation (Course Catalog):** Dynamically creates course outlines.
- **AI Course Creator (IAM Portal):** An autonomous agent that helps admins design course structures.
- **AI Q&A (Course View):** Answers questions about lesson content.
- **AI Support Chatbot (Support Page):** Answers platform-related questions.

## 4. Styling and UI/UX Principles
- **Layout:** Inspired by Google AI Studio & Firebase Studio (multi-column, refined sidebars).
- **Responsiveness:** Mobile-first design.
- **Animated Gradients:** Used for backgrounds, buttons, and titles for a modern feel.
- **Themes:** User-selectable Light and Dark themes.

## 5. Subscription Tiers
LMDpro offers several tiers:
- **Community (Free):** Basic access for individuals.
- **Premium:** Full access for individual power users.
- **Teams:** All Premium features plus collaborative tools and the IAM Dashboard.
- **Enterprise:** Tailored solutions for large organizations, including advanced security and custom integrations.
- **Non-Profit & Students:** Special access to core features with verification.

## 6. Educational Content Structure
- Detailed in `docs/course_structure.md`.
- Hierarchy: Field > Standalone Course > Sub-Course (Module) > Lesson.
- Content is authored in a custom, AI-friendly Advanced Educational Markdown (AEM) format.

For further details, please explore the specific documentation sections or contact our support team.
