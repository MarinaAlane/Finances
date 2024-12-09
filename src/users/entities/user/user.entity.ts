import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Expense } from '../../../expenses/entities/expense/expense.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string = '';

  @Column()
  email: string = ''; 
  
  @Column()
  senha: string = '';

  @OneToMany(() => Expense, (expense: { user: any; }) => expense.user)
  expenses: Expense[];
}