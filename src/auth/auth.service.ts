import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { SignupCredentials } from './DTO/SignupCredentials.dto';
import { User } from './Schemes/User-Schema';
import * as bcrypt from 'bcryptjs';
import { AuthRoles } from './AuthRoles';
import { SigninCredentials } from './DTO/SigninCredentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectConnection() private connection: Connection,
    private jwtService: JwtService,
  ) {}

  private logger = new Logger('Auth-Service');
  async signUp_owner(creds: SignupCredentials) {
    const { email, f_name, l_name } = creds;
    const salt = await bcrypt.genSalt();
    const genPass = await this.hashPassword(creds.password, salt);
    const newUser = new this.userModel({
      email,
      f_name,
      l_name,
      password: genPass,
      salt,
      role: AuthRoles.ADMIN,
      business: [],
    });
    const result = await newUser.save();
    return result.id as string;
  }

  async signIn_owner(
    creds: SigninCredentials,
  ): Promise<{ user: User; accessToken: string }> {
    const user = await this.userModel.findOne({ email: creds.email });
    if (!user) {
      this.logger.log('User not exist');
      throw new BadRequestException();
    }
    const isPasswordCorrect = await bcrypt.compare(
      creds.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      this.logger.log('Password incorrect');
      throw new BadRequestException();
    }
    const payload: JwtPayload = { uid: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { user, accessToken };
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
