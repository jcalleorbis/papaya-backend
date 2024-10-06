import { Module } from '@nestjs/common';
import { TutorAttendanceService } from './tutor_attendance.service';
import { TutorAttendanceController } from './tutor_attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorAttendance,
  TutorAttendanceSchema,
} from './schemas/tutor_attendance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorAttendance.name, schema: TutorAttendanceSchema },
    ]),
  ],
  controllers: [TutorAttendanceController],
  providers: [TutorAttendanceService],
})
export class TutorAttendanceModule {}
