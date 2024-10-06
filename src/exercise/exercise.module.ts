import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { exercise, exerciseSchema } from './schemas/exercise.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: exercise.name, schema: exerciseSchema },
    ]),
  ],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
