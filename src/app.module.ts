import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimaisModule } from './animais/animais.module';

@Module({
  imports: [AnimaisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
