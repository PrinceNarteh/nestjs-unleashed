import { Product } from 'products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Expose } from 'class-transformer';

@Entity()
export class OrderItem {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @ManyToOne(() => Product, (product) => product.items)
  product: Product;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  order: Order;

  @Expose()
  get subTotal() {
    return this.quantity * this.price;
  }
}
