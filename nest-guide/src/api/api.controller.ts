import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes
} from '@nestjs/common';
import { EnvService } from '../config/env.service';
import { AuthGuard } from '../guard/auth.guard';
import { ValidationPipe } from '../pipe/validation.pipe';
import { CreateApiDTO } from './dto/api.dto';

export class UpdateCatDto {
  name: string;
}
const user = {
  gender: 'male',
};

@Controller('client')
@UseGuards(new AuthGuard())
export class ApiController {
  constructor(private readonly config: EnvService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createApi: CreateApiDTO) {
    // throw new InternalServerErrorException()
    return {
      name: createApi.name,
      age: createApi.age,
      gender: user.gender,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAll(@Query() query) {
    throw new InternalServerErrorException();
    // return `This action returns all cats (limit: ${query.limit} items) ${this.config.port}`;
  }
}
