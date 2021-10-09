import { Controller, Get, Post } from '@nestjs/common';

@Controller({
  version: '1',
})
export class ProductsControllerV1 {
  @Get('products')
  findAll(): string {
    console.log(process.env);
    return 'this will return productsss';
  }

  @Post('products')
  create(): string {
    return 'this will create a product';
  }
}
