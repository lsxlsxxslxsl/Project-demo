import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { AppModule } from './app.module';
const config = dotenv.parse(
  fs.readFileSync(`./env/.${process.env.NODE_ENV}.env`),
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: process.env.NODE_ENV === 'development' ? new Logger() : false,
  });

  // 全局路由前缀
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log(`Server running at: ${config.HOST}:${config.PORT}`);
}
bootstrap();
