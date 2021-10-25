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
import { Result } from '../models/result.model';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return new Result(null, true, {}, null);
  }

  @Post()
  post(@Body() body: Customer) {
    return new Result('Customer updated successfuly!', true, body, null);
  }

  @Put(':document')
  put(@Body() body: Customer, @Param('document') document: string) {
    return new Result('Customer updated successfuly!', true, body, null);
  }

  @Delete(':document')
  delete(@Param('document') document: string) {
    return new Result('Customer deleted successfuly!', true, null, null);
  }
}
