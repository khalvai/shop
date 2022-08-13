import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { User } from '../interfaces/user-interface';
import { UserRepository } from './user.repository';
import { OtpService } from './user.send.OTP';
import { error } from 'console';
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly otpService: OtpService,
  ) {}

  async loginByPhone(phone: string) {
    const code = Math.random();
    const codeSent = await this.otpService.send({ phone: phone, code: code });

    if (codeSent) {
      return await this.userRepository.upsertVerification({
        phone: phone,
        code: code,
        reason: 'login',
      });
    }

    throw Error('sth went wrong on server side ');
  }

  async checkVerification(user: User) {
    const nlUser = await this.userRepository.findVerificationByPhone(
      user.phone,
    );

    if (!nlUser) {
      throw Error("we have n't send code to this number");
    }

    if (nlUser.code === user.code) {
      //retuen create jwt tocken....
    }
  }
}
