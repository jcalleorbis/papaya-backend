import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePenaltyTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  percentage: number;
}
