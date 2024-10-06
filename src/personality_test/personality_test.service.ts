import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalityTestDto } from './dto/create-personality_test.dto';
import { UpdatePersonalityTestDto } from './dto/update-personality_test.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PersonalityTest } from './schemas/personality_test.schemas';
import { Model } from 'mongoose';

@Injectable()
export class PersonalityTestService {
  constructor(
    @InjectModel(PersonalityTest.name)
    private PersonalityTestModel: Model<PersonalityTest>,
  ) {}

  create(createPersonalityTestDto: CreatePersonalityTestDto) {
    const createdPersonalityTest = new this.PersonalityTestModel(
      createPersonalityTestDto,
    );
    return createdPersonalityTest.save();
  }

  findAll() {
    return this.PersonalityTestModel.find().exec();
  }

  async findOne(id: string) {
    const PersonalityTest = await this.PersonalityTestModel.findById(id).exec();
    if (!PersonalityTest) {
      throw new NotFoundException(`PersonalityTest with ID ${id} not found`);
    }
    return PersonalityTest;
  }

  async update(id: string, updatePersonalityTestDto: UpdatePersonalityTestDto) {
    const updatePersonalityTest =
      await this.PersonalityTestModel.findByIdAndUpdate(
        id,
        updatePersonalityTestDto,
        { new: true },
      ).exec();
    if (!updatePersonalityTest) {
      throw new NotFoundException(`PersonalityTest with ID ${id} not found`);
    }
    return updatePersonalityTest;
  }

  async remove(id: string) {
    const deletedPersonalityTest =
      await this.PersonalityTestModel.findByIdAndDelete(id).exec();
    if (!deletedPersonalityTest) {
      throw new NotFoundException(`PersonalityTest with ID ${id} not found`);
    }
    return deletedPersonalityTest;
  }
}
