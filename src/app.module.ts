import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoModule } from './todos/todo.module'
import { Todo } from './todos/todo.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'doroll',
      entities: [Todo],
      synchronize: false, // Disable automatic synchronization
      migrations: [__dirname + '/migrations/*.ts'], // Path to migration files
      migrationsRun: true, // Automatically run migrations on application startup
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
