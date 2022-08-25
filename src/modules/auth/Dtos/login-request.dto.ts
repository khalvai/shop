import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
  Max,
  Min,
  Validate,
} from 'class-validator';

export class PhoneDto {
  @IsNotEmpty({ message: "phone number can't be empaty" })
  @IsString()
  @IsPhoneNumber('IR', { message: 'phone number should be correct' })
  phoneNumber: string;
}
export class PhoneAndOtpDto extends PhoneDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(100000)
  @Max(999999)
  code: number;
}
