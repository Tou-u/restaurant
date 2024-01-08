import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @ApiOperation({ summary: 'Seed database with foods, categories and users' })
  @ApiResponse({ description: 'Mockup data generated' })
  executeSeed() {
    return this.seedService.runSeed();
  }
}
