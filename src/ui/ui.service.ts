import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UI } from './Schemes/UI-Scheme';

@Injectable()
export class UiService {
  constructor(@InjectModel(UI.name) private uiModel: Model<UI>) {}
  async createNewUI() {
    const newUI = new this.uiModel({ horizontalList: [] });
    try {
      await newUI.save();
    } catch (err) {}
  }

  async getAllUI(): Promise<UI[]> {
    const ui = await this.uiModel.find();
    return ui;
  }
}
