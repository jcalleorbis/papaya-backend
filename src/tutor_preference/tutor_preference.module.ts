import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorPreferenceService } from './tutor_preference.service';
import { TutorPreferenceController } from './tutor_preference.controller';
import {
  TutorPreference,
  TutorPreferenceSchema,
} from './schemas/tutor_preference.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorPreference.name, schema: TutorPreferenceSchema },
    ]),
  ],
  controllers: [TutorPreferenceController],
  providers: [TutorPreferenceService],
})
export class TutorPreferenceModule {}
