import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { IndexController } from './module/defalut/index/index.controller';
import { DefaultModule } from './module/default/default.module';

//配置数据库连接

@Module({
  imports: [
    AdminModule,
    ApiModule,
    DefaultModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
  ],
  controllers: [AppController, IndexController],
  providers: [AppService],
})
export class AppModule {}
