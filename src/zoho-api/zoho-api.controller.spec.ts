import { Test, TestingModule } from '@nestjs/testing';
import { ZohoApiController } from './zoho-api.controller';
import { ZohoApiService } from './zoho-api.service';

describe('ZohoApiController', () => {
  let controller: ZohoApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZohoApiController],
      providers: [ZohoApiService],
    }).compile();

    controller = module.get<ZohoApiController>(ZohoApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
