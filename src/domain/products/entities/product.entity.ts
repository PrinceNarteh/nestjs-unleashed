import { Category } from 'categories/entities/category.entity';
import { AbstractEntity } from 'database/entities/abstract.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Product extends AbstractEntity {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @ManyToMany(() => Category, (categories) => categories.products)
  @JoinTable({ name: 'product_to_category' })
  categories: Category[];
}
