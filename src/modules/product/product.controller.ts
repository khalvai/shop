import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductService } from './product.service';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createProduct(createProductDto);
  }

  @Get()
  async findByName(@Query('name') name: string) {
    console.log('heu there');
    return await this.productService.findByName(name);
  }

  @Get()
  async getAll() {
    return await this.productService.getAll();
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.deleteById(+id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return await this.productService.updateById(+id, updateProductDto);
  }
}
