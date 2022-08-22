import { Controller, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
@Controller('product')
export class ProductController {

    @Get()
    async getAll(@Query() quer){
       return quer;
    }

    @Post()
    async createProduct(){}
    
}
