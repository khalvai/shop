import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  Length,
  Max,
  Min,
  Validate,
} from 'class-validator';

export class PhoneDto {
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
