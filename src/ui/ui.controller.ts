import { Controller, Get, Post } from '@nestjs/common';

import { UI } from './Schemes/UI-Scheme';
import { UiService } from './ui.service';

@Controller('ui')
export class UiController {
  constructor(private UiService: UiService) {}
  @Post('/newui')
  async createNewUI() {
    return this.UiService.createNewUI();
  }
  @Get('/uiList')
  async getAllUI(): Promise<UI[]> {
    return this.UiService.getAllUI();
  }
}
