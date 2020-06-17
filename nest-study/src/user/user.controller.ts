import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { ValidationPipe } from '../pipe/validation.pipe';
import { RegisterInfoDTO } from './user.dto'; // 引入 DTO
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  index(): string {
    return '刘思鑫';
  }

  // JWT验证 - Step 1: 用户请求登录
  @Post('login')
  async login(@Body() loginParmas: { username: string; password: string }) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }

  @Get(':name')
  async findOne(@Param() params: { name: string }): Promise<any> {
    return await this.usersService.findOne(params.name);
  }

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('register')
  async register(@Body() body: RegisterInfoDTO) {
    return await this.usersService.register(body);
  }
}
