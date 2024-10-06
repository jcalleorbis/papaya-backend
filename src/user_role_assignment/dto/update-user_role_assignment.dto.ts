import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRoleAssignmentDto } from './create-user_role_assignment.dto';

export class UpdateUserRoleAssignmentDto extends PartialType(
  CreateUserRoleAssignmentDto,
) {}
