import { Module } from '@nestjs/common';
import { TutorEducationService } from './tutor_education.service';
import { TutorEducationController } from './tutor_education.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorEducation,
  TutorEducationSchema,
} from './schemas/tutor_education.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorEducation.name, schema: TutorEducationSchema },
    ]),
  ],
  controllers: [TutorEducationController],
  providers: [TutorEducationService],
})
export class TutorEducationModule {}
