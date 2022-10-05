import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/Schemes/User-Schema';
import { Business } from 'src/business/Schemes/Business-Schema';
import { Coordinate } from 'src/business/Schemes/MapLocation';
import { Product } from 'src/product/Schemes/Product-Schema';

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  business_id: string;
  @Prop({ required: true })
  customer_full_name: string;
  @Prop({ required: true })
  user_id: string;
  @Prop({ required: true })
  products_id: string[];
  @Prop({ required: true })
  coordinate: Coordinate;
  @Prop({ required: true })
  adress: string;
  @Prop({ required: true })
  date: string;
  @Prop({ required: true })
  note: string;
  @Prop({ required: true })
  sale_amount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
