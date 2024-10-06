import { PartialType } from '@nestjs/mapped-types';
import { CreateBuyerReportTypeDto } from './create-buyer_report_type.dto';

export class UpdateBuyerReportTypeDto extends PartialType(
  CreateBuyerReportTypeDto,
) {}
