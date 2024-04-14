import { Module } from '@nestjs/common';
import { CommonModule } from 'common/common.module';
import { UsersModule } from 'users/users.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';

@Module({
  imports: [DatabaseModule, CommonModule, UsersModule, EnvModule],
})
export class AppModule { }
