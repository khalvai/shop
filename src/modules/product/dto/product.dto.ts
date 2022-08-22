import { IsInt, IsString, Length } from 'class-validator';

export class ProductDto {
  @IsString()
  @Length(3, 30, { message: 'name must be maximum 30 and  minimum 3 letter' })
  name: string;

  @IsString()
  @Length(3, 255, {
    message: 'description must be maximum 255 and  minimum 3 letter',
  })
  description: string;
 
//   @IsInt()


}
