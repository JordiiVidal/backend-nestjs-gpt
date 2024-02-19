import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import OrtographyDTO from './dtos/ortrography.dto';
import ProsConsDiscussDTO from './dtos/pros-cons-discuss.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthograpyCheck(@Body() orthograpyDTO: OrtographyDTO) {
    return this.gptService.orthograpyCheck(orthograpyDTO);
  }

  @Post('pros-cons-discuss')
  prosConsDicusser(@Body() prosConsDiscusserDTO: ProsConsDiscussDTO) {
    return this.gptService.prosConsDiscusser(prosConsDiscusserDTO);
  }
}
