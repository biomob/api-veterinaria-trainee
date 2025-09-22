import { Module } from '@nestjs/common';
import { ConsultasModule } from './consultas/consultas.module';
import { AnimaisModule } from './animais/animais.module';

@Module({
  imports: [ConsultasModule, AnimaisModule],
})
export class AppModule {}
