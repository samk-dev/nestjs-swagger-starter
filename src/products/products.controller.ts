import { Controller, Get } from '@nestjs/common';

@Controller({
  version: '1',
})
export class ProductsControllerV1 {
  @Get('products')
  findAll(): string {
    console.log(process.env.DB_PORT);
    return 'this will return products';
  }
}
