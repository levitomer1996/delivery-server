import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsNumber,
  IsEmail,
  IsIn,
} from 'class-validator';

export class SignupCredentials {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;
  @IsString()
  f_name: string;
  @IsString()
  l_name: string;
}
