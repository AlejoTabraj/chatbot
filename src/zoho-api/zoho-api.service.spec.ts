import { Test, TestingModule } from '@nestjs/testing';
import { ZohoApiService } from './zoho-api.service';

describe('ZohoApiService', () => {
  let service: ZohoApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZohoApiService],
    }).compile();

    service = module.get<ZohoApiService>(ZohoApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
