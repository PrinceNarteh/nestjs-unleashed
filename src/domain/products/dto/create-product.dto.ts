import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsOptional,
  Length,
  ValidateNested,
} from 'class-validator';
import { IsCurrency } from 'common/decorators/is-currency.decorator';
import { IdDto } from 'common/dto/id.dto';

export class CreateProductDto {
  @Length(2, 50)
  readonly name: string;

  @IsOptional()
  @Length(1, 500)
  readonly description: string;

  @IsCurrency()
  readonly price: number;

  @ArrayNotEmpty()
  @ValidateNested()
  @Type(() => IdDto)
  readonly categories: IdDto[];
}
