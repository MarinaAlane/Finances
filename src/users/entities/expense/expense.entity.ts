import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string = '';
  
  @Column()
  tag: string = '';

  @Column({ type: Date })
  expire_date: string = '';

  @Column({ type: Date})
  pay_date: string = '';

 @ManyToOne(() => User, (user) => user.expenses)
  user: User;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  imagePath: string
}