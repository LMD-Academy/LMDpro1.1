
# LMDpro Application Documentation

## 1. Introduction

Welcome to the LMDpro AI eLearning Academy! This documentation provides an overview of the application's features, functionalities, and how to get started. Our platform is designed to offer a comprehensive learning experience in leadership, management, professional development, and technical skills, significantly enhanced by cutting-edge AI capabilities, including Google's Gemini models.

LMDpro is an advanced AI-driven agentic system. Our mission is to revolutionize skill acquisition and career advancement through personalized, intelligent, and practical learning experiences. We aim to create a direct correlation between your educational investment and tangible career growth.

## 2. Getting Started

### 2.1 Account Creation & Login
- **Unified Authentication:** LMDpro uses a single page for Login and Registration, accessible via the "Get Started Free" button on public pages or "/login" and "/register" routes.
    - **Registration:** New users can access the registration form by clicking the "Sign up" link on the login form. Provide your full name, email, and a password. Social login options (Google, Microsoft, Apple, GitHub, LinkedIn, X.com) are also available for quick registration.
    - **Login:** Existing users can log in using their email and password or through their linked social accounts. If you are on the registration form, click the "Sign in" link to switch back.
- **API Key (for AI features):** The application utilizes a backend-configured API key for its AI features. Users do not need to provide their own API key for general platform use. Developer API keys are managed separately in Account Settings for eligible subscription tiers.

### 2.2 Navigating the Interface

#### Public View (Before Login):
- **Homepage (`/`):** Provides an overview of LMDpro's offerings, featured courses, subscription tiers, testimonials, and key features.
- **Header (Public):** Contains links for "Explore Courses" (dropdown), "Pricing", "Docs & Guides", "About Us", and "Support". Login and "Get Started Free" buttons are prominent.
- **Footer (Public):** Contains links to important pages like About, Contact, Terms, Privacy, API Docs, Help Center, and social media.

#### Authenticated View (After Login - The App Shell):
The application interface is structured into three main columns, inspired by Google AI Studio and Firebase Studio:
1.  **Left Sidebar (Navigation):** Collapsible, icon-only by default, expands on hover or can be pinned open using a toggle button. Provides access to:
    *   **Dashboard:** Overview of your learning progress, recommendations, resume strength.
    *   **My Learning:** Access your ongoing, completed, and bookmarked courses.
    *   **Learning Paths:** Create and manage AI-generated personalized learning paths.
    *   **Course Catalog:** Browse and enroll in courses and learning paths.
    *   **Video Creation:** AI tool to generate educational video scripts and (conceptually) videos.
    *   **Resume Builder:** Create, AI-optimize, and export your resume.
    *   **Academic Research:** AI-powered research agent for exploring topics.
    *   **API Management:** Manage your LMDpro developer API keys.
    *   **App Documentation:** Access platform and course documentation (this section).
    *   **Account Settings:** Manage profile, security, subscription, payments, notifications.
    *   **Help & Support:** FAQs and support channels, including AI support.
2.  **Center Main Content Area:** Displays the currently selected page or feature. This area is scrollable and is where the primary interaction occurs.
3.  **Right Sidebar (Tools - Fixed, Narrow):**
    *   **AI Assistant:** Chat with LMDpro's AI for learning support, powered by Gemini.
    *   **Notepad:** Take notes that persist across sessions. Includes "Export Notes" and "Ask AI About Notes" features.
    *   **(At the bottom) AI Support Chat FAB:** Quick access to the AI Customer Service assistant (same as in Help & Support page).

The **Header Bar** (top of the main content area within the authenticated view) is fixed and contains:
*   **Sidebar Toggle:** Icon to toggle the pinned state of the left sidebar (on desktop).
*   **Search:** An icon that expands into a search field for global platform search.
*   **Notifications Bell:** For platform and course updates.
*   **Theme Switcher:** Toggle between light and dark themes.
*   **User Profile Dropdown:** Access to Profile, Account Settings, and Logout.

## 3. Core Features

### 3.1 Public Pages
- **Homepage (`/`):** Engaging overview with sections like Hero, Features, Course Highlights, Pricing Tiers, Testimonials, and Quick Links.
- **Login Page (`/login`):** Form for existing users to log in.
- **Register Page (`/register`):** Form for new users to create an account.
- **Pricing Page (`/pricing`):** Detailed information and comparison of all subscription tiers.
- **API Documentation Page (`/api-docs`):** Public-facing documentation for the LMDpro Developer API.
- **About Us Page (`/about`):** Information about LMDpro's mission, vision, and values.

### 3.2 Authenticated User Features

#### Dashboard (`/dashboard`)
- Personalized welcome message.
- Visual summary of learning progress (charts for completed/in-progress courses, skills acquired).
- AI-assessed resume strength indicator with optimization tips.
- AI-recommended courses tailored to user goals and activity.
- Quick links to ongoing courses.
- Activity feed showing recent achievements and system notifications.

#### My Learning (`/my-learning`)
- Track progress in enrolled courses and learning paths.
- Sections for "In Progress," "Completed" (with links to certificates - conceptual), and "Bookmarked" courses.

#### Learning Paths (`/learning-paths`)
- Form to input current/desired role, interests, and learning goals.
- AI generates a personalized learning path with suggested topics, resources, and LMDpro courses.
- Ability to view and save generated paths.

#### Course Catalog (`/courses`)
- Browse a comprehensive list of courses, learning paths, and specializations.
- Advanced filtering by category (Field, Level), difficulty, duration, and type.
- Search functionality.
- Toggle between grid and list view for courses.
- Each course card displays title, type, difficulty, duration, an icon, and a placeholder image with an AI hint.

#### Course View Page (`/courses/:id`)
- Immersive learning environment for a specific course.
- Main content area for video playback or reading material (conceptual placeholder).
- Navigation controls (Next/Prev lesson).
- Tabs for:
    - **Overview:** Lesson description, learning objectives, downloadable resources.
    - **Transcript:** Interactive transcript for video/audio content (conceptual).
    - **Q&A:** AI-powered Q&A related to the lesson content.
    - **AI Insights:** AI-generated summaries, key takeaways, and related concept explorations.
- Sidebar for module and lesson navigation within the course, showing progress and current lesson.
- Displays instructor details, course rating, and enrollment numbers.

#### Video Creation (`/video-creation`)
- Form to input video topic, language, and tone for AI script generation, or paste a custom script.
- Displays the generated/loaded script.
- Options to select a 3D animated avatar (conceptual placeholder with images).
- Option to upload a brand logo (conceptual).
- "Produce Video" button (placeholder for actual video generation).

#### Resume Builder (`/resume-builder`)
- Form to input/edit all resume sections (Personal Details, Summary, Experience, Education, Skills).
- Dynamic fields for adding/removing multiple experience, education, and skill entries.
- Button to import data from LinkedIn (conceptual, populates form with placeholder data).
- Button to add skills acquired from LMDpro courses (populates skill section with pre-defined LMDpro skills).
- Textarea to input a target job description for AI optimization.
- "Optimize with AI" button calls a Genkit flow to get suggestions and an improved resume draft.
- Displays AI suggestions and the improved draft.
- Option to apply AI draft to the form (conceptual).
- Template selector with visual previews of different resume styles.
- Live text preview of the resume content based on form data and selected template.
- "Export as PDF" button (simulated, generates a text file with "Made with LMDpro" watermark).

#### Academic Research (`/academic-research`)
- Chat interface for interacting with the AI Academic Research Agent.
- Users can ask about topics, subjects, or modules.
- AI provides summaries and identifies key sources (conceptual, simulates research).
- (Future: "Find Publications" and "Identify Trends" features).

#### API Management (`/api-management`)
- Information about LMDpro API tiers and pricing.
- Section to manage (view, generate, revoke) user's API keys (for eligible subscription plans).
- Links to full API documentation.

#### App Documentation (`/docs` - Authenticated View)
- Central hub for all platform documentation.
- Links to guides on features, content structure (AEM, hierarchy, assessments), API usage, and account help.
- Search functionality for documentation.
- Links to key policy documents (Terms, Privacy).

#### Account Settings (`/account`)
- Tabbed interface for:
    - **Profile:** Update full name, bio, LinkedIn URL. Email is read-only.
    - **Security:** Change password (with current/new/confirm fields and show/hide toggles). Placeholder for 2FA.
    - **Subscription & Payments:** View current plan, link to change plan (Pricing Page), cancel subscription (placeholder). Manage payment methods (add, remove, set default - simulated). View billing history (placeholder).
    - **Notifications:** Manage email and in-app notification preferences using switches.
    - **API Keys:** Links to the API Management page.

#### Help & Support (`/support`)
- **AI Support Chat:** Main feature, persistent conversation for instant help.
- **FAQ Section:** Accordion-style display of frequently asked questions.
- **Contact Information:** Email and phone for human support, with operating hours.

### 3.3 AI-Powered Features Summary
- **AI Assistant (Right Sidebar):** General learning support (Gemini).
- **Notepad AI Analysis (Right Sidebar):** Analyze notepad content (Gemini).
- **AI Course Generation (Course Catalog Search):** Dynamically creates course outlines if no match found.
- **Personalized Learning Paths (Learning Paths Page):** Genkit flow `generatePersonalizedLearningPath`.
- **Video Script Generation (Video Creation Page):** Genkit flow `generateVideoScript`.
- **Resume Optimization (Resume Builder Page):** Genkit flow `improveResume`.
- **AI Academic Research Agent (Academic Research Page):** Simulates AI research capabilities.
- **AI Q&A (Course View Page):** Answers questions about lesson content.
- **AI Insights (Course View Page):** Summaries, key takeaways for lessons.
- **AI Support Chatbot (Support Page & FAB):** Answers platform-related questions.

## 4. Styling and UI/UX Principles
- **Layout Inspiration:** Google AI Studio & Firebase Studio (multi-column, sidebars).
- **Responsiveness:** Mobile-first design for accessibility on all devices.
- **Animated Gradients:**
    - Subtle liquid gradients for backgrounds (light and dark themes).
    - Animated gradient for specific buttons and titles for emphasis.
    - Animated vibrant gradient outline for input fields on focus.
- **Fonts:** 'Space Grotesk' for headlines, 'Inter' for body text, 'Source Code Pro' for code.
- **Themes:** Light and Dark themes, user-selectable and saved in localStorage.
- **Icons:** Primarily `lucide-react` for consistency.
- **Components:** Utilizing ShadCN UI components, customized as needed.
- **User Experience:** Focus on clarity, intuitive navigation, minimizing cognitive load, and providing a professional, high-quality feel.

## 5. Subscription Tiers
LMDpro offers several tiers with progressively gated features:
- **Community (Free):** Latest Free Gemma Model, limited resume exports (watermarked), selection of free courses, community support.
- **Premium ($5.80/Month):** Latest Flash AI Models, unlimited resume exports (no watermark), full course catalog, AI-powered learning paths, priority AI support, Developer API access (generous free tier included).
- **Teams ($196/Month):** All Premium features, Latest Pro AI Models, team management dashboard, shared learning paths & brand kits, consolidated billing, team progress analytics, Teams API access.
- **Enterprise ($1960/Month):** All Teams features, Latest Pro AI Models or Custom Multi-Model options, SSO, dedicated account management, premium support & SLAs, advanced security audits, custom branding, full Enterprise API access.
- **Non-Profit & Students (Free):** Similar to Premium (Latest Flash AI Models, full course catalog, no watermark resume export post-verification), subject to annual verification.

## 6. LMDpro Developer API
- Robust, versioned API for programmatic access.
- Endpoints for personalized learning paths, video script generation, resume optimization.
- Separate API pricing tiers (Developer, Startup, Business, Enterprise Custom) detailed on `/api-management` and `/api-docs`.
- Authentication via Bearer tokens (API keys).

## 7. Educational Content Structure
- Detailed in `docs/course_structure.md` and `docs/system_structure.md` (AEM format).
- Hierarchy: Field > Standalone Course > Sub-Course (Module) > Lesson > Activity.
- AI generates content outlines based on these structures.

## 8. Future Enhancements (Conceptual)
- Full video generation from script (avatar selection, branding).
- Deeper LinkedIn data import and mapping.
- Interactive transcripts in course player.
- Advanced gamification elements (badges, points, leaderboards).
- Community forums.
- Payment processing integration (Stripe).
- Secure backend database for user data (Firestore).

This documentation serves as a guide to the L