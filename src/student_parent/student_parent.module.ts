import { Module } from '@nestjs/common';
import { StudentParentService } from './student_parent.service';
import { StudentParentController } from './student_parent.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentParent,
  StudentParentSchema,
} from './schemas/student_parent.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentParent.name, schema: StudentParentSchema },
    ]),
  ],
  controllers: [StudentParentController],
  providers: [StudentParentService],
})
export class StudentParentModule {}
