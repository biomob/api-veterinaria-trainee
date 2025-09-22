import { Module, forwardRef } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { ConsultasController } from './consultas.controller';
import { AnimaisModule } from '../animais/animais.module'

@Module({
  imports: [forwardRef(() => AnimaisModule)],
  controllers: [ConsultasController],
  providers: [ConsultasService],
  exports: [ConsultasService],
})
export class ConsultasModule {}
