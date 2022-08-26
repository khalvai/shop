import { Injectable } from '@nestjs/common';
import { NumberFormat } from 'libphonenumber-js';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PictureRepository {
  constructor(private readonly prisma: PrismaService) {}

  save(productId: number, fileName: string, priorty: number) {
    return this.prisma.picture.create({
      data: {
        productId: productId,
        url: fileName,
        priority: priorty,
      },
    });
  }




  
}
