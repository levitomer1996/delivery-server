import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { AdminRoleGurad } from 'src/auth/Guards/Admin-Role-Guard';
import { RolesGuard } from 'src/auth/Guards/roles.guard';
import { User } from 'src/auth/Schemes/User-Schema';
import { BusinessService } from './business.service';
import { NewBusinessDTO } from './DTO/NewBusiness.dto';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}

  @Post('/createbusiness')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async createBusiness(
    @GetUser() user: User,
    @Body() newBusiness: NewBusinessDTO,
  ) {
    return this.businessService.createNewBusiness(user.id, newBusiness);
  }
}
