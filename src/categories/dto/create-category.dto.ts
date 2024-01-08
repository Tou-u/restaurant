import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ uniqueItems: true, minLength: 1, example: 'Bebidas' })
  name: string;
}
