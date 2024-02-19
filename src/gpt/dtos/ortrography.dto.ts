import { IsInt, IsOptional, IsString } from 'class-validator';

export default class OrtographyDTO {
  @IsString()
  readonly prompt: string;
  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}
