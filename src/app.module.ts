import { Module } from '@nestjs/common';
import { CommonModule } from 'common/common.module';
import { UsersModule } from 'users/users.module';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { OrdersModule } from './domain/orders/orders.module';
import { PaymentsModule } from './domain/payments/payments.module';
import { CategoriesModule } from './domain/categories/categories.module';
import { ProductsModule } from './domain/products/products.module';

@Module({
  imports: [DatabaseModule, CommonModule, UsersModule, EnvModule, OrdersModule, PaymentsModule, CategoriesModule, ProductsModule],
})
export class AppModule { }
