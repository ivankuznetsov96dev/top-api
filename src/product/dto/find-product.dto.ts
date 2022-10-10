import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class FindProductDto {
  @ApiProperty({
    type: String,
    description: 'category string to find all query in DB',
  })
  @IsString()
  category: string;

  @ApiProperty({
    type: Number,
    description: 'limit of responce queryes',
  })
  @IsNumber()
  limit: number;
}
