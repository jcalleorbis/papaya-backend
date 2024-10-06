import { Module } from '@nestjs/common';
import { PersonalityTestService } from './personality_test.service';
import { PersonalityTestController } from './personality_test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PersonalityTest,
  PersonalityTestSchema,
} from './schemas/personality_test.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PersonalityTest.name, schema: PersonalityTestSchema },
    ]),
  ],
  controllers: [PersonalityTestController],
  providers: [PersonalityTestService],
})
export class PersonalityTestModule {}
