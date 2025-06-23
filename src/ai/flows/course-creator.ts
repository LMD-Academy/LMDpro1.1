
'use server';

/**
 * @fileOverview An AI agent to create course outlines.
 *
 * - createCourseOutline - A function that takes an objective and generates a course plan.
 * - CreateCourseOutlineInput - The input type for the function.
 * - CreateCourseOutlineOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const CreateCourseOutlineInput = z.object({
  objective: z.string().describe('The high-level objective or description of the course to be created.'),
});
export type CreateCourseOutlineInput = z.infer<typeof CreateCourseOutlineInput>;

export const CreateCourseOutlineOutput = z.object({
  coursePlan: z
    .string()
    .describe(
      'A detailed course plan formatted in Markdown. It should include a course title, a brief overview, and a list of 3-5 relevant modules with their own titles and brief overviews.'
    ),
});
export type CreateCourseOutlineOutput = z.infer<typeof CreateCourseOutlineOutput>;


const prompt = ai.definePrompt({
  name: 'createCourseOutlinePrompt',
  input: {schema: CreateCourseOutlineInput},
  output: {schema: CreateCourseOutlineOutput},
  prompt: `You are an expert curriculum designer for an online learning platform called LMDpro.
Your task is to take a user's objective and design a structured, high-level course outline for them.
The output must be a single Markdown string.

The course plan must include:
1. A compelling course title.
2. A 2-3 sentence overview of the course.
3. A list of 3 to 5 relevant modules.
4. Each module must have a clear title and a 1-2 sentence overview.

User's Course Objective:
---
{{{objective}}}
---
`,
});

export const createCourseOutline = ai.defineFlow(
  {
    name: 'createCourseOutlineFlow',
    inputSchema: CreateCourseOutlineInput,
    outputSchema: CreateCourseOutlineOutput,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
