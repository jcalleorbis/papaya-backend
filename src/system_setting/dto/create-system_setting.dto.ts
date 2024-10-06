import { IsString, IsMongoId } from 'class-validator';
export class CreateSystemSettingDto {
  @IsString()
  setting_key: string;

  @IsString()
  setting_value: string;

  @IsString()
  description: string;

  @IsMongoId()
  updated_by: string;
}
