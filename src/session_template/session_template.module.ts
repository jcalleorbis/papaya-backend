import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionTemplateService } from './session_template.service';
import { SessionTemplateController } from './session_template.controller';
import {
  SessionTemplate,
  SessionTemplateSchema,
} from './schemas/session_template.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SessionTemplate.name, schema: SessionTemplateSchema },
    ]),
  ],
  controllers: [SessionTemplateController],
  providers: [SessionTemplateService],
})
export class SessionTemplateModule {}
