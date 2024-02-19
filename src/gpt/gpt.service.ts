import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import { OrtographyDTO, ProsConsDiscussDTO } from './dtos';
import { orthograpgyCheckUseCase, prosConsDiscussUseCase } from './use-cases';

@Injectable()
export default class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  async orthograpyCheck({ prompt }: OrtographyDTO) {
    return await orthograpgyCheckUseCase(this.openai, { prompt });
  }

  async prosConsDiscusser({ prompt, stream: isStream }: ProsConsDiscussDTO) {
    return await prosConsDiscussUseCase(this.openai, { prompt, isStream });
  }
}
