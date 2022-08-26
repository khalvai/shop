import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product, CreateProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { pictures: true } });
  }

  async findByName(name: string): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        name: name,
      },
      include: {
        pictures: true,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        pictures: true,
      },
    });
  }

  createProduct(productDto: CreateProduct): Promise<Product> {
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

  updateById(id: number, productDto: CreateProduct) {
    return this.prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...productDto,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  deleteById(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
}
