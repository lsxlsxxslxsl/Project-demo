import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateApiDTO {
  @IsString({ message: '姓名必须是 String 类型' })
  @IsNotEmpty({ message: '姓名不能为空' })
  readonly name: string;
  @IsNumber()
  @IsNotEmpty({ message: '年龄不能为空' })
  readonly age: number;
}
