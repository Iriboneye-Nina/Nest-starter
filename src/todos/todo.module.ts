import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoController } from './todo.controller'
import { Todo } from './todo.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]), // Registering the Todo entity here
  ],
  controllers: [TodoController],
})
export class TodoModule {}
