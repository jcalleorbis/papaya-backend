import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuditLogDto } from './dto/create-audit_log.dto';
import { UpdateAuditLogDto } from './dto/update-audit_log.dto';
import { AuditLog } from './schemas/audit_log.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuditLogService {
  constructor(
    @InjectModel(AuditLog.name) private auditLogModel: Model<AuditLog>,
  ) {}
  create(createAuditLogDto: CreateAuditLogDto) {
    const createdAuditLog = new this.auditLogModel(createAuditLogDto);
    return createdAuditLog.save();
  }

  findAll() {
    return this.auditLogModel.find().exec();
  }

  async findOne(id: string) {
    const AuditLog = await this.auditLogModel.findById(id).exec();
    if (!AuditLog) {
      throw new NotFoundException(`AuditLog with ID ${id} not found`);
    }
    return AuditLog;
  }

  async update(id: string, updateAuditLogDto: UpdateAuditLogDto) {
    const updatedAuditLog = await this.auditLogModel
      .findByIdAndUpdate(id, updateAuditLogDto, { new: true })
      .exec();
    if (!updatedAuditLog) {
      throw new NotFoundException(`AuditLog with ID ${id} not found`);
    }
    return updatedAuditLog;
  }

  async remove(id: string) {
    const deletedAuditLog = await this.auditLogModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAuditLog) {
      throw new NotFoundException(`AuditLog with ID ${id} not found`);
    }
    return deletedAuditLog;
  }
}
