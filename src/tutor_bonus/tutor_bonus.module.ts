import { Module } from '@nestjs/common';
import { TutorBonusService } from './tutor_bonus.service';
import { TutorBonusController } from './tutor_bonus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorBonus, TutorBonusSchema } from './schemas/tutor_bonus_schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorBonus.name, schema: TutorBonusSchema },
    ]),
  ],
  controllers: [TutorBonusController],
  providers: [TutorBonusService],
})
export class TutorBonusModule {}
