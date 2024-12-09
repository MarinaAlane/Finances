import { Controller, Post, Body } from '@nestjs/common';

import { Expense } from './entities/expense/expense.entity';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(@Body() expense: Expense): Promise<Expense> {
    return this.expensesService.create(expense);
  }
}
