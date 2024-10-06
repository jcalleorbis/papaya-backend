import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentGroup,
  StudentGroupSchema,
} from './schemas/student_group.schames';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentGroup.name, schema: StudentGroupSchema },
    ]),
  ],
  controllers: [StudentGroupController],
  providers: [StudentGroupService],
})
export class StudentGroupModule {}
