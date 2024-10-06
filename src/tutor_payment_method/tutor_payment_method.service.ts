import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTutorPaymentMethodDto } from './dto/create-tutor_payment_method.dto';
import { UpdateTutorPaymentMethodDto } from './dto/update-tutor_payment_method.dto';
import { TutorPaymentMethod } from './schemas/tutor_payment_method.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TutorPaymentMethodService {
  constructor(
    @InjectModel(TutorPaymentMethod.name)
    private readonly TutorPaymentMethodModel: Model<TutorPaymentMethod>,
  ) {}

  async create(
    createTutorPaymentMethodDto: CreateTutorPaymentMethodDto,
  ): Promise<TutorPaymentMethod> {
    const createdPaymentMethod = new this.TutorPaymentMethodModel(
      createTutorPaymentMethodDto,
    );
    return createdPaymentMethod.save();
  }
  async findAll(): Promise<TutorPaymentMethod[]> {
    return this.TutorPaymentMethodModel.find().exec();
  }
  async findOne(id: string): Promise<TutorPaymentMethod> {
    const paymentMethod =
      await this.TutorPaymentMethodModel.findById(id).exec();
    if (!paymentMethod) {
      throw new NotFoundException(`TutorPaymentMethod with ID ${id} not found`);
    }
    return paymentMethod;
  }
  async update(
    id: string,
    updateTutorPaymentMethodDto: UpdateTutorPaymentMethodDto,
  ): Promise<TutorPaymentMethod> {
    const updatedPaymentMethod =
      await this.TutorPaymentMethodModel.findByIdAndUpdate(
        id,
        updateTutorPaymentMethodDto,
        { new: true },
      ).exec();
    if (!updatedPaymentMethod) {
      throw new NotFoundException(`TutorPaymentMethod with ID ${id} not found`);
    }
    return updatedPaymentMethod;
  }
  async remove(id: string): Promise<TutorPaymentMethod> {
    const deletedPaymentMethod =
      await this.TutorPaymentMethodModel.findByIdAndDelete(id).exec();
    if (!deletedPaymentMethod) {
      throw new NotFoundException(`TutorPaymentMethod with ID ${id} not found`);
    }
    return deletedPaymentMethod;
  }
}
