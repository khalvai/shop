import { Module } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductService } from './modules/product/product.service';
import { ProductModule } from './modules/product/product.module';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, PrismaModule, AuthModule, ProductModule],
  controllers: [AppController],
  providers: [AppService, ProductService],
})
export class AppModule {}
