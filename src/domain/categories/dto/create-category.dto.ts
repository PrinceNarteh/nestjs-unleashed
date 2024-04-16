import { Length } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class CreateCategoryDto {
  @Length(2, 50)
  readonly name: string;
}
