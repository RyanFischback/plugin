// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// export async function getChatGPTResponse(message: string): Promise<string | null> {
//   try {
//     const response = await axios.post('https://api.openai.com/v1/engine/...',
//       {
//         prompt: message,
//         max_tokens: 64,
//         n: 1,
//         stop: ['\n']
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//         }
//       }
//     );
//     return response.data.choices[0].text.trim();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
import * as OpenAI from 'openai';


export async function generateCode(prompt: string): Promise<string | null> {
    const openai = new OpenAI(process.env.OPENAI_API_KEY);
    const promptWithCodeGeneration = `Generate code for: ${prompt}`;

  const response = await openai.complete({
    engine: 'text-davinci-002',
    prompt: promptWithCodeGeneration,
    maxTokens: 2048,
    temperature: 0.5,
    n: 1,
    stop: '\n',
  });

  const { choices } = response.data;
  if (!choices || choices.length === 0) {
    return null;
  }

  const generatedCode = choices[0].text.trim();

  // Check if the generated code looks reasonable
  if (!generatedCode || generatedCode.startsWith('Traceback')) {
    return null;
  }

  return generatedCode;
}