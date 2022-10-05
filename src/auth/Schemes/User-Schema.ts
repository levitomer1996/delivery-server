import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Business } from 'src/business/Schemes/Business-Schema';
import { AuthRoles } from '../AuthRoles';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  salt: string;
  @Prop({ required: true })
  f_name: string;
  @Prop({ required: true })
  l_name: string;
  @Prop({ required: true })
  role: AuthRoles;
  @Prop({ required: true })
  Business: Business[];
}

export const UserSchema = SchemaFactory.createForClass(User);
