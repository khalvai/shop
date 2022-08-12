import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../interfaces/user-interface';
@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async saveByPhoneAndPassword(user: User) {
    
    return await this.prisma.user.create({
      data: { phone: user.phone, password: user.password },
    });
  }

  async findUserByPhone(userDto: User) {
    return await this.prisma.user.findFirst({
      where: {
        phone: userDto.phone,
      },
    });
  }

  async findUserByEmail(userDto: User) {
    return await this.prisma.user.findFirst({
      where: {
        email: userDto.emial,
      },
    });

 //https://yewtu.be/watch?v=lteTsTcPRMY  


  }
}
