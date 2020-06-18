import * as Joi from '@hapi/joi';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Render,
  UploadedFile,
  UseInterceptors,
  UsePipes
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UserPipe } from '../pipe/user.pipe';

const rootInfo = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.string().required(),
});

@Controller('upload')
export class UploadController {
  @Get(':id')
  @UsePipes(new UserPipe(rootInfo))
  @Render('upload')
  index(@Query() query, @Param() param) {
    return {
      ...query,
      ...param,
    };
  }

  @Post('create')
  @UsePipes(new UserPipe(rootInfo))
  create(@Body() body) {
    return {
      ...body,
    };
  }

  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  doAdd(@Body() body, @UploadedFile() file) {
    console.log(body);
    console.log(file); //上传图片的信息  必须在form的属性里面配置enctype="multipart/form-data"

    console.log(__dirname);

    const writeStream = createWriteStream(
      join(
        __dirname,
        '../../public/upload',
        `${Date.now()}-${file.originalname}`,
      ),
    );

    writeStream.write(file.buffer);

    return '上传图片成功';
  }
}
