import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FoodsService } from './foods.service';
import { CreateFoodDto, UpdateFoodDto } from './dto';
import { FindFoodDto } from './dto/find-food.dto';

@ApiTags('Foods')
@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'The category not exist' })
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Foods found.',
  })
  findAll(@Query() findFoodDto: FindFoodDto) {
    return this.foodsService.findAll(findFoodDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodsService.remove(+id);
  }
}
