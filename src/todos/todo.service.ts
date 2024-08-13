import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  private idCounter = 1;

  async create(todo: Partial<Todo>): Promise<Todo> {
    const newTodo: Todo = { id: this.idCounter++, ...todo } as Todo;
    this.todos.push(newTodo);
    return newTodo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async findOne(id: number): Promise<Todo | undefined> {
    return this.todos.find(todo => todo.id === id);
  }

  async update(id: number, updateTodo: Partial<Todo>): Promise<Todo | null> {
    const todo = this.findOne(id);
    if (!todo) return null;
    Object.assign(todo, updateTodo);
    return todo;
  }

  async remove(id: number): Promise<void> {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
