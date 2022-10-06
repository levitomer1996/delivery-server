import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ImageDTO } from './dto/Image.dto';
import { Image } from './Schemes/Image.schema';
@Injectable()
export class ImageService {
  constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {}

  async addImageToStorage(image: ImageDTO): Promise<Image> {
    const newImage = new this.imageModel(image);
    return newImage;
  }
}
