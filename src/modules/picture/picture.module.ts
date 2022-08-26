import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureController } from './picture.controller';
import { ProductRepository } from '../product/product.repository';
import { ProductModule } from '../product/product.module';
import { ProductService } from '../product/product.service';
import { PictureRepository } from './picture.repository';

@Module({
  imports: [ProductModule],
  controllers: [PictureController],
  providers: [PictureService, PictureRepository, ProductRepository, ProductService],
})
export class PictureModule {}
