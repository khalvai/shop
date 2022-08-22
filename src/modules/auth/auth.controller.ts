import {
  Body,
  Controller,
  Post,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhoneAndOtpDto, PhoneDto } from './Dtos/login-request.dto';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // auth/login
  @UsePipes(ValidationPipe)
  @Post('login')
  async login(@Body() phoneDto: PhoneDto) {
    return await this.authService.loginByPhone(phoneDto.phoneNumber);
  }

  // auth/loginEmail

  @UsePipes(ValidationPipe)
  @Post('verficationOTP')
  async verifyAndgenerateToken(@Res({passthrough:true}) res:Response,@Body() phoneAndOtpDto: PhoneAndOtpDto) {

  const token =await this.authService.verifyCodeAndGenerateToken(phoneAndOtpDto.phoneNumber,phoneAndOtpDto.code);
       res.cookie("access-token",token)
  }
}