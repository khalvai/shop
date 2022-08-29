import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
