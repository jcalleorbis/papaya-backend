import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './schemas/contact.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}
  create(createContactDto: CreateContactDto) {
    const createContact = new this.contactModel(createContactDto);
    return createContact.save();
  }

  findAll() {
    return this.contactModel.find().exec();
  }

  async findOne(id: string) {
    const Contact = await this.contactModel.findById(id).exec();
    if (!Contact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return Contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const updatedContact = await this.contactModel
      .findByIdAndUpdate(id, updateContactDto, { new: true })
      .exec();
    if (!updatedContact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return updatedContact;
  }

  async remove(id: string) {
    const deletedContact = await this.contactModel.findByIdAndDelete(id).exec();
    if (!deletedContact) {
      throw new NotFoundException(`Contact with ID ${id} not found`);
    }
    return deletedContact;
  }
}
