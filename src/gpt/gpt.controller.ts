import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrtographyDTO } from './dtos/ortrography.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthograpyCheck(@Body() orthograpyDTO: OrtographyDTO) {
    console.log(orthograpyDTO);
    return this.gptService.orthograpyCheck();
  }
}
