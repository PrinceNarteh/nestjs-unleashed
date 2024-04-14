import { AbstractEntity } from 'database/entities/abstract.entity';
import { OrderStatus } from 'orders/enums/order-status.enum';
import { Column, Entity } from 'typeorm';

@Entity()
export class Order extends AbstractEntity {
  @Column()
  status: OrderStatus;
}
