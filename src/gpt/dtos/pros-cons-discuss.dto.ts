import { IsString } from 'class-validator';

export default class ProsConsDiscussDTO {
  @IsString()
  readonly prompt: string;
}
