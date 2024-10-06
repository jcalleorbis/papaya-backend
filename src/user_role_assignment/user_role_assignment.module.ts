import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRoleAssignmentController } from './user_role_assignment.controller';
import { UserRoleAssignmentService } from './user_role_assignment.service';
import { UserRoleAssignmentSchema } from './schemas/user_role_assignment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserRoleAssignment', schema: UserRoleAssignmentSchema },
    ]),
  ],
  controllers: [UserRoleAssignmentController],
  providers: [UserRoleAssignmentService],
})
export class UserRoleAssignmentModule {}
