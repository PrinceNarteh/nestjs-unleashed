import { AbstractEntity } from 'database/entities/abstract.entity';
import { Product } from 'products/entities/product.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Category extends AbstractEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}
