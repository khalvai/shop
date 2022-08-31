import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProductDto } from '../product/dto/update.product.dto';
import { CreateVariantDto } from './dto/create-variant.dto';

@Injectable()
export class VariantRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(pid: number) {
    return this.prisma.product.findFirstOrThrow({
      where: { id: pid },
      include: { variants: true },
    });
  }

  update(vid: number, updateVariantDto: UpdateProductDto) {
    return this.prisma.variant.update({
      where: { id: vid },
      data: { ...updateVariantDto, updatedAt: new Date().toISOString() },
    });
  }

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

  remove(id: number) {
    return this.prisma.variant.delete({ where: { id: id } });
  }

  findByName(pid: number, name: string) {
    return this.prisma.variant.findFirstOrThrow({
      where: { productId: pid, name: name },
    });
  }
}
