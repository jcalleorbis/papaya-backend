import { Module } from '@nestjs/common';
import { Student_languageService } from './student_language.service';
import { StudentLanguageController } from './student_language.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  StudentLanguage,
  StudentLanguageSchema,
} from './schemas/student_language.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentLanguage.name, schema: StudentLanguageSchema },
    ]),
  ],
  controllers: [StudentLanguageController],
  providers: [Student_languageService],
})
export class StudentLanguageModule {}
