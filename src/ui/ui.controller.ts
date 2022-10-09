import { Controller, Get, Post } from '@nestjs/common';
import { NewHorizontalList } from './DTO/NewHorizontalList.dto';

import { UI } from './Schemes/UI-Scheme';
import { UiService } from './ui.service';

@Controller('ui')
export class UiController {
  constructor(private UiService: UiService) {}

  @Post('/newhotizontal')
  async createNewHorizontal(newHor: NewHorizontalList) {
    return this.UiService.createNewHorizontal(newHor);
  }

  @Get('/ui')
  async getAllUI(): Promise<UI> {
    return this.UiService.getAllUI();
  }
}
