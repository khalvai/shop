import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVariantDto } from './dto/create-variant.dto';

@Injectable()
export class VariantRepository {
  constructor(private readonly prisma: PrismaService) {}

  // upsert(createVariantDto: CreateVariantDto) {
  //   return this.prisma.variant.upsert({
  //     where: {
  //       name: createVariantDto.name,
  //     },
  //     update: {},
  //     create: {
  //       name: createVariantDto.name,
  //       productId: createVariantDto.productId,
  //       price: createVariantDto.price,
  //       off: createVariantDto.off,
  //       numberInStock: createVariantDto.numberInStock,
  //       createdAt: new Date().toISOString(),
  //       updatedAt: new Date().toISOString(),
  //     },
  //   });
  // }

  upsert(createVariantDto: CreateVariantDto) {
    return this.prisma.product.update({
      where: {
        id: createVariantDto.productId,
      },
      data: {
        variants: {
          upsert: {
            where: { name: createVariantDto.name },
            update: {},
            create: {
              name: createVariantDto.name,
              price: createVariantDto.price,
              off: createVariantDto.off,
              numberInStock: createVariantDto.numberInStock,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          },
        },
      },
      select: {
        variants: true,
      },
    });
  }

  //one to many    a product can have multiple variations
  // t-shert hawai     2xlarge
  //  red shirt        2xlarge

  findByName(pid: number, name: string) {
    return this.prisma.variant.findFirst({
      where: { productId: pid, name: name },
    });
  }
}
