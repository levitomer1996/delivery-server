import { ProductType } from '../ProductType.enum';

export class NewProductDTO {
  name: string;
  price: number;
  image: string;
  business_id: string;
  type: ProductType;
}
