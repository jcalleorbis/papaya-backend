import { IsDate, IsMongoId, IsNumber, IsString } from 'class-validator';
export class CreateContractDto {
  @IsString()
  name: string;

  @IsDate()
  start_date: Date;

  @IsNumber()
  value: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  total_hours: number;

  @IsNumber()
  used_hours: number;

  @IsMongoId()
  currency: string;

  @IsString()
  status: string;
}
