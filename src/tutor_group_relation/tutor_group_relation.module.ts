import { Module } from '@nestjs/common';
import { TutorGroupRelationService } from './tutor_group_relation.service';
import { TutorGroupRelationController } from './tutor_group_relation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorGroupRelation,
  TutorGroupRelationSchema,
} from './schema/tutor_group_relation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorGroupRelation.name, schema: TutorGroupRelationSchema },
    ]),
  ],
  controllers: [TutorGroupRelationController],
  providers: [TutorGroupRelationService],
})
export class TutorGroupRelationModule {}
