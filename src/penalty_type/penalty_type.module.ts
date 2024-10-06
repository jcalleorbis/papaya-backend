import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PenaltyTypeService } from './penalty_type.service';
import { PenaltyTypeController } from './penalty_type.controller';
import { PenaltyType, PenaltyTypeSchema } from './schemas/penalty_type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PenaltyType.name, schema: PenaltyTypeSchema },
    ]),
  ],
  controllers: [PenaltyTypeController],
  providers: [PenaltyTypeService],
})
export class PenaltyTypeModule {}
