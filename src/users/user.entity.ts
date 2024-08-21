import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  userName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: false })
  isCompleted: boolean

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER, // Default role
  })
  role: UserRole
}
