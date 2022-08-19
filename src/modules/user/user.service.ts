import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

import { User } from '../interfaces/user-interface';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { OtpService } from './user.send.OTP';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly otpService: OtpService,
  ) {}

  async loginByPhone(phone: string) {
    const code = Math.floor(Math.random() * 900000 + 100000);

    this.otpService.send({ phone: phone, code: code });
    return await this.userRepository.upsertVerification({
      phone: phone,
      code: code,
      reason: 'login',
    });
  }

  async verifyCodeAndGenerateToken (phone:string,code:number) {

    const isCodeValid= await this.isCodeValid(phone,code)
    
     if(isCodeValid&& await this.userExistsByPhone(phone)){}
              
  }

  async isCodeValid(phone:string,code:number) :Promise<boolean>  {
    const nlUser = await this.userRepository.findVerificationByPhone(
      phone,
    );

    if (!nlUser) {
      throw Error("we have n't send code to this number");
    }

    if (nlUser.lastResendTime >= Date.now() + 2 * 60 * 1000) {
      throw Error('time has expired...');
    }

    return code===nlUser.code ? true:false;
  }

  async saveUser(user: User) {
    return await this.userRepository.saveByPhone(user.phone);
  }

  async userExistsByPhone(phone:string):Promise<boolean>{
     const user =await this.userRepository.findByPhone(phone)
    return user ? true:false
  }



  async hash(stuff: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(stuff, salt);
  }
}
