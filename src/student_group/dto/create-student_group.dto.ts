import { IsMongoId } from 'class-validator';

export class CreateStudentGroupDto {
  @IsMongoId()
  readonly student: string;
  @IsMongoId()
  readonly group: string;
}
