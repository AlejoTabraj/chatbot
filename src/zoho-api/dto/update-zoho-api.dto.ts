import { PartialType } from '@nestjs/mapped-types';
import { CreateZohoApiDto } from './create-zoho-api.dto';

export class UpdateZohoApiDto extends PartialType(CreateZohoApiDto) {}
