import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApiDTO {
  @ApiProperty({
    description: '姓名',
    example: '张三'
  })
  @IsString({ message: '姓名必须是 String 类型' })
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly name: string = '张三';
  @ApiProperty({
    description: '年龄',
    example: 18
  })
  @IsNumber()
  @IsNotEmpty({ message: '年龄不能为空' })
  readonly age: number = 18;
}
