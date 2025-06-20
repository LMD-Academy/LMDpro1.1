# LMDpro Application Documentation

## 1. Introduction

Welcome to the LMDpro AI eLearning Academy! This documentation provides an overview of the application's features, functionalities, and how to get started. Our platform is designed to offer a comprehensive learning experience in leadership, management, professional development, and technical skills, significantly enhanced by cutting-edge AI capabilities, including Google's Gemini models.

## 2. Getting Started

### 2.1 Account Creation & Login
- **Unified Authentication:** LMDpro uses a single page for Login and Registration.
    - **Registration:** New users can access the registration form by clicking the "Sign Up" link on the login form. Provide your name, email, and a password. Social login options (Google, Microsoft, Apple, LinkedIn, GitHub, X.com) are also available for quick registration.
    - **Login:** Existing users can log in using their email and password or through their linked social accounts. If you are on the registration form, click the "Log In" link to switch back.
- **API Key:** The application utilizes a backend-configured API key for its AI features. Users do not need to provide their own API key.

### 2.2 Navigating the Interface
**Public View (Before Login):**
- **Homepage:** Provides an overview of LMDpro's offerings, featured courses, subscription tiers, and testimonials.
- **Header (Public):** Contains links for "Docs", "Pricing", and "Get Started" (for Login/Register). An account icon appears if logged in, leading to Dashboard/Account settings.

**Authenticated View (After Login):**
The application interface is structured into three main columns:
1.  **Left Sidebar (Navigation):** Collapsible, icon-only by default, expands on hover or can be fixed open. Provides access to:
    *   **Dashboard:** Overview of your learning progress, recommendations.
    *   **Course Catalog:** Browse and enroll in courses.
    *   **My Learning:** Access your ongoing and completed courses.
    *   **Resume Builder:** Create and refine your AI-enhanced resume.
    *   **Library & Research:** In-depth study and AI-powered research tools.
    *   **Documentation:** Access platform and course documentation.
    *   **API Access:** Information regarding LMDpro API for developers.
    *   **Settings:** Application and account settings.
    *   **Help & Support:** FAQs and support channels.
2.  **Center Main Content Area:** Displays the currently selected page or feature. This area is scrollable.
3.  **Right Sidebar (Tools):** Fixed, narrow column containing:
    *   **AI Assistant:** Chat with LMDpro's AI for learning support, powered by Gemini.
    *   **Notepad:** Take notes, export them, or ask the AI to analyze your notes.
    *   **Help FAB:** Quick access to the AI Customer Service assistant.

The **Header Bar** (top of the main content area) is fixed and contains a global search functionality and a profile icon with a dropdown menu for Profile & Resume, Account, and Settings.

## 3. Core Features

### 3.1 Public Pages
- **Homepage:** Engaging overview with sections like Hero, Features, Course Highlights, Pricing Tiers, Testimonials.
- **Pricing Page:** Detailed information on all subscription tiers (Community, Premium, Teams, Enterprise, Non-Profit & Students).
- **API Documentation & API Pricing:** Information for developers looking to use LMDpro's API.
- **Public Documentation:** Access to general platform documentation.

### 3.2 Authenticated User Features

#### Dashboard
- Displays user's learning statistics (e.g., overall progress, course completion charts).
- Lists ongoing courses, completed courses, and favorite courses.
- Shows AI-recommended courses based on user profile and learning history.
- Provides a snapshot of resume completeness.

#### Course Catalog
- Browse a comprehensive list of courses filterable by category, difficulty, duration, etc.
- View course details (overview, modules, instructor, level).
- Enroll in courses.
- **AI Course Generation:** If a search query doesn't match existing courses, the AI can dynamically generate a new course outline.

#### Module View (Course Player)
- Interactive learning experience with paragraph-by-paragraph content display.
- **AI Enhancements per Paragraph:**
    - **Paragraph Audio:** AI-generated narration (Text-to-Speech).
    - **Paragraph Illustration:** AI-generated relevant image (conceptual, using Imagen 3.0).
- Navigation controls (Next/Prev paragraph).
- Progress bar for the current module.
- **AI Q&A:** Ask questions about the current module content, answered by AI.

#### My Learning
- Track progress in enrolled courses.
- Access ongoing and completed courses easily.

#### Intelligent Resume Builder
- Import profile data from LinkedIn (conceptual placeholder).
- Manually input and edit resume sections (Summary, Experience, Education, Skills).
- **AI Suggestions:** Get AI-powered recommendations to improve resume content and ATS compatibility.
- **Automatic Skill Integration:** Skills acquired from completed LMDpro courses are automatically suggested and can be added to the resume with descriptions.
- Select resume templates (conceptual placeholder).
- Export resume as PDF with a "Made with LMDpro" watermark (conceptual placeholder).

#### Library and Academic Research
- Load full sub-course content for in-depth study.
- **AI Research Companion:**
    - **Find Publications:** Use AI (with Google Search grounding) to find relevant scholarly articles.
    - **Identify Trends:** AI analyzes found publications or user queries to identify emerging themes.
- **AI Summary:** Get an AI-generated summary of the loaded sub-course content.
- (Future: Discussion forum, AI Demos).

#### Documentation (Authenticated)
- Access detailed documentation about platform features, specific modules, and advanced topics like the LMDpro AEM (Advanced Educational Markdown) format.

#### Help & Support
- **FAQ Section:** Answers to common questions.
- **Contact Form:** For direct support inquiries.
- **AI Customer Service Assistant:** Integrated AI for instant help with technical or payment issues (accessible via FAB in the right column or within this page).

#### Account Settings
- Manage profile details (name, email).
- Change password.
- **Subscription Management:** View current plan, upgrade options, cancel subscription.
- **Payment Methods:** Add or update payment information.
- **API Keys:** (For Premium+ users) Generate and manage API keys for LMDpro services.

#### Application Settings
- **Appearance:** Switch between Light and Dark themes (controlled from header/profile).
- **Notifications:** Manage email and in-app notification preferences.
- **Accessibility:** Configure options for font size, contrast, etc. (conceptual).
- **Data & Privacy:** Manage data preferences, request data export or account deletion (conceptual).

### 3.3 AI-Powered Features (General)
- **AI Assistant:** (Right Sidebar) General purpose AI chat for learning support, explanations, powered by Gemini.
- **Notepad AI Analysis:** (Right Sidebar) Ask the AI to provide insights or elaborate on content written in the notepad.
- **AI Course Generation:** If a user searches for a course not in the catalog, LMDpro's AI, guided by pedagogical frameworks (conceptually from `course_structure.json` and `assessment_structure.md`), can dynamically generate a new course outline tailored to the query. This includes a Field, a Standalone Course, and several Sub-Courses (Modules) with overviews.

## 4. Subscription Tiers
LMDpro offers several tiers:
- **Community (Free):** Access to latest free Gemini model, limited resume exports, selection of free courses, community support.
- **Premium ($5.80/month):** Access to latest Gemini Flash model, unlimited resume exports, full course catalog, AI-powered learning paths, priority email support.
- **Teams ($196/month):** All Premium features, latest Gemini Pro model, team management dashboard, shared learning paths, consolidated billing, team progress analytics.
- **Enterprise ($1960/month):** All Teams features, latest Gemini Pro model or custom multi-model solutions, SSO integration, dedicated account management, premium support & SLAs, advanced security audits.
- **Non-Profit & Students (Free):** Similar to Premium (latest Gemini Flash model, full course catalog, unlimited resume exports), subject to annual verification.

## 5. LMDpro API
- For developers, institutions, and organizations.
- Programmatic access to LMDpro's AI capabilities and content (details in API Docs & API Pricing pages).

## 6. Technical Aspects
- **AI Integration:** Powered by Google's Gemini API suite.
- **Data Storage:** User data (profile, course progress) is stored locally in the browser's localStorage for this demonstration. In a production environment, this would be a secure backend database.
- **Responsive Design:** The application is designed for usability across various screen sizes.
- **Offline Functionality:** Basic offline support for viewing cached content and using the notepad. AI features require an internet connection.

## 7. Troubleshooting & Support
- Refer to the FAQ section in the "Help & Support" page.
- Utilize the AI Customer Service Assistant for instant help.
- Contact `support@lmdpro.ai` for further assistance.

Thank you for choosing LMDpro! We are committed to providing an innovative and effective learning experience.