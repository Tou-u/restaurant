import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ uniqueItems: true, example: 'user@gmail.com' })
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  @ApiProperty({ minLength: 1, maxLength: 50, example: 'User123' })
  password: string;

  @IsString()
  @MinLength(1)
  @ApiProperty({ minLength: 1, example: 'User Name' })
  fullName: string;
}
