import { Controller, Post, Body, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../entities/user/user.entity'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Header('Content-Type', 'application/json')
  create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }
}