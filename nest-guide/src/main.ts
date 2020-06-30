import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
  app.enableCors();

  // 全局路由前缀
  app.setGlobalPrefix('api');

  // 配置 Swagger
  const options = new DocumentBuilder()
    .addBearerAuth() // 开启 BearerAuth 授权认证
    .setTitle('upgrade-api')
    .setDescription('运营平台API接口文档')
    .setVersion('1.0')
    // .addTag('接口文档')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
  console.log(`Server running at: ${config.HOST}:${config.PORT}`);
}
bootstrap();
