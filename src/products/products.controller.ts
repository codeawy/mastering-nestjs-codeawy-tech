import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller({
  path: 'products',
})

// ** /v1/products => Production
// ** /v2/products => Development
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Version('1')
  findAll() {
    return this.productsService.findAll();
  }

  @Get()
  @Version('2')
  findAllV2() {
    return this.productsService.findAllV2();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
