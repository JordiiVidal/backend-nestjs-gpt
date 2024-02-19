import { IsBoolean, IsString } from 'class-validator';

export class ProsConsDiscussDTO {
  @IsString()
  readonly prompt: string;

  @IsBoolean()
  readonly stream: boolean = false;
}
