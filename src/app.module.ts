import { Module } from '@nestjs/common';
import { CommonModule } from 'common/common.module';
import { UsersModule } from 'users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CommonModule, UsersModule],
})
export class AppModule { }
