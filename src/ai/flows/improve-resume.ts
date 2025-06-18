'use server';

/**
 * @fileOverview AI agent for improving a resume based on a job description.
 *
 * - improveResume - A function that takes a resume and job description, and returns suggestions for improvement.
 * - ImproveResumeInput - The input type for the improveResume function.
 * - ImproveResumeOutput - The return type for the improveResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveResumeInputSchema = z.object({
  resume: z
    .string()
    .describe('The text content of the resume to be improved.'),
  jobDescription: z
    .string()
    .describe('The text content of the job description to match.'),
});
export type ImproveResumeInput = z.infer<typeof ImproveResumeInputSchema>;

const ImproveResumeOutputSchema = z.object({
  improvedResume: z.string().describe('The improved resume content.'),
  suggestions: z.string().describe('Specific suggestions for improvement.'),
});
export type ImproveResumeOutput = z.infer<typeof ImproveResumeOutputSchema>;

export async function improveResume(input: ImproveResumeInput): Promise<ImproveResumeOutput> {
  return improveResumeFlow(input);
}

const improveResumePrompt = ai.definePrompt({
  name: 'improveResumePrompt',
  input: {schema: ImproveResumeInputSchema},
  output: {schema: ImproveResumeOutputSchema},
  prompt: `You are an expert resume writer. Given the following resume and job description, provide an improved resume and specific suggestions to better match the job description.

Resume:
{{{resume}}}

Job Description:
{{{jobDescription}}}

Improved Resume:
{{output improvedResume}}

Suggestions:
{{output suggestions}}`,
});

const improveResumeFlow = ai.defineFlow(
  {
    name: 'improveResumeFlow',
    inputSchema: ImproveResumeInputSchema,
    outputSchema: ImproveResumeOutputSchema,
  },
  async input => {
    const {output} = await improveResumePrompt(input);
    return output!;
  }
);
