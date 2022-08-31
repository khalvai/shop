import { IsString, Length, IsInt, IsNotEmpty } from 'class-validator';

export class CreateVariantDto {
  @IsString()
  @Length(2, 30, { message: 'name must be maximum 30 and  minimum 3 letter' })
  name: string;

  @IsInt()
  @IsNotEmpty()
  numberInStock: number;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  off: number;

  @IsNotEmpty({
    message:
      'varinat should be for  a specified product,so give me a product id.',
  })
  @IsInt()
  productId: number;
}

