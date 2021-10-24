import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return 'Return customers';
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return 'Customer with document: ' + document;
  }

  @Post()
  post(@Body() body: Customer) {
    return 'Create customers';
  }

  @Put(':document')
  put(@Body() body: Customer, @Param('document') document: string) {
    return {
      customer: document,
      data: body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document: string) {
    return 'Delete customers';
  }
}
