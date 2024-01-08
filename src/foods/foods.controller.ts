import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FoodsService } from './foods.service';
import { CreateFoodDto, UpdateFoodDto, FindFoodDto } from './dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Foods')
@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  @Auth(ValidRoles.admin)
  @ApiOperation({ summary: 'Create a new food' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'The category not exist' })
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all foods and filter by name and/or category' })
  @ApiResponse({
    status: 200,
    description: 'Foods found',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  findAll(@Query() findFoodDto: FindFoodDto) {
    return this.foodsService.findAll(findFoodDto);
  }

  @Get(':term')
  @ApiOperation({ summary: 'Find food by id or name' })
  @ApiResponse({
    status: 200,
    description: 'Food found',
  })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiParam({ name: 'term', description: 'Search by id or name' })
  findOne(@Param('term') term: string) {
    return this.foodsService.findOne(term);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin)
  @ApiOperation({ summary: 'Update the information of a food' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Food updated',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiParam({ name: 'id', description: 'Update food by id' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateFoodDto: UpdateFoodDto,
  ) {
    return this.foodsService.update(id, updateFoodDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  @ApiOperation({ summary: 'Delete permanent a food' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Food removed',
  })
  @ApiResponse({ status: 404, description: 'Food not found' })
  @ApiParam({ name: 'id', description: 'Delete food by id' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.foodsService.remove(id);
  }
}
