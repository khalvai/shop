import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { OtpService } from './user.send.OTP';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly otpService: OtpService,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async loginByPhone(userPhone: string) {
    const code = Math.floor(Math.random() * 900000 + 100000);
    console.log(code);
    const phone = this.userService.formatPhone(userPhone);
    const hashedCode = await this.hashCode(code);
    await this.checkNumberOfTry(phone);

    this.otpService.send({ phone: phone, code: code });

    return await this.userRepository.upsertVerification({
      phone: phone,
      code: hashedCode,
      reason: 'login',
    });
  }

  async checkNumberOfTry(phone: string) {
    const nlUser = await this.userRepository.findVerificationByPhone(phone);

    if (!nlUser) {
      return;
    }

    const isPassedTowWeeksFromLastResnd =
      new Date(new Date(nlUser.lastResendTime)).getTime() +
        2 * 7 * 24 * 60 * 60 * 1000 <
      Date.now();

    const isRobot = nlUser.try > 30 && !isPassedTowWeeksFromLastResnd;

    if (isRobot) throw new BadRequestException('too musch request for otp');
  }

  async verifyCodeAndGenerateToken(userPhone: string, code: number) {
    const phone = this.userService.formatPhone(userPhone);

    const isCodeValid = await this.isCodeValid(phone, code);

    if (!isCodeValid)
      throw new UnauthorizedException(
        'make sure, you have entered the code correctely',
      );

    let user = await this.userRepository.findByPhone(phone);

    if (!user) user = await this.userService.saveByPhone(phone);

    return this.generateJwt(user.id);
  }

  async isCodeValid(phone: string, code: number): Promise<boolean> {
    const nlUser = await this.userRepository.findVerificationByPhone(phone);

    if (!nlUser) {
      throw new BadRequestException("We haven't sent code to this number");
    }

    const isExpird = !(
      new Date(new Date(nlUser.lastResendTime)).getTime() + 2 * 60 * 1000 >
      Date.now()
    );

    if (isExpird) {
      throw new NotAcceptableException('time has expired...');
    }

    return bcrypt.compare(code + '', nlUser.code) ? true : false;
  }

  async hashCode(code: number): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(10);

      const hash = await bcrypt.hash(code + '', salt);

      return hash;
    } catch (error) {
      console.log(error);
    }
  }

  async generateJwt(id: number) {
    const jwtSecretKey = process.env.SECRET_KEY;
    return this.jwtService.sign({ id: id }, { secret: jwtSecretKey });
  }
}
