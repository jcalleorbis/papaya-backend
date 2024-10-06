import { Module } from '@nestjs/common';
import { TutorPaymentMethodService } from './tutor_payment_method.service';
import { TutorPaymentMethodController } from './tutor_payment_method.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TutorPaymentMethod,
  TutorPaymentMethodSchema,
} from './schemas/tutor_payment_method.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutorPaymentMethod.name, schema: TutorPaymentMethodSchema },
    ]),
  ],
  controllers: [TutorPaymentMethodController],
  providers: [TutorPaymentMethodService],
})
export class TutorPaymentMethodModule {}
