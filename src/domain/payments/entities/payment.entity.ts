import { AbstractEntity } from 'database/entities/abstract.entity';
import { Order } from 'orders/entities/order.entity';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Payment extends AbstractEntity {
  @OneToOne(() => Order, (order) => order.payment, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  order: Order;
}
