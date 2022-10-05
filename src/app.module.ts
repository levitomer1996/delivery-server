import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { BusinessModule } from './business/business.module';
import { UiModule } from './ui/ui.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost:27017'), ProductModule, BusinessModule, UiModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
