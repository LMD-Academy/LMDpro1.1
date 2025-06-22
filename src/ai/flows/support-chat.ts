'use server';

/**
 * @fileOverview An AI agent for LMDpro customer support.
 *
 * - supportChat - A function that takes a user's support query and returns a helpful response.
 * - SupportChatInput - The input type for the supportChat function.
 * - SupportChatOutput - The return type for the supportChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SupportChatInputSchema = z.object({
  query: z.string().describe('The user\'s support question.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('The previous conversation history.'),
});
export type SupportChatInput = z.infer<typeof SupportChatInputSchema>;

const SupportChatOutputSchema = z.object({
  response: z
    .string()
    .describe('A helpful and empathetic response to the user\'s support query.'),
});
export type SupportChatOutput = z.infer<typeof SupportChatOutputSchema>;

export async function supportChat(
  input: SupportChatInput
): Promise<SupportChatOutput> {
  return supportChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'supportChatPrompt',
  input: {schema: SupportChatInputSchema},
  output: {schema: SupportChatOutputSchema},
  prompt: `You are a friendly and helpful AI Customer Support Agent for LMDpro, an AI-powered e-learning platform.
Your knowledge base includes:
- Account issues: password resets are done via the "Forgot Password" link on the login page.
- Billing issues: users can manage their subscription and payment methods in their "Account Settings" under "Subscription & Billing".
- Course navigation: users can find courses in the "Course Catalog" and their progress in "My Learning".
- Resume builder: users can create, edit, and get AI optimization tips. PDF export is available.
- API keys: managed in "API Management" for eligible users.

Use the provided conversation history to maintain context. Be empathetic and provide clear, actionable advice.

{{#if history}}
Conversation History:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}
{{/if}}

User Query: {{{query}}}
`,
});

const supportChatFlow = ai.defineFlow(
  {
    name: 'supportChatFlow',
    inputSchema: SupportChatInputSchema,
    outputSchema: SupportChatOutputSchema,
  },
  async input => {
    const llmResponse = await prompt(input);
    return { response: llmResponse.output!.response };
  }
);
