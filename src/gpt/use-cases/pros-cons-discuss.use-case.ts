import OpenAI from 'openai';
import { Stream } from 'openai/streaming';

interface Options {
  prompt: string;
  isStream: boolean;
}

export const prosConsDiscussUseCase = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt, isStream } = options;

  const response = await openai.chat.completions.create({
    stream: isStream,
    messages: [
      {
        role: 'system',
        content: `
          Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
          la respuesta debe de ser en formato markdown,
          los pros y contras deben de estar en una lista.
        `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo-1106',
    temperature: 0.3,
    max_tokens: 10,
  });

  if (response instanceof Stream) {
    return response;
  }

  return response.choices[0].message.content;
};
