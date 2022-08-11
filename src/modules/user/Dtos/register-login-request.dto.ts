import {
    IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginByEmialRequestDto {
  @IsString()
  @IsNotEmpty({message:"should have value"})
  @IsEmail()
  email: string;


}

