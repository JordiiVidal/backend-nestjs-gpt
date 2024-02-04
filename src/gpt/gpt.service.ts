import { Injectable } from '@nestjs/common';
import { orthograpgyCheckUseCase } from './use-cases';
import { OrtographyDTO } from './dtos/ortrography.dto';

@Injectable()
export class GptService {
  async orthograpyCheck(ortographyDTO: OrtographyDTO) {
    console.log(ortographyDTO);
    return await orthograpgyCheckUseCase({
      prompt: ortographyDTO.prompt,
    });
  }
}
