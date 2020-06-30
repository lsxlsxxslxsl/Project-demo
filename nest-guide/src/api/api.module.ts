import { Module } from '@nestjs/common';
// import { APP_GUARD } from '@nestjs/core';
// import { AuthGuard } from '../guard/auth.guard';
import { ApiController } from './api.controller';

@Module({
  controllers: [ApiController],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: AuthGuard,
  //   },
  // ],
})
export class ApiModule {}
