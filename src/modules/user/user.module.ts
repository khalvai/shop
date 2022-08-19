import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { OtpService } from './user.send.OTP';
import { UserService } from './user.service';

// const importsAndExports= [...UserRepository]
@Module({
  controllers: [UserController],
  providers: [UserRepository,UserService,OtpService],
  imports: [],
})
export class UserModule {}
