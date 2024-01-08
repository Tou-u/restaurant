import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Category } from 'src/categories/entities/category.entity';
import { Food } from 'src/foods/entities/food.entity';
import { FoodsModule } from 'src/foods/foods.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    TypeOrmModule.forFeature([Category, Food]),
    FoodsModule,
    AuthModule,
  ],
})
export class SeedModule {}
