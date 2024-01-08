import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    try {
      await this.categoryRepository.save(category);
      return category;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(term: string) {
    let category: Category;
    if (!isNaN(+term)) {
      category = await this.categoryRepository.findOneBy({ id: +term });
    } else {
      category = await this.categoryRepository.findOneBy({
        name: term.toLowerCase(),
      });
    }

    if (!category) throw new NotFoundException(`Category ${term} not found`);

    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    if (Object.keys(updateCategoryDto).length === 0) {
      return {
        statusCode: 200,
        message: 'No changes made',
      };
    }
    try {
      const category = await this.categoryRepository.update(
        id,
        updateCategoryDto,
      );

      if (category.affected === 0)
        return new NotFoundException(`Category ${id} not found`);

      return {
        statusCode: 200,
        message: 'Changes made successfully',
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const category = await this.categoryRepository.delete(id);

      if (category.affected === 0)
        return new NotFoundException(`Category ${id} not found`);

      return { statusCode: 200, message: 'Category successfully removed' };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.code === '23503') throw new BadRequestException(error.detail);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
