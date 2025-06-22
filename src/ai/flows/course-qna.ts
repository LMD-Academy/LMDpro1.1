'use server';

/**
 * @fileOverview An AI agent to answer questions about specific course content.
 *
 * - courseQa - A function that takes a question and the relevant course content, and returns an answer.
 * - CourseQaInput - The input type for the courseQa function.
 * - CourseQaOutput - The return type for the courseQa function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseQaInputSchema = z.object({
  question: z.string().describe('The user\'s question about the course content.'),
  context: z
    .string()
    .describe(
      'The text content of the course lesson or module the user is asking about.'
    ),
});
export type CourseQaInput = z.infer<typeof CourseQaInputSchema>;

const CourseQaOutputSchema = z.object({
  answer: z
    .string()
    .describe(
      'A clear and concise answer to the user\'s question, based *only* on the provided context.'
    ),
});
export type CourseQaOutput = z.infer<typeof CourseQaOutputSchema>;

export async function courseQa(input: CourseQaInput): Promise<CourseQaOutput> {
  return courseQaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'courseQaPrompt',
  input: {schema: CourseQaInputSchema},
  output: {schema: CourseQaOutputSchema},
  prompt: `You are an expert AI teaching assistant for the LMDpro platform.
Your task is to answer the user's question based strictly on the provided course content context.
Do not use any external knowledge. If the answer cannot be found in the context, state that clearly.

Course Content Context:
---
{{{context}}}
---

User's Question:
"{{{question}}}"
`,
});

const courseQaFlow = ai.defineFlow(
  {
    name: 'courseQaFlow',
    inputSchema: CourseQaInputSchema,
    outputSchema: CourseQaOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
