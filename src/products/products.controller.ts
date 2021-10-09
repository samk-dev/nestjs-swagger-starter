import { Controller, Get, Post } from '@nestjs/common';

@Controller({
  version: '1',
})
export class ProductsControllerV1 {
  @Get('products')
  findAll(): string {
    console.log(process.env.DB_PORT);
    return 'this will return products';
  }

  @Post('products')
  create(): string {
    return 'this will create a product';
  }
}
