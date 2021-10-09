import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsControllerV1 } from './products/products.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductsControllerV1],
  providers: [],
})
export class AppModule {}
