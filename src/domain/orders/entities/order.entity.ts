import { AbstractEntity } from 'database/entities/abstract.entity';
import { OrderStatus } from 'orders/enums/order-status.enum';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()
export class Order extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.AWAITING_PAYMENT,
  })
  status: OrderStatus;

  @ManyToOne(() => User, (customer) => customer.orders, { nullable: false })
  customer: User;
}
