import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BonusService } from './bonus.service';
import { BonusController } from './bonus.controller';
import { Bonus, BonusSchema } from './schemas/bonus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bonus.name, schema: BonusSchema }]),
  ],
  controllers: [BonusController],
  providers: [BonusService],
})
export class BonusModule {}
