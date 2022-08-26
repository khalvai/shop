import { Injectable } from '@nestjs/common';
import { NumberFormat } from 'libphonenumber-js';
import { Picture } from '../interfaces/picture-interface';
import { ProductRepository } from '../product/product.repository';
import { ProductService } from '../product/product.service';
import { PictureRepository } from './picture.repository';

@Injectable()
export class PictureService {
  constructor(
    private readonly productRepostiory: ProductRepository,
    private readonly productService: ProductService,
    private readonly pictureRepository: PictureRepository,
  ) {}

  async savePicture(
    productId: number,
    fileName: string,
    priority: number,
  ): Promise<Picture> {
    const product = await this.productService.findById(productId);

    const picture = await this.pictureRepository.save(
      productId,
      fileName,
      priority,
    );

    return picture;
  }
}
