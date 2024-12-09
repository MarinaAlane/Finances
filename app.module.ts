import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./src/users/users/users.module";
import { User } from "./src/users/entities/user/user.entity";
import { Expense } from "./src/expenses/entities/expense/expense.entity";
import { ExpensesService } from './src/expenses/expenses.service';
import { ExpenseController } from './src/expenses/expenses.controller';
import { ExpensesModule } from './src/expenses/expenses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'finances_web',
      entities: [User, Expense],
      synchronize: true,
    }),
    UsersModule,
    ExpensesModule,
  ],
})
export class AppModule {}
