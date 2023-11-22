import { Injectable } from '@nestjs/common';

const products = [
  { id: 1, name: 'Coklat' },
  { id: 2, name: 'Stroberi' },
];

@Injectable()
export class ProductService {
  async findAll() {
    return await products;
  }

  async findOne(id: number) {
    return await products.find((product) => product.id === id);
  }
}
