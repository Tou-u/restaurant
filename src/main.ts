import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Restaurant RestFul API')
    .setDescription(
      `Endpoints of Restaurant API\n
      How to start?
      \n1. Go to [login endpoint](#/Auth/AuthController_loginUser) and get your token
      \n2. Add the token in the Authorize button
      `,
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document, {
    swaggerOptions: { defaultModelExpandDepth: 3, defaultModelsExpandDepth: 3 },
    customSiteTitle: 'Restaurant API Doc',
  });

  await app.listen(process.env.PORT, '0.0.0.0');
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
