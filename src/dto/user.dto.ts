import {
  IsOptional,
  IsString,
  IsEmail,
  IsBoolean,
  IsEnum,
  Length,
} from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { UserRole } from '../users/user.entity'

export class UpdateTodoDto {
  @ApiPropertyOptional({
    description: 'Task-completed',
    example: 'working on project',
  })
  @IsOptional()
  @IsString()
  title?: string

  @ApiPropertyOptional({
    description: 'Detailed description of the todo item',
    example: 'Buy fruits, vegetables, and dairy products.',
  })
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional({
    description: 'Username of the user who created the todo item',
    example: 'john_doe',
  })
  @IsOptional()
  @IsString()
  userName?: string

  @ApiPropertyOptional({
    description: 'Email address of the user',
    example: 'john_doe@example.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional({
    description: 'Password for the user (should be hashed before storing)',
    example: 'securePassword123',
  })
  @IsOptional()
  @IsString()
  @Length(6, 20)
  password?: string

  @ApiPropertyOptional({
    description: 'Completion status of the todo item',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean

  @ApiPropertyOptional({
    description: 'Role of the user (e.g., user or admin)',
    example: UserRole.USER,
    enum: UserRole,
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole
}
