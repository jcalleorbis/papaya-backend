import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentLanguageDto } from './dto/create-student_language.dto';
import { UpdateStudentLanguageDto } from './dto/update-student_language.dto';
import { StudentLanguage } from './schemas/student_language.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class Student_languageService {
  constructor(
    @InjectModel(StudentLanguage.name)
    private student_languageModel: Model<StudentLanguage>,
  ) {}

  create(createStudent_languageDto: CreateStudentLanguageDto) {
    const createdStudent_language = new this.student_languageModel(
      createStudent_languageDto,
    );
    return createdStudent_language.save();
  }

  findAll() {
    return this.student_languageModel.find().exec();
  }

  async findOne(id: string) {
    const Student_language = await this.student_languageModel
      .findById(id)
      .exec();
    if (!Student_language) {
      throw new NotFoundException(`Student_language with ID ${id} not found`);
    }
    return Student_language;
  }

  async update(
    id: string,
    updateStudent_languageDto: UpdateStudentLanguageDto,
  ) {
    const updateStudent_language = await this.student_languageModel
      .findByIdAndUpdate(id, updateStudent_languageDto, { new: true })
      .exec();
    if (!updateStudent_language) {
      throw new NotFoundException(`Student_language with ID ${id} not found`);
    }
    return updateStudent_language;
  }

  async remove(id: string) {
    const deletedStudent_language = await this.student_languageModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedStudent_language) {
      throw new NotFoundException(`Student_language with ID ${id} not found`);
    }
    return deletedStudent_language;
  }
}
