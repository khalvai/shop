import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 30, { message: 'name must be maximum 30 and  minimum 3 letter' })
  name: string;

  @IsString()
  @Length(3, 255, {
    message: 'description must be maximum 255 and  minimum 3 letter',
  })
  description: string;

  @IsNotEmpty()
  @IsInt()
  price: number;
}
