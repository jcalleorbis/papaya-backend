import { Module } from '@nestjs/common';
import { TutorLanguageService } from './tutor_language.service';
import { TutorLanguageController } from './tutor_language.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorLanguage,
  TutorLanguageSchema,
} from './schemas/tutor_language.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorLanguage.name, schema: TutorLanguageSchema },
    ]),
  ],
  controllers: [TutorLanguageController],
  providers: [TutorLanguageService],
})
export class TutorLanguageModule {}
