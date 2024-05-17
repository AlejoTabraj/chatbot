import { Controller, Get, Param } from '@nestjs/common';
import { ZohoApiService } from './zoho-api.service';
@Controller('zoho-api')
export class ZohoApiController {
  constructor(private readonly zohoApiService: ZohoApiService) {}

  @Get('ruc/:ruc')
  findOne(@Param('ruc') ruc: string) {
    return this.zohoApiService.findOne(+ruc);
  }
}
