import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class ProductDto {
  @IsString()
  @Length(3, 30, { message: 'name must be maximum 30 and  minimum 3 letter' })
  name: string;

  @IsString()
  @Length(3, 255, {
    message: 'description must be maximum 255 and  minimum 3 letter',
  })
  description: string;

  @IsInt()
  @IsNotEmpty()
  numberInStock: number;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  off: number;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @Length(3, 30, { message: 'name must be maximum 30 and  minimum 3 letter' })
  name: string;

  @IsOptional()
  @IsString()
  @Length(3, 255, {
    message: 'description must be maximum 255 and  minimum 3 letter',
  })
  description: string;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  numberInStock: number;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsInt()
  off: number;
}
