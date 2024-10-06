import { IsMongoId, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  readonly issue_type: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly status: string;
  @IsMongoId()
  readonly session: string;
  @IsMongoId()
  readonly reporter: string;
}
