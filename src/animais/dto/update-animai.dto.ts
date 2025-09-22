import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animai.dto';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {}
