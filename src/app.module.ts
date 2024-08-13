import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todos/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'iriboneyenina@gmail.com',
      password: '00044455',
      database: 'your-database-name',
      entities: ['todo'],
      synchronize: true, 
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


