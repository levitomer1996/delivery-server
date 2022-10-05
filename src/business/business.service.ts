import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/Schemes/User-Schema';
import { NewBusinessDTO } from './DTO/NewBusiness.dto';
import { Business } from './Schemes/Business-Schema';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private businessModel: Model<Business>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  private logger = new Logger('Business Service');

  async createNewBusiness(
    owner_id: string,
    newBusiess: NewBusinessDTO,
  ): Promise<Business> {
    const { name, business_type, coordinate } = newBusiess;
    const business = new this.businessModel({
      ...newBusiess,
      owner_id,
      starters: [],
      mains: [],
      desserts: [],
      drinks: [],
    });

    try {
      this.logger.log('Trying to save new business...');
      await business.save();
      this.logger.log('New business saved');
      this.logger.log('Attaching to user');
      await this.userModel.findByIdAndUpdate(owner_id, {
        Business: [business],
      });
      this.logger.log('New business attack to user');
    } catch (error) {}
    return;
  }
}
