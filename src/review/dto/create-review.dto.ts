import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    type: String,
    description: 'review name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'review title',
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: 'review description',
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: Number,
    description: 'review rating',
  })
  @Max(5)
  @Min(1, { message: 'Check validation message FUCK!' })
  @IsNumber()
  rating: number;

  @ApiProperty({
    type: String,
    description: 'product id for this review',
  })
  @IsString()
  productId: string;
}
