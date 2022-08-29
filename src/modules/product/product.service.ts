import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProduct, Product } from '../interfaces/product.interface';
import { CreateVariant } from '../interfaces/variant-interface';
import { UpdateProductDto } from './dto/update.product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAll(): Promise<Product[]> {
    const products = await this.productRepository.getAll();

    if (!products.length) this.throwNotFoundError();

    return products;
  }

  async findByName(name: string): Promise<Product[]> {
    const products = await this.productRepository.findByName(name);

    if (!products.length) this.throwNotFoundError();

    return products;
  }

  async createProduct(createProductDto: CreateProduct) {
    const product = await this.productRepository.createProduct(
      createProductDto,
    );

    return product;
  }

  async findById(id: number) {
    const product = await this.productRepository.findById(id);
    if (!product) this.throwNotFoundError();
    return product;
  }

  async deleteById(id: number) {
    const product = await this.findById(id);

    if (!product) this.throwNotFoundError();

    return await this.productRepository.deleteById(id);
  }

  async updateById(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findById(id);
    const updatedProduct = await this.productRepository.updateById(
      id,
      updateProductDto,
    );

    return updatedProduct;
  }

  throwNotFoundError() {
    throw new HttpException('product not found', HttpStatus.NOT_FOUND);
  }
}
