import { RegistryDates } from 'common/embedded/registry-dates.embedded';
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
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

  @Column(() => RegistryDates, { prefix: false })
  registaryDates: RegistryDates;
}
