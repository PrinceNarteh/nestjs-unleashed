import { AbstractEntity } from 'database/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends AbstractEntity {
  @Column({ unique: true })
  name: string;
}
