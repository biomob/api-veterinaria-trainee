import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsultasModule } from './consultas/consultas.module';
import { AnimaisModule } from './animais/animais.module';

@Module({
  imports: [ConsultasModule, AnimaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
