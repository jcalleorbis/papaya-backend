import { IsMongoId, IsString, IsObject } from 'class-validator';

export class CreateTutorPaymentMethodDto {
  @IsMongoId()
  tutor: string;

  @IsString()
  payment_type: string;

  @IsObject()
  account_details: Record<string, any>;

  @IsMongoId()
  currency: string;
}
