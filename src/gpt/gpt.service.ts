import { Injectable } from '@nestjs/common';
import { orthograpgyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  async orthograpyCheck() {
    return await orthograpgyCheckUseCase();
  }
}
