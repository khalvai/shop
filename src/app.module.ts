import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/user.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
