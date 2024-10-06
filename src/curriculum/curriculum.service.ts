import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { Curriculum, CurriculumDocument } from './schemas/curriculum.schema';

@Injectable()
export class CurriculumService {
  constructor(
    @InjectModel(Curriculum.name)
    private curriculumModel: Model<CurriculumDocument>,
  ) {}

  async create(createCurriculumDto: CreateCurriculumDto): Promise<Curriculum> {
    const newCurriculum = new this.curriculumModel(createCurriculumDto);
    return newCurriculum.save();
  }

  async findAll(): Promise<Curriculum[]> {
    return this.curriculumModel.find().exec();
  }

  async findOne(id: string): Promise<Curriculum> {
    const curriculum = await this.curriculumModel.findById(id).exec();
    if (!curriculum) {
      throw new NotFoundException(`Curriculum with ID ${id} not found`);
    }
    return curriculum;
  }

  async update(
    id: string,
    updateCurriculumDto: UpdateCurriculumDto,
  ): Promise<Curriculum> {
    const updatedCurriculum = await this.curriculumModel
      .findByIdAndUpdate(id, updateCurriculumDto, {
        new: true,
      })
      .exec();
    if (!updatedCurriculum) {
      throw new NotFoundException(`Curriculum with ID ${id} not found`);
    }
    return updatedCurriculum;
  }

  async remove(id: string): Promise<void> {
    const deletedCurriculum = await this.curriculumModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCurriculum) {
      throw new NotFoundException(`Curriculum with ID ${id} not found`);
    }
  }
}
