import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionTemplateDto } from './dto/create-session_template.dto';
import { UpdateSessionTemplateDto } from './dto/update-session_template.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SessionTemplate } from './schemas/session_template.schemas';

@Injectable()
export class SessionTemplateService {
  constructor(
    @InjectModel(SessionTemplate.name)
    private SessionTemplateModel: Model<SessionTemplate>,
  ) {}

  create(createSessionTemplateDto: CreateSessionTemplateDto) {
    const createdSessionTemplate = new this.SessionTemplateModel(
      createSessionTemplateDto,
    );
    return createdSessionTemplate.save();
  }

  findAll() {
    return this.SessionTemplateModel.find().exec();
  }

  async findOne(id: string) {
    const SessionTemplate = await this.SessionTemplateModel.findById(id).exec();
    if (!SessionTemplate) {
      throw new NotFoundException(`SessionTemplate with ID ${id} not found`);
    }
    return SessionTemplate;
  }

  async update(id: string, updateSessionTemplateDto: UpdateSessionTemplateDto) {
    const updateSessionTemplate =
      await this.SessionTemplateModel.findByIdAndUpdate(
        id,
        updateSessionTemplateDto,
        { new: true },
      ).exec();
    if (!updateSessionTemplate) {
      throw new NotFoundException(`SessionTemplate with ID ${id} not found`);
    }
    return updateSessionTemplate;
  }

  async remove(id: string) {
    const deletedSessionTemplate =
      await this.SessionTemplateModel.findByIdAndDelete(id).exec();
    if (!deletedSessionTemplate) {
      throw new NotFoundException(`SessionTemplate with ID ${id} not found`);
    }
    return deletedSessionTemplate;
  }
}
