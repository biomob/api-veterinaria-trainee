import { Test, TestingModule } from '@nestjs/testing';
import { AnimaisService } from './animais.service';

describe('AnimaisService', () => {
  let service: AnimaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimaisService],
    }).compile();

    service = module.get<AnimaisService>(AnimaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
