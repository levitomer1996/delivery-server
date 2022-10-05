import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Business } from 'src/business/Schemes/Business-Schema';

@Schema()
export class SwiperVideoCard extends Document {
  @Prop({ required: true })
  title: string;
}

export const SwiperVideoCardSchema =
  SchemaFactory.createForClass(SwiperVideoCard);
