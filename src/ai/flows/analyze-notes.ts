
'use server';

/**
 * @fileOverview An AI agent to analyze user's notes.
 *
 * - analyzeNotes - A function that takes notes as text and provides insights.
 * - AnalyzeNotesInput - The input type for the analyzeNotes function.
 * - AnalyzeNotesOutput - The return type for the analyzeNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeNotesInputSchema = z.object({
  notes: z.string().describe('The text notes written by the user.'),
});
export type AnalyzeNotesInput = z.infer<typeof AnalyzeNotesInputSchema>;

const AnalyzeNotesOutputSchema = z.object({
  analysis: z
    .string()
    .describe(
      'A concise analysis of the user\'s notes, identifying key themes, potential questions, or suggesting next steps.'
    ),
});
export type AnalyzeNotesOutput = z.infer<typeof AnalyzeNotesOutputSchema>;

export async function analyzeNotes(
  input: AnalyzeNotesInput
): Promise<AnalyzeNotesOutput> {
  return analyzeNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeNotesPrompt',
  input: {schema: AnalyzeNotesInputSchema},
  output: {schema: AnalyzeNotesOutputSchema},
  prompt: `You are an insightful AI Learning Assistant for the LMDpro platform.
Your task is to analyze the user's notes and provide a concise, helpful analysis.
Focus on identifying key themes, summarizing the main points, asking thought-provoking questions, or suggesting a logical next step for their learning or project.

User's Notes:
---
{{{notes}}}
---
`,
});

const analyzeNotesFlow = ai.defineFlow(
  {
    name: 'analyzeNotesFlow',
    inputSchema: AnalyzeNotesInputSchema,
    outputSchema: AnalyzeNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
