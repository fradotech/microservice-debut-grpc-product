import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService')
  async findAll() {
    return { data: await this.productService.findAll() };
  }

  @GrpcMethod('ProductService')
  async findOne(@Payload() id: number) {
    return await this.productService.findOne(id);
  }
}
