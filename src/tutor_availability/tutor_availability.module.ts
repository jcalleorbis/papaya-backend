import { Module } from '@nestjs/common';
import { TutorAvailabilityService } from './tutor_availability.service';
import { TutorAvailabilityController } from './tutor_availability.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorAvailability,
  TutorAvailabilitySchema,
} from './schemas/tutor_availability.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorAvailability.name, schema: TutorAvailabilitySchema },
    ]),
  ],
  controllers: [TutorAvailabilityController],
  providers: [TutorAvailabilityService],
})
export class TutorAvailabilityModule {}
