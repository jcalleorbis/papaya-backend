import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './schemas/ticket.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<Ticket>) {}

  create(createTicketDto: CreateTicketDto) {
    const createdTicket = new this.ticketModel(createTicketDto);
    return createdTicket.save();
  }

  findAll() {
    return this.ticketModel.find().exec();
  }

  async findOne(id: string) {
    const Ticket = await this.ticketModel.findById(id).exec();
    if (!Ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return Ticket;
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const updateTicket = await this.ticketModel
      .findByIdAndUpdate(id, updateTicketDto, { new: true })
      .exec();
    if (!updateTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return updateTicket;
  }

  async remove(id: string) {
    const deletedTicket = await this.ticketModel.findByIdAndDelete(id).exec();
    if (!deletedTicket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return deletedTicket;
  }
}
