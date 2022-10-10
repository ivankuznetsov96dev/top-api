import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({
    type: String,
    description: 'This is uniq email property',
  })
  @IsString()
  login: string;

  @ApiProperty({
    type: String,
    description: 'Login password',
  })
  @IsString()
  password: string;
}
