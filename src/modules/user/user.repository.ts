import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Verification } from '../interfaces/user-interface';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async saveByPhoneAndPassword(user: User) {
    return await this.prisma.user.create({
      data: {
        phone: user.phone,
        password: user.password,
        lastLoggedInTime: new Date().toISOString(),
      },
    });
  }

  async findByPhone(phone: string) {
    return await this.prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
  }

  async findUserByEmail(emial: string) {
    return await this.prisma.user.findFirst({
      where: {
        email: emial,
      },
    });
  }

  async findVerificationByPhone(phon: string) {
    return this.prisma.verification.findFirst({ where: { phone: phon } });
  }

  async saveByPhone(phone: string) {
    return this.prisma.user.create({
      data: { phone: phone, lastLoggedInTime: new Date().toISOString() },
    });
  }

  async upsertVerification(verification: Verification) {
    return await this.prisma.verification.upsert({
      where: {
        phone: verification.phone,
      },
      update: {
        code: verification.code,
        lastResendTime: new Date().toISOString(),
        reason: verification.reason,
        try: { increment: 1 },
      },
      create: {
        phone: verification.phone,
        code: verification.code,
        lastResendTime: new Date().toISOString(),
        reason: verification.reason,
      },
    });
  }
}
