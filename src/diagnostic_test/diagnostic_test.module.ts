import { Module } from '@nestjs/common';
import { DiagnosticTestService } from './diagnostic_test.service';
import { DiagnosticTestController } from './diagnostic_test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DiagnosticTest,
  DiagnosticTestSchema,
} from './schemas/diagnostic_test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DiagnosticTest.name, schema: DiagnosticTestSchema },
    ]),
  ],
  controllers: [DiagnosticTestController],
  providers: [DiagnosticTestService],
})
export class DiagnosticTestModule {}
