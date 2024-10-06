import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateBonusDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
