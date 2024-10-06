import { IsMongoId, IsString } from 'class-validator';

export class CreateEntityPerformanceDto {
  @IsString()
  readonly entity_type: string;
  @IsString()
  readonly value: string;
  @IsString()
  readonly date: string;
  @IsMongoId()
  readonly performanceMetric: string;
  @IsMongoId()
  readonly student: string;
  @IsMongoId()
  readonly tutor: string;
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly group: string;
}
