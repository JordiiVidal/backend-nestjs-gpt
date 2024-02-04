import { Injectable } from '@nestjs/common';
import { orthograpgyCheckUseCase } from './use-cases';
import { OrtographyDTO } from './dtos/ortrography.dto';
import OpenAI from 'openai';

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
}
