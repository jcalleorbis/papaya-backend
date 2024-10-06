import { IsJSON, IsMongoId, IsString } from 'class-validator';

export class CreateAuditLogDto {
  @IsMongoId()
  readonly user: string;
  @IsString()
  readonly action: string;
  @IsString()
  readonly entity_type: string;
  @IsMongoId()
  readonly entity_id: string;
  @IsJSON()
  readonly changes: object;
}
