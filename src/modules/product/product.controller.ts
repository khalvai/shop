import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() createProductDto: ProductDto) {
    return await this.productService.createProduct(createProductDto);
  }
  
    @Get()
    @UsePipes(ValidationPipe)
    async findByName(@Query('name') name: string) {
      console.log('heu there');
      return await this.productService.findByName(name);
    }

  @Get()
  @UsePipes(ValidationPipe)
  async getAll() {
    return await this.productService.getAll();
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deleteById(@Param('id') id: number) {
    return await this.productService.deleteById(+id);
  }
 



}
