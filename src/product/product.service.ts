import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Business } from 'src/business/Schemes/Business-Schema';
import { NewProductDTO } from './DTO/NewProduct.dto';
import { Product } from './Schemes/Product-Schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(Business.name) private businessModel: Model<Business>,
  ) {}
  private logger = new Logger('Product Service');
  async createNewProduct(prod: NewProductDTO): Promise<Product> {
    const { business_id } = prod;
    const newProduct = new this.productModel(prod);
    try {
      this.logger.log('Trying to save new product');
      await newProduct.save();
      this.logger.log('New product saved !');
      this.logger.log('Trying to attach new product to user');
      const foundBusiness = await this.businessModel
        .findById(business_id)
        .exec();
      const foundProducts = foundBusiness.products;
      this.businessModel.findByIdAndUpdate(business_id, {
        products: [...foundProducts, newProduct],
      });
      return newProduct;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
