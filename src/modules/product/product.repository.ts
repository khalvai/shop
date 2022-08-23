import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '../interfaces/product.interface';


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


  
}
