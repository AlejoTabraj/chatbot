import { Module } from '@nestjs/common';
import { ZohoApiService } from './zoho-api.service';
import { ZohoApiController } from './zoho-api.controller';

@Module({
  // imports: [CACHE_MANAGER],
  controllers: [ZohoApiController],
  providers: [ZohoApiService],
})
export class ZohoApiModule {}
