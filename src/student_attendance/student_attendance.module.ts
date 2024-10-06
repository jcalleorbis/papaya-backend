import { Module } from '@nestjs/common';
import { StudentAttendanceService } from './student_attendance.service';
import { StudentAttendanceController } from './student_attendance.controller';
import {
  StudentAttendance,
  StudentAttendanceSchema,
} from './schemas/student_attendance.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentAttendance.name, schema: StudentAttendanceSchema },
    ]),
  ],
  controllers: [StudentAttendanceController],
  providers: [StudentAttendanceService],
})
export class StudentAttendanceModule {}
