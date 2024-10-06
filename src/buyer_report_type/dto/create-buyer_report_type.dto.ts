import { IsMongoId, IsString } from 'class-validator';

export class CreateBuyerReportTypeDto {
  @IsMongoId()
  readonly buyer: string;
  @IsString()
  readonly report_type: string;
}
