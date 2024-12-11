import { Controller, Post, Body, Header } from '@nestjs/common';

import { Expense } from './entities/expense/expense.entity';
import { ExpensesService } from './expenses.service';

@Controller('expenses')

export class ExpenseController {
  constructor(private readonly expensesService: ExpensesService) {}
  
  @Header('Content-Type', 'application/json')
  @Post()
  create(@Body() expense: Expense): Promise<Expense> {
    return this.expensesService.create(expense);
  }
}
