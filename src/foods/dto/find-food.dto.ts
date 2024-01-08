import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FindFoodDto {
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Partial name of a food',
  })
  name: string;

  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Exact category name',
  })
  category: string;
}
