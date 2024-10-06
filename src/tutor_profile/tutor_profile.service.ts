import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorProfileDto } from './dto/create-tutor_profile.dto';
import { UpdateTutorProfileDto } from './dto/update-tutor_profile.dto';
import { TutorProfile } from './schemas/tutor_profile.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorProfileService {
  constructor(
    @InjectModel(TutorProfile.name)
    private readonly tutorProfileModel: Model<TutorProfile>,
  ) {}

  async create(
    createTutorProfileDto: CreateTutorProfileDto,
  ): Promise<TutorProfile> {
    const createdProfile = new this.tutorProfileModel(createTutorProfileDto);
    return createdProfile.save();
  }

  async findAll(): Promise<TutorProfile[]> {
    return this.tutorProfileModel.find().exec();
  }

  async findOne(id: string): Promise<TutorProfile> {
    const profile = await this.tutorProfileModel.findById(id).exec();
    if (!profile) {
      throw new NotFoundException(`TutorProfile with ID ${id} not found`);
    }
    return profile;
  }

  async update(
    id: string,
    updateTutorProfileDto: UpdateTutorProfileDto,
  ): Promise<TutorProfile> {
    const updatedProfile = await this.tutorProfileModel
      .findByIdAndUpdate(id, updateTutorProfileDto, { new: true })
      .exec();
    if (!updatedProfile) {
      throw new NotFoundException(`TutorProfile with ID ${id} not found`);
    }
    return updatedProfile;
  }

  async remove(id: string): Promise<TutorProfile> {
    const deletedProfile = await this.tutorProfileModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedProfile) {
      throw new NotFoundException(`TutorProfile with ID ${id} not found`);
    }
    return deletedProfile;
  }
}
