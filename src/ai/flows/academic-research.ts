
'use server';

/**
 * @fileOverview An AI agent for academic research.
 *
 * - academicResearch - A function that takes a query and returns a summary and sources.
 * - AcademicResearchInput - The input type for the function.
 * - AcademicResearchOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const AcademicResearchInputSchema = z.object({
  query: z.string().describe('The research query from the user.'),
});
export type AcademicResearchInput = z.infer<typeof AcademicResearchInputSchema>;

const AcademicResearchOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the research findings related to the user\'s query.'
    ),
  sources: z.array(z.object({
    title: z.string().describe('The title of the source.'),
    url: z.string().url().describe('The URL of the source.'),
  })).describe('A list of credible sources used for the summary.'),
});
export type AcademicResearchOutput = z.infer<typeof AcademicResearchOutputSchema>;

export async function academicResearch(
  input: AcademicResearchInput
): Promise<AcademicResearchOutput> {
  return academicResearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'academicResearchPrompt',
  input: {schema: AcademicResearchInputSchema},
  output: {schema: AcademicResearchOutputSchema},
  prompt: `You are an expert AI Academic Research Agent for the LMDpro platform.
Your task is to take a user's query and conduct thorough, credible academic and web research.
Synthesize your findings into a concise, easy-to-understand summary.
You MUST also provide a list of 3-5 primary sources you used for your research, including their titles and URLs.
Prioritize academic journals, reputable news sources, and established educational websites.

User's Query:
"{{{query}}}"
`,
});

const academicResearchFlow = ai.defineFlow(
  {
    name: 'academicResearchFlow',
    inputSchema: AcademicResearchInputSchema,
    outputSchema: AcademicResearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
