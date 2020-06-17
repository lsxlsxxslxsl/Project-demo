import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
// import * as ejsMate from 'ejs-mate';
// import * as loaderConnect from 'loader-connect';
// import { join } from 'path';
import { AppModule } from './app.module';
import { AnyExceptionsFilter } from './filter/any-exception.filter';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: isDevelopment ? new Logger() : false,
  });
  app.use(express.json()); // For parsing application/json
  app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  // 监听所有的请求路由，并打印日志
  app.use(logger);
  // 使用全局拦截器打印出参
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api');
  // 过滤处理所有异常
  app.useGlobalFilters(new AnyExceptionsFilter());
  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new HttpExceptionFilter());
  // // 获取根目录 nest-cnode
  // const rootDir = join(__dirname, '..');

  // // 自动转换less为css
  // if (isDevelopment) {
  //   app.use(loaderConnect.less(rootDir));
  // }
  // // 官方指定是这个 默认访问根目录
  // app.useStaticAssets(join(__dirname, '..', 'public'));

  // // 指定视图引擎 处理.html后缀文件
  // app.engine('html', ejsMate);
  // // 视图引擎
  // app.set('view engine', 'html');
  // // 配置模板（视图）的基本目录
  // app.setBaseViewsDir(join(rootDir, 'views'));

  await app.listen(3000);
}
bootstrap();
