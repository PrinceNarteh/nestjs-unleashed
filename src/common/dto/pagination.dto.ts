import { IsOptional } from 'class-validator';
import { IsPositiveInt } from 'common/decorators/is-positive-int.decorator';

export class PaginationDto {
  @IsOptional()
  @IsPositiveInt()
  readonly limit: number;

  @IsOptional()
  @IsPositiveInt()
  readonly offset: number;
}
