import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProduct, Product } from '../interfaces/product.interface';
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

  throwNotFoundError() {
    throw new HttpException('product not found', HttpStatus.NOT_FOUND);
  }
}
