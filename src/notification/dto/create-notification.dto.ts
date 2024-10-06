import { IsMongoId, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsMongoId()
  readonly user: string;
  @IsString()
  readonly type: string;
  @IsString()
  readonly content: string;
  @IsString()
  readonly send_time: string;
  @IsString()
  readonly is_read: string;
}
