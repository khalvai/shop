import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterLoginRequestDto {
  @IsString()
  @IsNotEmpty({message:"should have value"})
  emailOrPhoneNumber: string;
}

