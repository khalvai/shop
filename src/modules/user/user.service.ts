import { Injectable } from '@nestjs/common';
import { PhoneNumberUtil } from 'google-libphonenumber';

import { User } from '../interfaces/user-interface';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { OtpService } from '../auth/user.send.OTP';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly otpService: OtpService,
  ) {}

  async saveByPhone(phone: string) {
    return await this.userRepository.saveByPhone(phone);
  }

  formatPhone(phone: string): string {
    const phoneUtil = PhoneNumberUtil.getInstance();
    return phoneUtil.parse(phone, 'IR').getNationalNumber() + '';
  }
  async userExistsByPhone(phone: string): Promise<boolean> {
    const user = await this.userRepository.findByPhone(phone);
    return user ? true : false;
  }

  async hash(stuff: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(stuff, salt);
  }
}
