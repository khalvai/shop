import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class EmialDto {
  @IsString()
  @IsNotEmpty({ message: 'should have value' })
  @IsEmail()
  email: string;
}

export class PhoneNumberAndPasswordDto {
  @IsPhoneNumber('IR', { message: 'phone number should be correct' })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: "password shouldn't be longger than 30 letters." })
  @MinLength(8, { message: "Password shouldn't be less than 8 letter" })
  password: string;
}

export class PhoneDto {
  @IsPhoneNumber('IR', { message: 'phone number should be correct' })
  phoneNumber: string;
}

export class PhoneAndOtpDto extends PhoneDto {
  @IsNotEmpty()
  @IsNumber()
  @Length(6, 6, { message: 'code is invalid' })
  code: number;
}
