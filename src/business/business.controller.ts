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
import { Business } from './Schemes/Business-Schema';

@Controller('business')
export class BusinessController {
  constructor(private businessService: BusinessService) {}
  private logger = new Logger('Business Controller');

  @Post('/createbusiness')
  async createBusiness(@Body() newBusiness: NewBusinessDTO, id: string) {
    return this.businessService.createNewBusiness(id, newBusiness);
  }

  @Get('/getbusinesses')
  async getBusinesses(): Promise<Business[]> {
    return this.businessService.getBusinesses();
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
