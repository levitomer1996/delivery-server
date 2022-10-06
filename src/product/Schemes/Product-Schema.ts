import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ProductType } from '../ProductType.enum';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  type: ProductType;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
