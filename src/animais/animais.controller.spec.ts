import { Test, TestingModule } from '@nestjs/testing';
import { AnimaisController } from './animais.controller';
import { AnimaisService } from './animais.service';

describe('AnimaisController', () => {
  let controller: AnimaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimaisController],
      providers: [AnimaisService],
    }).compile();

    controller = module.get<AnimaisController>(AnimaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
