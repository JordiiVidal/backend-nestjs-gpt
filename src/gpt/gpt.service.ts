import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import OrtographyDTO from './dtos/ortrography.dto';
import ProsConsDiscussDTO from './dtos/pros-cons-discuss.dto';
import { orthograpgyCheckUseCase, prosConsDiscussUseCase } from './use-cases';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  async orthograpyCheck(ortographyDTO: OrtographyDTO) {
    return await orthograpgyCheckUseCase(this.openai, {
      prompt: ortographyDTO.prompt,
    });
  }

  async prosConsDiscusser({ prompt }: ProsConsDiscussDTO) {
    return await prosConsDiscussUseCase(this.openai, { prompt });
  }
}
