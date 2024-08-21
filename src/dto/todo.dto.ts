import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateTodoDto {
  @IsNotEmpty({ message: 'Title is required' })
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  userName: string

  @ApiProperty()
  @IsNumber()
  password: number

  @ApiProperty()
  @IsString()
  description: string

  @ApiProperty()
  isCompleted?: boolean
}
