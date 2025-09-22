import { Module, forwardRef } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { AnimaisController } from './animais.controller';
import { ConsultasModule } from '../consultas/consultas.module';

@Module({
  imports: [forwardRef(() => ConsultasModule)],
  controllers: [AnimaisController],
  providers: [AnimaisService],
  exports: [AnimaisService],
})
export class AnimaisModule {}
