import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TutorPaymentMethodService } from './tutor_payment_method.service';
import { CreateTutorPaymentMethodDto } from './dto/create-tutor_payment_method.dto';
import { UpdateTutorPaymentMethodDto } from './dto/update-tutor_payment_method.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Tutor Payment Method')
@Controller('tutor-payment-method')
export class TutorPaymentMethodController {
  constructor(
    private readonly tutorPaymentMethodService: TutorPaymentMethodService,
  ) {}

  @Post()
  create(@Body() createTutorPaymentMethodDto: CreateTutorPaymentMethodDto) {
    return this.tutorPaymentMethodService.create(createTutorPaymentMethodDto);
  }

  @Get()
  findAll() {
    return this.tutorPaymentMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutorPaymentMethodService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutorPaymentMethodDto: UpdateTutorPaymentMethodDto,
  ) {
    return this.tutorPaymentMethodService.update(
      id,
      updateTutorPaymentMethodDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutorPaymentMethodService.remove(id);
  }
}
