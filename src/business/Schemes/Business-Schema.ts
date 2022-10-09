import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/Schemes/User-Schema';
import { Order } from 'src/order/Schemes/Order.schema';
import { Product } from 'src/product/Schemes/Product-Schema';
import { Coordinate } from './MapLocation';

@Schema()
export class Business extends Document {
  @Prop({ required: true })
  business_name: string;
  @Prop({ required: true })
  owner_id: string;
  @Prop()
  rating: number;
  @Prop()
  rating_numbers: number;
  @Prop()
  likes: number;
  @Prop({ required: true })
  business_type: string;
  @Prop({ required: true })
  coordinate: Coordinate;
  @Prop({ required: true })
  starters: Product[];
  @Prop({ required: true })
  mains: Product[];
  @Prop({ required: true })
  desserts: Product[];
  @Prop({ required: true })
  drinks: Product[];
  @Prop({ required: true })
  orders: Order[];
  @Prop({ required: true })
  products: Product[];
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
