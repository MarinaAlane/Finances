import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Expense } from './entities/expense/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private usersRepository: Repository<Expense>,
  ) {}

  create(expense: Expense): Promise<Expense> {
    return this.usersRepository.save(expense);
  }
}
