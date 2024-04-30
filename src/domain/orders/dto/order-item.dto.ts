import { IsEntity } from 'common/decorators/is-entity.decorator';
import { IsPositiveInt } from 'common/decorators/is-positive-int.decorator';
import { IdDto } from 'common/dto/id.dto';

export class OrderItemDto {
  @IsEntity()
  readonly product: IdDto;

  @IsPositiveInt()
  readonly quantity: number;
}
