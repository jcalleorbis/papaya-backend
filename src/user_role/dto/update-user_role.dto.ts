import { IsString, IsOptional } from 'class-validator';

export class UpdateUserRoleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  permissions?: object;
}
