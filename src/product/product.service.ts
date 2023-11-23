import { Injectable } from '@nestjs/common';

const products = [
  { id: 1, name: 'Coklat' },
  { id: 2, name: 'Stroberi' },
  { id: 2, name: 'Jerukk' },
];

@Injectable()
export class ProductService {
  async findAll() {
    return products;
  }

  async findOne(payload: { id: number }) {
    return products.find((product) => product.id == payload.id);
  }
}
