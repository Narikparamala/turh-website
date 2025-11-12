'use server';

/**
 * @fileOverview A diagnostic AI agent for electronic devices.
 *
 * - aiDiagnosticTool - A function that handles the device diagnostic process.
 * - AiDiagnosticToolInput - The input type for the aiDiagnosticTool function.
 * - AiDiagnosticToolOutput - The return type for the aiDiagnosticTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDiagnosticToolInputSchema = z.object({
  problemDescription: z
    .string()
    .describe('A description of the problem the user is experiencing with their electronic device.'),
});
export type AiDiagnosticToolInput = z.infer<typeof AiDiagnosticToolInputSchema>;

const AiDiagnosticToolOutputSchema = z.object({
  potentialSolutions: z.string().describe('Potential solutions and troubleshooting steps for the described problem.'),
});
export type AiDiagnosticToolOutput = z.infer<typeof AiDiagnosticToolOutputSchema>;

export async function aiDiagnosticTool(input: AiDiagnosticToolInput): Promise<AiDiagnosticToolOutput> {
  return aiDiagnosticToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDiagnosticToolPrompt',
  input: {schema: AiDiagnosticToolInputSchema},
  output: {schema: AiDiagnosticToolOutputSchema},
  prompt: `You are an AI assistant specialized in diagnosing electronic device issues.

  Based on the user's description of the problem, provide potential solutions and troubleshooting steps.

  Problem Description: {{{problemDescription}}}`,
});

const aiDiagnosticToolFlow = ai.defineFlow(
  {
    name: 'aiDiagnosticToolFlow',
    inputSchema: AiDiagnosticToolInputSchema,
    outputSchema: AiDiagnosticToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
