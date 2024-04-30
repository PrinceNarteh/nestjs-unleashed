import { AbstractEntity } from 'database/entities/abstract.entity';
import { OrderStatus } from 'orders/enums/order-status.enum';
import { Payment } from 'payments/entities/payment.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { User } from 'users/entities/user.entity';
import { OrderItem } from './order-item.entity';
import { Expose } from 'class-transformer';

@Entity()
export class Order extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT,
  })
  status: OrderStatus;

  @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
  items: OrderItem[];

  @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
  payment: Payment;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;

  @Expose()
  get total() {
    return this.items?.reduce((acc, cur) => acc + cur.subTotal, 0);
  }
}
