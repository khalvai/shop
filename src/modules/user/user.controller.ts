import { Controller, Param } from '@nestjs/common';
import { Post, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('login-register')
  async siginIn() {
    return await `user sigin in`;
  }

  @Get(':id')
  async findUserById(@Param('id') id) {
    return await `user get by id`;
  }
}
