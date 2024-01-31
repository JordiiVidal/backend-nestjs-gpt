/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GptModule } from './gpt/gpt.module';

@Module({
  imports: [GptModule]
})
export class AppModule {}
