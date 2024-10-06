import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorExperienceService } from './tutor_experience.service';
import { TutorExperienceController } from './tutor_experience.controller';
import { TutorExperienceSchema } from './schemas/tutor_experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TutorExperience', schema: TutorExperienceSchema },
    ]),
  ],
  controllers: [TutorExperienceController],
  providers: [TutorExperienceService],
})
export class TutorExperienceModule {}
