import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { map, of } from 'rxjs';
import { PictureService } from './picture.service';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const disk = {
  storage: diskStorage({
    destination: './uploads',
    filename(req, file, callback) {
      const unixSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); //1,000,000,000
      const ext = path.extname(file.originalname);
      const fileName = `${path
        .parse(file.originalname)
        .name.replace(/\s/g, '')}${unixSuffix}${ext}`;

      callback(null, fileName);
    },
  }),
  fileFilter: imageFileFilter,
};

@Controller('pictures')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', disk))
  async uploadFile(
    @UploadedFile() image: Express.Multer.File,
    @Query('productId', ParseIntPipe) productId: number,
    @Query('proiorty', ParseIntPipe) proiorty: number,
  ) {
    return await this.pictureService.savePicture(
      productId,
      image.filename,
      +proiorty,
    );
  }
}

