import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTutorPreferenceDto } from './dto/create-tutor_preference.dto';
import { UpdateTutorPreferenceDto } from './dto/update-tutor_preference.dto';
import { TutorPreference } from './schemas/tutor_preference.schema';

@Injectable()
export class TutorPreferenceService {
  constructor(
    @InjectModel(TutorPreference.name)
    private tutorPreferenceModel: Model<TutorPreference>,
  ) {}

  async create(
    createTutorPreferenceDto: CreateTutorPreferenceDto,
  ): Promise<TutorPreference> {
    const newPreference = new this.tutorPreferenceModel(
      createTutorPreferenceDto,
    );
    return newPreference.save();
  }

  async findAll(): Promise<TutorPreference[]> {
    return this.tutorPreferenceModel
      .find()
      .populate('tutor')
      .populate('subject')
      .populate('grade')
      .populate('language')
      .exec();
  }

  async findOne(id: string): Promise<TutorPreference> {
    const preference = await this.tutorPreferenceModel
      .findById(id)
      .populate('tutor')
      .populate('subject')
      .populate('grade')
      .populate('language')
      .exec();

    if (!preference) {
      throw new NotFoundException(`Preference with ID ${id} not found`);
    }
    return preference;
  }

  async update(
    id: string,
    updateTutorPreferenceDto: UpdateTutorPreferenceDto,
  ): Promise<TutorPreference> {
    const updatedPreference = await this.tutorPreferenceModel
      .findByIdAndUpdate(id, updateTutorPreferenceDto, { new: true })
      .exec();

    if (!updatedPreference) {
      throw new NotFoundException(`Preference with ID ${id} not found`);
    }

    return updatedPreference;
  }

  async remove(id: string): Promise<TutorPreference> {
    const deletedPreference = await this.tutorPreferenceModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedPreference) {
      throw new NotFoundException(`Preference with ID ${id} not found`);
    }
    return deletedPreference;
  }
}
