import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SigninCredentials } from './DTO/SigninCredentials.dto';
import { SignupCredentials } from './DTO/SignupCredentials.dto';
import { GetUser } from './get-user.decorator';
import { User } from './Schemes/User-Schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/tokensignin')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async tokenSignin(@GetUser() user: User): Promise<User> {
    return user;
  }

  @Post('/signupowner')
  async signup_owner(@Body() creds: SignupCredentials) {
    return this.authService.signUp_owner(creds);
  }
  @Post('/signinowner')
  async signin_admin(@Body() creds: SigninCredentials) {
    return this.authService.signIn_owner(creds);
  }
}
