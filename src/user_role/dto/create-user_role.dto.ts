import { IsString, IsJSON } from 'class-validator';

export class CreateUserRoleDto {
  @IsString()
  name: string;

  @IsJSON()
  permissions: object;
}
