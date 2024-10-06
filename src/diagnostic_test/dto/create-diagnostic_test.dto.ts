import { IsDate, IsMongoId, IsObject } from 'class-validator';

export class CreateDiagnosticTestDto {
  @IsMongoId()
  readonly student: string;
  @IsMongoId()
  readonly subject: string;
  @IsMongoId()
  readonly curriculum: string;
  @IsDate()
  readonly date: Date;
  @IsObject()
  readonly result: object;
}
