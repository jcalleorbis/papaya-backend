import { Module } from '@nestjs/common';
import { StudentKnowledgeLevelService } from './student_knowledge_level.service';
import { StudentKnowledgeLevelController } from './student_knowledge_level.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentKnowledgeLevel,
  StudentKnowledgeLevelSchema,
} from './schemas/student_knowledge_level.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentKnowledgeLevel.name, schema: StudentKnowledgeLevelSchema },
    ]),
  ],
  controllers: [StudentKnowledgeLevelController],
  providers: [StudentKnowledgeLevelService],
})
export class StudentKnowledgeLevelModule {}
