import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { NewProductDTO } from './DTO/NewProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  private logger = new Logger('Product controller');
  @Post('/new')
  async createNewProduct(@Body() body: NewProductDTO) {
    this.logger.log(body);
    return this.productService.createNewProduct(body);
  }
}
