import { IsEmail, IsString, Length, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @Length(2, 50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('GH')
  readonly phoneNumber: string;

  @IsString()
  readonly password: string;
}
