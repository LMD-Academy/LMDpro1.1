'use server';

/**
 * @fileOverview An AI agent for academic research assistance.
 *
 * - academicResearch - A function that takes a research query and returns a detailed answer with sources.
 * - AcademicResearchInput - The input type for the academicResearch function.
 * - AcademicResearchOutput - The return type for the academicResearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AcademicResearchInputSchema = z.object({
  query: z.string().describe('The academic research query from the user.'),
});
export type AcademicResearchInput = z.infer<typeof AcademicResearchInputSchema>;

const AcademicResearchOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A detailed, well-structured summary answering the research query.'
    ),
  sources: z
    .array(
      z.object({
        title: z.string().describe('The title of the source.'),
        url: z.string().url().describe('The URL of the source.'),
      })
    )
    .describe('A list of 2-3 relevant sources found on the web.'),
});
export type AcademicResearchOutput = z.infer<
  typeof AcademicResearchOutputSchema
>;

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
Your task is to provide a comprehensive, well-structured answer to the user's query.
You must also provide a list of 2-3 credible sources from the web that support your answer.

User Query: {{{query}}}
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
