import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NavService {
  constructor(@InjectModel('Nav') private navModel) {}

  //在数据库里面查询全部文章
  async findAll(json = {}) {
    const result = await this.navModel.find(json).exec();
    return result;
  }
}
