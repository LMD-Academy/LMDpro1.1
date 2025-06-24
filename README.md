
# LMDpro - AI-Powered Learning & Career Platform

<div align="center">
  <p>
    An advanced, AI-driven agentic eLearning platform designed to revolutionize skill acquisition and career advancement through personalized, intelligent, and practical learning experiences.
  </p>
</div>

![LMDpro Dashboard Screenshot](https://placehold.co/1200x675.png?text=LMDpro+Dashboard)
_A preview of the LMDpro learner dashboard._

---

## About The Project

LMDpro is a next-generation eLearning platform built with a modern tech stack to provide a seamless and intelligent user experience. It leverages Google's Gemini models via the **Genkit** framework to offer a suite of AI-powered features, from dynamic course creation to personalized academic research and resume optimization.

The platform is designed with a "dual operating system" in mind:
*   A robust, content-rich **learning environment** for individual students and professionals.
*   A powerful **Identity and Access Management (IAM)** portal for team administrators to manage and track organizational learning.

## Key Features

- **🤖 AI-Powered Learning:**
  - **Personalized Learning Paths:** AI generates custom learning journeys based on user profiles, interests, and career goals.
  - **Dynamic Course Generation:** If a course doesn't exist in our catalog, our AI agent creates a new outline on-the-fly based on your search query.
  - **AI Research Assistant:** An integrated academic research agent to help users explore topics, find sources, and synthesize information.
  - **AI-Enhanced Course Player:** Features include AI-powered Q&A on lesson content and intelligent insights.

- **📄 Intelligent Resume Builder:**
  - Craft professional resumes with a clean, intuitive interface.
  - Import data from LinkedIn to get started quickly.
  - Automatically add skills acquired from completed LMDpro courses.
  - Leverage AI to optimize resume content based on a target job description, improving ATS compatibility.

- **🏢 IAM Portal for Teams:**
  - A dedicated dashboard for administrators to monitor team progress and engagement.
  - **AI Agentic Course Creator:** A unique chat-based interface where admins can instruct an autonomous AI agent to design new course structures.
  - Assign courses, track completion rates, and manage users within your organization.

- **Modern User Experience:**
  - Responsive, multi-column layout inspired by Google AI Studio and Firebase.
  - Light and Dark themes with animated gradient accents.
  - A fixed layout with independently scrolling content for a stable and professional feel.

## Screenshots

| Dashboard | Course Catalog | Resume Builder |
| :---: | :---: | :---: |
| ![Dashboard](https://placehold.co/1200x800.png?text=Dashboard) | ![Course Catalog](https://placehold.co/1200x800.png?text=Course+Catalog) | ![Resume Builder](https://placehold.co/1200x800.png?text=Resume+Builder) |

| IAM Course Creator | Pricing Page |
| :---: | :---: |
| ![IAM AI Course Creator](https://placehold.co/1200x800.png?text=IAM+Course+Creator) | ![Pricing Page](https://placehold.co/1200x800.png?text=Pricing+Page) |


## Tech Stack

This project is built with a modern, robust, and scalable technology stack:

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI Framework:** [Google Genkit](https://firebase.google.com/docs/genkit)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Authentication:** Firebase (simulated in this version)
- **Charts:** [Recharts](https://recharts.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/lmdpro.git
    cd lmdpro
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    - Create a `.env` file in the root of your project.
    - Add your Google AI API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```env
    GOOGLE_API_KEY=YOUR_API_KEY_HERE
    ```

### Running the Application

This project requires running two separate development servers: one for the Next.js frontend and one for the Genkit AI backend.

1.  **Start the Next.js development server:**
    Open a terminal and run:
    ```sh
    npm run dev
    ```
    This will start the main application, typically available at `http://localhost:3000`.

2.  **Start the Genkit development server:**
    Open a *second* terminal and run:
    ```sh
    npm run genkit:dev
    ```
    This starts the Genkit AI flows, typically available at `http://localhost:3500`. The Next.js app is configured to proxy AI requests to this server.

You can now access `http://localhost:3000` in your browser to see the application.

---
