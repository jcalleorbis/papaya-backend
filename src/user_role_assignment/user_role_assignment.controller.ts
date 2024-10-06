import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserRoleAssignmentService } from './user_role_assignment.service';
import { CreateUserRoleAssignmentDto } from './dto/create-user_role_assignment.dto';
import { UpdateUserRoleAssignmentDto } from './dto/update-user_role_assignment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User Role Assignment')
@ApiBearerAuth()
@Controller('user-role-assignment')
export class UserRoleAssignmentController {
  constructor(
    private readonly userRoleAssignmentService: UserRoleAssignmentService,
  ) {}

  @Post()
  create(@Body() createUserRoleAssignmentDto: CreateUserRoleAssignmentDto) {
    return this.userRoleAssignmentService.create(createUserRoleAssignmentDto);
  }

  @Get()
  findAll() {
    return this.userRoleAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRoleAssignmentService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserRoleAssignmentDto: UpdateUserRoleAssignmentDto,
  ) {
    return this.userRoleAssignmentService.update(
      id,
      updateUserRoleAssignmentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRoleAssignmentService.remove(id);
  }
}
