import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimaisDto } from './create-animais.dto';

export class UpdateAnimaiDto extends PartialType(CreateAnimaisDto) {}
