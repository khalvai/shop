import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { VariantService } from './variant.service';
import { CreateVariantDto } from './dto/create-variant.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';

@Controller('variant')
export class VariantController {
  constructor(private readonly variantService: VariantService) {}

  @Post('')
  async createVariants(@Body() createVariantDto: CreateVariantDto) {
    return await this.variantService.create(createVariantDto);
  }

  @Get(':vid')
  findAll() {
    return this.variantService.findAll();
  }

   // vid:123456576879809-9876543
  // 2x price numberInStock

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.variantService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVariantDto: UpdateVariantDto) {
    return this.variantService.update(+id, updateVariantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variantService.remove(+id);
  }
}
