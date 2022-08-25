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
  @Post('login')
  async login(@Body() phoneDto: PhoneDto) {
    return await this.authService.loginByPhone(phoneDto.phoneNumber);
  }

  // auth/loginEmail

  @Post('verficationOTP')
  async verifyAndgenerateToken(
    @Res({ passthrough: true }) res: Response,
    @Body() phoneAndOtpDto: PhoneAndOtpDto,
  ) {
    const token = await this.authService.verifyCodeAndGenerateToken(
      phoneAndOtpDto.phoneNumber,
      phoneAndOtpDto.code,
    );
    console.log(token);
    res.cookie('access-token', token);
  }
}
