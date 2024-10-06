import { Module } from '@nestjs/common';
import { TutorAssignmentService } from './tutor_assignment.service';
import { TutorAssignmentController } from './tutor_assignment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorAssignment,
  TutorAssignmentSchema,
} from './schemas/tutor_assignment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorAssignment.name, schema: TutorAssignmentSchema },
    ]),
  ],
  controllers: [TutorAssignmentController],
  providers: [TutorAssignmentService],
})
export class TutorAssignmentModule {}
