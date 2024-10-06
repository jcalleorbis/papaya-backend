import { IsMongoId, IsString } from 'class-validator';

export class CreateBuyerDto {
  @IsMongoId()
  readonly user: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly buyer_type: string;
}
