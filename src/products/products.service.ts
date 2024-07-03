import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

const productsV1 = [
  { id: 1, name: 'Product A', price: 20 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 25 },
  { id: 4, name: 'Product D', price: 15 },
];

// Array with 'title' property
const productsV2 = [
  { id: 1, title: 'Product A', price: 20 },
  { id: 2, title: 'Product B', price: 30 },
  { id: 3, title: 'Product C', price: 25 },
  { id: 4, title: 'Product D', price: 15 },
];

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return productsV1;
  }

  findAllV2() {
    return productsV2;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
