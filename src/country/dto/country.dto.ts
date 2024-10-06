import { IsString } from 'class-validator';

export class CreateCountryDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly code: string;
}

export class UpdateCountryDTO {
  @IsString()
  readonly name: string;
  @IsString()
  readonly code: string;
}
