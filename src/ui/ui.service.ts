import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewHorizontalList } from './DTO/NewHorizontalList.dto';
import { HorizontalList } from './Schemes/HorizontalList-Scheme';
import { UI } from './Schemes/UI-Scheme';

@Injectable()
export class UiService {
  constructor(
    @InjectModel(UI.name) private uiModel: Model<UI>,
    @InjectModel(HorizontalList.name)
    private horListModel: Model<HorizontalList>,
  ) {}
  private logger = new Logger('UI-Service');
  async createNewHorizontal(newHor: NewHorizontalList) {
    try {
      const newHorizontal = new this.horListModel({
        title: newHor.title,
        businesses: newHor.businesses,
      });
      const foundUI = await this.uiModel.find();
      if (foundUI.length === 0) {
        this.logger.log('UI not exist, creating new one...');
        const newUI = new this.uiModel({ horizontalList: [newHorizontal] });
        await newUI.save();
        this.logger.log('New UI saved');
      } else {
        await foundUI[0].update({
          horizontalList: [...foundUI[0].horizontalList, newHorizontal],
        });
        return;
      }
    } catch (error) {}
  }

  async getAllUI(): Promise<UI> {
    const ui = await this.uiModel.find();
    return ui[0];
  }
}
