import {
  Body,
  Controller,
  Get,
  Logger,
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
import { Product } from 'src/product/Schemes/Product-Schema';
import { BusinessService } from './business.service';
import { NewBusinessDTO } from './DTO/NewBusiness.dto';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}
  private logger = new Logger('Business Controller');

  @Post('/createbusiness')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async createBusiness(
    @GetUser() user: User,
    @Body() newBusiness: NewBusinessDTO,
  ) {
    return this.businessService.createNewBusiness(user.id, newBusiness);
  }

  @Get('/getbusinessproducts')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  async getBusinessProducts(@GetUser() user: User): Promise<Product[]> {
    this.logger.log(user);
    const business_id = user.Business[0]._id;
    return this.businessService.getBusinessProducts(business_id);
  }
}
