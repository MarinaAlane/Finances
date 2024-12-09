import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { Expense } from './entities/expense/expense.entity';
import { ExpensesService } from './expenses.service';
import { ExpenseController } from './expenses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpensesService],
  exports: [ExpensesService],
  controllers: [ExpenseController],
})

export class ExpensesModule {}