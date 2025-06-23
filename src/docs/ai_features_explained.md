
# AI Features in LMDpro

LMDpro leverages advanced Artificial Intelligence, powered by Google's Gemini API family, to enhance your learning experience and provide dynamic content generation capabilities. This document explains some of the key AI-driven features you'll encounter.

## 1. AI-Powered Search & Dynamic Course Generation

LMDpro's search functionality is designed to help you find exactly what you're looking for. If you search for a course or topic that isn't currently in our extensive catalog, our AI steps in to assist you.

**How it Works:**

1.  **Initial Search:** When you enter a search query, the system first looks through our existing curated courses and content.
2.  **AI Course Creation (If No Match):** If a direct match isn't found, LMDpro utilizes the Gemini API to dynamically generate a new course outline tailored to your search query. This process involves:
    *   **Natural Language Processing (NLP):** The AI analyzes your search query to understand the underlying intent and subject matter.
    *   **Content Synthesis (Guided by LMDpro's Framework):** The AI draws upon its vast knowledge base to create a relevant and structured course. To ensure the generated content aligns with LMDpro's pedagogical standards, the AI is provided with specific system instructions derived from our internal guidelines on course structure and assessment design.
    *   **Course Outline Generation:** Based on your query and these guiding principles, the AI constructs a Field, a Standalone Course, and several Sub-Courses (Modules) with overviews, difficulties, and estimated lengths.
3.  **Integration:** The newly generated course structure is temporarily added to the course list for the current session.
4.  **Availability:** You will see a status message indicating that the AI is generating the course, and once complete, it will appear in the **Course Catalog**.

**Example:** If you search for "Ethical Considerations in Quantum Machine Learning," and no such course exists, the AI will attempt to create a course structure with relevant modules, guided by LMDpro's educational framework.

## 2. AI Assistant (Chat)

Our AI Assistant, available in the right sidebar of the authenticated application view, is powered by Gemini models. It's designed to:
*   Answer your questions about course content.
*   Explain complex concepts.
*   Summarize text or module content.
*   Provide general learning support and guidance.
*   Engage in conversational learning.

The AI Assistant leverages chat history to maintain context during your conversation.

## 3. AI-Enhanced Module View (Course Player)

Within the "Module View" where you engage with course content:
*   **Paragraph Audio (Text-to-Speech):** LMDpro provides a button that utilizes the browser's built-in speech synthesis capabilities to read the current paragraph aloud.
*   **AI Q&A:** Ask questions about the current module content, answered by AI.
*   **AI Insights:** Get AI-generated summaries, key takeaways, and related concept explorations for the current lesson.

## 4. Library & Research AI Tools

In the "Library & Research" section, when you load a sub-course or conduct research:
*   **AI Summary of Loaded Content:** Get a concise AI-generated summary of the full sub-course content using a Gemini model.
*   **Research Companion (AI-Powered):**
    *   **Find Publications:** Enter keywords, and the AI uses Google Search grounding via the Gemini API to find relevant scholarly articles and publications.
    *   **Identify Trends:** Based on your query or the found publications, the AI analyzes and identifies emerging themes and trends in the subject area.

## 5. Intelligent Resume Builder AI Features
*   **AI Suggestions:** After you input your resume details and a target job description, you can request AI-powered suggestions. A Gemini model will review your content and provide actionable tips to improve clarity, impact, and ATS (Applicant Tracking System) compatibility.
*   **Automatic Skill Integration:** Skills learned from completed LMDpro courses are identified. The system can add these to your resume and provide AI-generated, concise descriptions for each skill.

## 6. AI Agentic Course Creator (IAM Portal)
*   For administrators, located in the `/iam/course-creator` page.
*   This autonomous agent allows admins to instruct it to design new course structures, including modules and lesson outlines, by providing a high-level objective in a chat interface.

## 7. AI Customer Service Assistant
*   Located in the "Help & Support" page and as a FAB in the right sidebar.
*   This AI assistant is trained on LMDpro's FAQ, documentation, and common support issues to provide instant answers to technical, billing, or platform-related questions.

LMDpro is committed to leveraging AI responsibly to provide a rich, adaptive, and personalized learning journey.
