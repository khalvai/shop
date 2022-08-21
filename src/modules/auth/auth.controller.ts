import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhoneAndOtpDto, PhoneDto } from './Dtos/login-request.dto';

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
  async verifyAndgenerateToken(@Body() Dto: PhoneAndOtpDto) {

    return await this.authService.verifyCodeAndGenerateToken(Dto.phoneNumber,Dto.code);
  }
}
