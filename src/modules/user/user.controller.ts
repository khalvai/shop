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
  PhoneNumberAndPasswordDto,Phone
} from './Dtos/login-phone-password.dto';

@Controller('users')
export class UserController {
  @Post('loginByEmail')
  async loginByEmail() {}

  @UsePipes(ValidationPipe)
  @Post('loginByPhoneNumber')
  async lgoinByPhone(@Body() phone) {
    return await `it is working`;
  }

  // @UsePipes(ValidationPipe)
  // @Post('/loginByemailAndPassword')
  // @UsePipes(ValidationPipe)
  // async loginByEmailAndPassword(
  //   @Body() email: EmialDto,
  // ) {
  //   return await loginRegisterDto;
  // }

  // @UsePipes(ValidationPipe)
  // @Post('loginByPhoneAndPassword')
  // async loginByPhone(@Body() phoneNoAndPasswordDto: PhoneNumberAndPasswordDto) {
  //   return ``;
  // }
}
