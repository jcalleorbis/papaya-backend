import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorProfileService } from './tutor_profile.service';
import { TutorProfileController } from './tutor_profile.controller';
import {
  TutorProfile,
  TutorProfileSchema,
} from './schemas/tutor_profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorProfile.name, schema: TutorProfileSchema },
    ]),
  ],
  controllers: [TutorProfileController],
  providers: [TutorProfileService],
})
export class TutorProfileModule {}
