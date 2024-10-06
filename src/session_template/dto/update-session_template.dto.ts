import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionTemplateDto } from './create-session_template.dto';

export class UpdateSessionTemplateDto extends PartialType(CreateSessionTemplateDto) {}
