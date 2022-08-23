import {
  Body,
  Controller,
  Post,
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
  async createProduct(@Body() createProductDto: ProductDto) {
    console.log(createProductDto.name);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async findByName(@Query('name') name: string) {
    return await this.productService.findByName(name);
  }
}
