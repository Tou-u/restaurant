import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { Food } from './entities/food.entity';
import { Category } from 'src/categories/entities/category.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [FoodsController],
  providers: [FoodsService],
  imports: [TypeOrmModule.forFeature([Food, Category]), AuthModule],
  exports: [FoodsService],
})
export class FoodsModule {}
