import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Business } from 'src/business/Schemes/Business-Schema';
import { SwiperVideoCard } from './SwiperVideoCard-Scheme';

@Schema()
export class TopSwiper extends Document {
  @Prop({ required: true })
  cards: SwiperVideoCard;
}

export const TopSwiperSchema = SchemaFactory.createForClass(TopSwiper);
