import {
  Body,
  Controller,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Post, Get } from '@nestjs/common';
import {
  LoginByEmailRequestDto,
  PhoneNumberAndPasswordDto,
} from './Dtos/register-login-request.dto';

@Controller('users')
export class UserController {
  @Post('loginByEmail')
  async loginByEmail() {}

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneNumber')
  async lgoinByPhone(@Body() loginByPhone) {
    return await `it is working`;
  }

  @UsePipes(ValidationPipe)
  @Post('/loginByemailAndPassword')
  @UsePipes(ValidationPipe)
  async loginByEmailAndPassword(
    @Body() loginRegisterDto: LoginByEmailRequestDto,
  ) {
    return await loginRegisterDto;
  }

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneAndPassword')
  async loginByPhone(@Body() phoneNoAndPasswordDto: PhoneNumberAndPasswordDto) {
    return ``;
  }
}
