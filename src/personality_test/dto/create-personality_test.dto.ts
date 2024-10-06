import { IsMongoId, IsString } from 'class-validator';

export class CreatePersonalityTestDto {
  @IsString()
  readonly learning_style_scores: string;
  @IsMongoId()
  readonly student: string;
}
