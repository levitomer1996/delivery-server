import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Business } from 'src/business/Schemes/Business-Schema';

@Schema()
export class HorizontalList extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  businesses: Business[];
}

export const HorizontalListSchema =
  SchemaFactory.createForClass(HorizontalList);
