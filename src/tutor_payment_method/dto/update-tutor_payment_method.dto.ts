import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorPaymentMethodDto } from './create-tutor_payment_method.dto';

export class UpdateTutorPaymentMethodDto extends PartialType(CreateTutorPaymentMethodDto) {}
