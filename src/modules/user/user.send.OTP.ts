import { User } from '../interfaces/user-interface';

export class OtpService {
  async send(messageDto: User) {

    //  messageDto.phone
    //  messageDto.code
    // api/sendMessage via axios or sth related to nestjs

    return await true;
  }
}
