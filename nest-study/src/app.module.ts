import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CommodityService } from './commodity/commodity.service';
import { CommodityController } from './commodity/commodity.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, UserController, CommodityController],
  providers: [AppService, CommodityService],
})
export class AppModule {}
