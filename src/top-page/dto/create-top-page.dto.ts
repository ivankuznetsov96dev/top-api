import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { TopLevelCategory } from '../top-page.model';

export class HhDataDto {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  senioeSalary: number;
}

export class TopPageAdvantagesDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;

  @ApiProperty({
    type: String,
    description: 'top-page description',
  })
  @IsString()
  secondCategory: string;

  @ApiProperty({
    type: String,
    description: 'alias for this top page',
  })
  @IsString()
  alias: string;

  @ApiProperty({
    type: String,
    description: 'top-page title',
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: 'top-page category',
  })
  @IsString()
  category: string;

  @ApiPropertyOptional({
    type: () => HhDataDto,
    description:
      'HhData for this top-page {count: number; juniorSalary: number; middleSalary: number; senioeSalary: number;}',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => HhDataDto)
  hh?: HhDataDto;

  @IsArray()
  @ValidateNested()
  @Type(() => TopPageAdvantagesDto)
  advantages: TopPageAdvantagesDto[];

  @IsString()
  seoText: string;

  @IsString()
  tagsTitle: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
