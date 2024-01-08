import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsMilitaryTime,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateFoodDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ uniqueItems: true, minLength: 1 })
  name: string;

  @IsPositive()
  @ApiProperty({ minimum: 1 })
  price: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, default: null })
  description?: string;

  @IsPositive()
  @IsOptional()
  @ApiProperty({ required: false, default: null })
  calories?: number;

  @IsMilitaryTime()
  @IsOptional()
  @ApiProperty({
    required: false,
    format: 'HH:MM',
    example: '00:05',
    default: null,
  })
  preparationTime?: Date;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: true })
  isActive?: boolean;

  @IsString()
  @ApiProperty({ uniqueItems: true, example: 'bebidas' })
  category: string;
}
