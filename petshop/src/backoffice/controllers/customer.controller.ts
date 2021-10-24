import { Controller } from '@nestjs/common';

@Controller()
export class CustomerController {
  get() {
    return 'Return clients';
  }

  post() {
    return 'Create clients';
  }

  put() {
    return 'Modify clients';
  }

  delete() {
    return 'Delete clients';
  }
}
