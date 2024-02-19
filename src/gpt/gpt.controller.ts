import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { OrtographyDTO, ProsConsDiscussDTO } from './dtos';
import GptService from './gpt.service';
import { Stream } from 'openai/streaming';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthograpyCheck(@Body() orthograpyDTO: OrtographyDTO) {
    return this.gptService.orthograpyCheck(orthograpyDTO);
  }

  @Post('pros-cons-discuss')
  async prosConsDicusser(
    @Body() prosConsDiscusserDTO: ProsConsDiscussDTO,
    @Res() res: Response,
  ) {
    console.log(prosConsDiscusserDTO);

    const response =
      await this.gptService.prosConsDiscusser(prosConsDiscusserDTO);

    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK);

    if (response instanceof Stream) {
      for await (const chunk of response) {
        const piece = chunk.choices[0].delta.content || '';
        console.log(piece);
        res.write(piece);
      }
    } else {
      res.write(response);
    }

    res.end();
  }
}
