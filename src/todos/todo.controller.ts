import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Todo } from './todo.entity'
import { CreateTodoDto } from '../dto/todo.dto'
import { ApiTags } from '@nestjs/swagger'

interface CreateTodoResponse {
  message: string
  data: Todo
}

@Controller('todos')
@ApiTags('TOdo')
export class TodoController {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id } })
  }

  @Post()
  async createTodo(
    @Body() createTodoDto: CreateTodoDto
  ): Promise<CreateTodoResponse> {
    const todo = this.todoRepository.create({
      ...createTodoDto,
      isCompleted: createTodoDto.isCompleted ?? false,
    })

    const savedTodo = await this.todoRepository.save(todo)
    return { message: 'Task successfully created', data: savedTodo }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() todo: Partial<Todo>
  ): Promise<Todo> {
    await this.todoRepository.update(id, todo)
    return this.todoRepository.findOne({ where: { id } })
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.todoRepository.delete(id)
  }
}
