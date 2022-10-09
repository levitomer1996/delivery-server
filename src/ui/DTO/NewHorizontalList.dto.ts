import { IsString } from 'class-validator';
import { Business } from 'src/business/Schemes/Business-Schema';

export class NewHorizontalList {
  @IsString({ message: 'title must be string' })
  title: string;
  businesses: Business[];
}
