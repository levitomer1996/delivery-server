import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HorizontalList } from './HorizontalList-Scheme';

@Schema()
export class UI extends Document {
  @Prop({ required: true })
  horizontalList: HorizontalList[];
}

export const UISchema = SchemaFactory.createForClass(UI);
