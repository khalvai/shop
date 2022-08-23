import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product, CreateProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByName(name: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        name: name,
      },
    });
  }

  async createProduct(productDto: CreateProduct): Promise<Product> {
    return this.prisma.product.create({
      data: {
        name: productDto.name,
        description: productDto.description,
        price: productDto.price,
        numberInStock: productDto.numberInStock,
        off: productDto.off,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }

}
