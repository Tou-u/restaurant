import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateFoodDto, UpdateFoodDto, FindFoodDto } from './dto';
import { Food } from './entities/food.entity';
import { Category } from 'src/categories/entities/category.entity';
import { isUUID } from 'class-validator';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createFoodDto: CreateFoodDto) {
    const checkCategory = await this.categoryRepository.findOneBy({
      name: createFoodDto.category.toLowerCase(),
    });

    if (!checkCategory)
      throw new NotFoundException(
        `The category ${createFoodDto.category} not exist`,
      );

    try {
      const food = this.foodRepository.create({
        ...createFoodDto,
        category: checkCategory,
      });
      await this.foodRepository.insert(food);

      return {
        statusCode: 200,
        message: 'Product stored successfully',
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(findFoodDto: FindFoodDto) {
    const { name = '', category = '' } = findFoodDto;

    let formatCategory = category;

    if (formatCategory.length === 0) {
      formatCategory = undefined;
    }

    const foods = await this.foodRepository.find({
      where: {
        name: Like(`%${name.toLowerCase()}%`),
        category: { name: formatCategory?.toLowerCase() },
      },
    });
    return foods;
  }

  async findOne(term: string) {
    let food: Food;

    if (isUUID(term, '4')) {
      food = await this.foodRepository.findOneBy({ id: term });
    } else {
      food = await this.foodRepository.findOneBy({ name: term.toLowerCase() });
    }

    if (!food) throw new NotFoundException(`Food ${term} not found`);

    return food;
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    const { category, ...data } = updateFoodDto;
    let checkCategory: Category;

    if (Object.keys(data).length === 0 && !category) {
      return {
        statusCode: 200,
        message: 'No changes made',
      };
    }

    try {
      if (category) {
        checkCategory = await this.categoryRepository.findOneBy({
          name: category,
        });

        if (!checkCategory) {
          return new NotFoundException(`Category ${category} not exist`);
        }
      }

      await this.foodRepository.update(id, {
        ...data,
        category: checkCategory,
      });

      return {
        statusCode: 200,
        message: 'Changes made successfully',
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    try {
      const food = await this.foodRepository.delete(id);

      if (food.affected === 0)
        return new NotFoundException(`Food ${id} not found`);

      return { statusCode: 200, message: 'Food successfully removed' };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
