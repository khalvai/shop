import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ok } from 'assert';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';
import { VariantRepository } from './varinat.repository';

@Injectable()
export class VariantService {
  constructor(private readonly variantRepository: VariantRepository) {}

  async create(createVariantDto: CreateVariantDto) {
    try {
      return await this.variantRepository.upsert(createVariantDto);
    } catch (error) {
      this.checkUpsertError(error);
    }
  }

  findAll() {
    return `This action returns all variant`;
  }

  findOne(pid: number, name: string) {
    try {
      return this.variantRepository.findByName(pid, name);
    } catch (error) {
      return error;
    }
  }

  async checkExists(pid: number, name: string) {
    const varinat = await this.findOne(pid, name);
    if (varinat) this.throwAlreadyExists();
  }

  async update(id: number, updateVariantDto: UpdateVariantDto) {
    return `This action updates a #${id} variant`;
  }

  remove(id: number) {
    return `This action removes a #${id} variant`;
  }

  async findVariantByName(pid: number, name: string) {
    // return await this.variantRepositoy.findVariantByName(pid, name);
  }

  throwAlreadyExists() {
    throw new HttpException(
      'the product has a variant with this name',
      HttpStatus.CONFLICT,
    );
  }

  throwNotFoundVariant() {
    throw new HttpException('not found', HttpStatus.NOT_FOUND);
  }

  checkUpsertError(error) {
    if (error.code === 'P2025')
      throw new HttpException(
        'there is not product with this id',
        HttpStatus.CONFLICT,
      );
  }
}

