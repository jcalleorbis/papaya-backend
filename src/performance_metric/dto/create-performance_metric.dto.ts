import { IsString } from 'class-validator';

export class CreatePerformanceMetricDto {
  @IsString()
  metric_name: string;

  @IsString()
  description: string;

  @IsString()
  metric_type: string;
}
