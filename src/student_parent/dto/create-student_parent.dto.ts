import { IsMongoId } from 'class-validator';

export class CreateStudentParentDto {
  @IsMongoId()
  readonly student: string;
  @IsMongoId()
  readonly parent: string;
}
