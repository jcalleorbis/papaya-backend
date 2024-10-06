import { IsMongoId } from 'class-validator';

export class CreateUserRoleAssignmentDto {
  @IsMongoId()
  user: string;

  @IsMongoId()
  role: string;
}
