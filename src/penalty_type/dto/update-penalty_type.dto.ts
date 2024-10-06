import { PartialType } from '@nestjs/mapped-types';
import { CreatePenaltyTypeDto } from './create-penalty_type.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdatePenaltyTypeDto extends PartialType(CreatePenaltyTypeDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  percentage?: number;
}
