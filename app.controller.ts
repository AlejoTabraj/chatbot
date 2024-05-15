import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('merch')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('ruc') ruc: number) {
    console.log(ruc)
    return this.appService.getHello(ruc);
  }
}
