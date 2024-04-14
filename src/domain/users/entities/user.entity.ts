import { AbstractEntity } from 'database/entities/abstract.entity';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  password: string;
}
