import { Module } from '@nestjs/common';
import { RubricService } from './rubric.service';
import { RubricController } from './rubric.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rubric, RubricSchema } from './schemas/rubric.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rubric.name, schema: RubricSchema }]),
  ],
  controllers: [RubricController],
  providers: [RubricService],
})
export class RubricModule {}
