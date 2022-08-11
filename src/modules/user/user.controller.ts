import {
  Body,
  Controller,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Post, Get } from '@nestjs/common';
import { LoginByEmialRequestDto } from './Dtos/register-login-request.dto';

@Controller('users')
export class UserController {

  
  @Post('loginByEmail')
  async loginByEmail() {}

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneNumber')
  async lgoinByPhone() {}

  @UsePipes(ValidationPipe)
  @Post('/loginByemailAndPassword')
  @UsePipes(ValidationPipe)
  async loginByEmailAndPassword(
    @Body() loginRegisterDto: LoginByEmialRequestDto,
  ) {
    return await loginRegisterDto;
  }

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneAndPassword')
  async loginByPhone() {}
}
