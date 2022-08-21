import {
  Body,
  Controller,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Post, Get } from '@nestjs/common';
import {
  EmialDto,
  PhoneNumberAndPasswordDto,
  PhoneDto,
  PhoneAndOtpDto,
} from './Dtos/login-phone-password.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('loginByEmail')
  async loginByEmail() {}

  


  @UsePipes(ValidationPipe)
  @Post('loginByPhoneNumber')
  async verifyUser(user:PhoneAndOtpDto){
    // return await this.userService.verifyCodeAndGenerateToken(user)
  }









}
