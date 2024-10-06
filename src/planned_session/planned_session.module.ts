import { Module } from '@nestjs/common';
import { PlannedSessionService } from './planned_session.service';
import { PlannedSessionController } from './planned_session.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PlannedSession,
  PlannedSessionSchema,
} from './schemas/planned_session.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PlannedSession.name, schema: PlannedSessionSchema },
    ]),
  ],
  controllers: [PlannedSessionController],
  providers: [PlannedSessionService],
})
export class PlannedSessionModule {}
