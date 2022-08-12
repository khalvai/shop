import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'
;
import { prisma, Prisma, User } from '@prisma/client';
import { PhoneNumberAndPasswordDto } from './Dtos/register-login-request.dto';
@Injectable()
export class UserService {
  constructor(private readonly userService:UserService) {}


}

