import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entities/category.entity';
import { Food } from 'src/foods/entities/food.entity';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';
import { FoodsService } from 'src/foods/foods.service';
import { User } from 'src/auth/entities/auth.entity';
import { hashSync } from 'bcrypt';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,

    private readonly foodsService: FoodsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertCategories();
    await this.insertFoods();
    await this.insertUsers();

    return {
      message: 'Seed executed',
    };
  }

  private async deleteTables() {
    await this.foodRepository.delete({});
    await this.categoryRepository.delete({});
    await this.userRepository.delete({});
  }

  private async insertCategories() {
    const seedCategories = initialData.categories;
    const categories: Category[] = [];

    seedCategories.forEach((category) => {
      categories.push(this.categoryRepository.create(category));
    });

    await this.categoryRepository.save(categories);
  }

  private async insertFoods() {
    const seedFoods = initialData.foods;

    seedFoods.map(async (food) => {
      await this.foodsService.create(food);
    });
  }

  private async insertUsers() {
    const seedUsers = initialData.users;
    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(
        this.userRepository.create({
          ...user,
          password: hashSync(user.password, 10),
        }),
      );
    });

    await this.userRepository.save(users);
  }
}
