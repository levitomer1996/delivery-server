import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HorizontalList,
  HorizontalListSchema,
} from './Schemes/HorizontalList-Scheme';
import {
  SwiperVideoCard,
  SwiperVideoCardSchema,
} from './Schemes/SwiperVideoCard-Scheme';
import { TopSwiper, TopSwiperSchema } from './Schemes/TopSwiper-Scheme';
import { UI, UISchema } from './Schemes/UI-Scheme';
import { UiController } from './ui.controller';
import { UiService } from './ui.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UI.name, schema: UISchema },
      { name: TopSwiper.name, schema: TopSwiperSchema },
      { name: HorizontalList.name, schema: HorizontalListSchema },
      { name: SwiperVideoCard.name, schema: SwiperVideoCardSchema },
    ]),
  ],
  controllers: [UiController],
  providers: [UiService],
})
export class UiModule {}
