import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { inflateRaw } from 'zlib';
import { ProductRepository } from '../product/product.repository';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { VariantRepository } from './varinat.repository';
import { SanitizeError } from 'src/http-error-handler/error-handler';
@Injectable()
export class VariantService {
  constructor(private readonly variantRepository: VariantRepository) {}

  @SanitizeError({ targetName: 'product' })
  async create(createVariantDto: CreateVariantDto) {
    return await this.variantRepository.upsert(createVariantDto);
  }

  @SanitizeError({ targetName: 'product' })
  async findAll(pid: number) {
    return await this.variantRepository.findAll(pid);
  }

  @SanitizeError({ targetName: 'variant' })
  async update(id: number, updateVariantDto: UpdateVariantDto) {
    return await this.variantRepository.update(id, updateVariantDto);
  }

  @SanitizeError({ targetName: 'variant' })
  async remove(id: number) {
    return this.variantRepository.remove(id);
  }

  async findVariantByName(pid: number, name: string) {
    // return await this.variantRepositoy.findVariantByName(pid, name);
  }
}
