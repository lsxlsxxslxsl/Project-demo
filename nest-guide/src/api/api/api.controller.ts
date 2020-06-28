import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req
} from '@nestjs/common';

// createCatDto 和 updateCatDto 可以使用类来定义其结构：
export class CreateApiDto {
  id: number;
  name: string;
}

export class UpdateApiDto {
  name: string;
}

@Controller('api')
export class ApiController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(200)
  async create(@Body() createApiDto: CreateApiDto) {
    return 'This action adds a new api';
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return `This action removes a #${id} api`;
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return `This action returns a #${id} api`;
  }

  @Get()
  async findAll(@Req() req, @Query() query) {
    return `This action returns all api (limit: ${query.limit} items)`;
  }
}
