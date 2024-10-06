import { Module } from '@nestjs/common';
import { BuyerReportTypeService } from './buyer_report_type.service';
import { BuyerReportTypeController } from './buyer_report_type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BuyerReportType,
  BuyerReportTypeSchema,
} from './schemas/buyer_report_type.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BuyerReportType.name, schema: BuyerReportTypeSchema },
    ]),
  ],
  controllers: [BuyerReportTypeController],
  providers: [BuyerReportTypeService],
})
export class BuyerReportTypeModule {}
