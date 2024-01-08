import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateFoodDto, UpdateFoodDto, FindFoodDto } from './dto';
import { Food } from './entities/food.entity';
import { Category } from 'src/categories/entities/category.entity';

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
      name: createFoodDto.category,
    });

    if (!checkCategory)
      throw new NotFoundException(
        `The category ${createFoodDto.category} not exist`,
      );

    const food = this.foodRepository.create({
      ...createFoodDto,
      category: checkCategory,
    });
    try {
      await this.foodRepository.save(food);
      delete food.category.id;
      return food;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(findFoodDto: FindFoodDto) {
    const { name = '', category = null } = findFoodDto;

    const foods = await this.foodRepository.find({
      relations: ['category'],
      select: { category: { name: true } },
      where: {
        name: Like(`%${name.toLowerCase()}%`),
        category: { name: category?.toLowerCase() },
      },
    });
    return foods;
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    console.log(updateFoodDto);
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    // TODO: Handle server exception
  }
}
