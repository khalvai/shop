import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { OtpService } from './user.send.OTP';
import { UserRepository } from '../user/user.repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtStrategy } from './startegy/jwt.startegy';
@Module({
  imports: [UserModule, JwtModule.register({ secret: process.env.SECRET_kEY})],
  controllers: [AuthController],
  providers: [AuthService,OtpService, UserRepository,jwtStrategy],
})
export class AuthModule {}
