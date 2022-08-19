import { Module } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
