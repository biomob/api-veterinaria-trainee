import { Module } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { AnimaisController } from './animais.controller';

@Module({
  controllers: [AnimaisController],
  providers: [AnimaisService],
})
export class AnimaisModule {}
