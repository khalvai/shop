import { Module } from '@nestjs/common';
import { VariantService } from './variant.service';
import { VariantController } from './variant.controller';
import { VariantRepository } from './varinat.repository';

@Module({
  controllers: [VariantController],
  providers: [VariantService, VariantRepository],
})
export class VariantModule {}
