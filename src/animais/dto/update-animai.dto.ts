import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimaiDto } from './create-animai.dto';

export class UpdateAnimaiDto extends PartialType(CreateAnimaiDto) {}
