import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../interfaces/product.interface';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findByName(name: string): Promise<Product[]> {
    const products = await this.productRepository.findByName(name);

    if (!products.length) {
      throw new NotFoundException('there is not products with this name');
    }

    return products;
  }

  
}
