import { Module } from '@nestjs/common';
import { AuditLogService } from './audit_log.service';
import { AuditLogController } from './audit_log.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditLog, AuditLogSchema } from './schemas/audit_log.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AuditLog.name, schema: AuditLogSchema },
    ]),
  ],
  controllers: [AuditLogController],
  providers: [AuditLogService],
})
export class AuditLogModule {}
