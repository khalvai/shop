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
} from './Dtos/login-phone-password.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('loginByEmail')
  async loginByEmail() {}

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneNumber')
  async lgoinByPhone(@Body() phoneDto: PhoneDto) {
    console.log("hey there");
    return await this.userService.loginByPhone(phoneDto.phoneNumber);
  }
}
