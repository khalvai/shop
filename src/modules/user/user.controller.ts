import { Body, Controller, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { Post, Get } from '@nestjs/common';
import { RegisterLoginRequestDto } from './Dtos/register-login-request.dto';

@Controller('users')
export class UserController {
  @Post('login-register')
  @UsePipes(ValidationPipe)
  async siginIn(@Body() loginRegisterDto: RegisterLoginRequestDto) {
    return await loginRegisterDto;
  }

  @Get(':id')
  async findUserById(@Param('id') id) {
    return await `user get by id`;
  }
}
