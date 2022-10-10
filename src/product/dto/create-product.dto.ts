import { ApiBody, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class ProductCharacteristicDto {
  @ApiProperty({
    type: String,
    description: 'ProductCharacteristicDto name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'ProductCharacteristicDto value',
  })
  @IsString()
  value: string;
}

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: 'product image',
  })
  @IsString()
  image: string;

  @ApiProperty({
    type: String,
    description: 'Product name',
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: Number,
    description: 'product price',
  })
  @IsNumber()
  price: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'old price property of this product',
  })
  @IsOptional()
  @IsNumber()
  oldPrice?: number;

  @ApiProperty({
    type: Number,
    description: 'credit property',
  })
  @IsNumber()
  credit: number;

  @ApiProperty({
    type: String,
    description: 'product description',
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: String,
    description: 'product advantages',
  })
  @IsString()
  advantages: string;

  @ApiProperty({
    type: String,
    description: 'product disAdvantages',
  })
  @IsString()
  disAdvantages: string;

  @ApiProperty({
    type: Array<String>,
    description: 'array of categories',
  })
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @ApiProperty({
    type: Array<String>,
    description: 'array of tags',
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({
    type: ProductCharacteristicDto,
    description: 'array of characteristics',
    isArray: true,
  })
  @IsArray()
  @ValidateNested()
  @Type(() => ProductCharacteristicDto)
  characteristics: ProductCharacteristicDto[];
}
