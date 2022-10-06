import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image extends Document {
  @Prop({ required: true })
  filename: string;
  @Prop({ required: true })
  path: string;
  @Prop({ required: true })
  mimetype: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
