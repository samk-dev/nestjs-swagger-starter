import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const swaggerOptions = new DocumentBuilder()
    .setVersion(process.env.APP_VERSION)
    .build();

  const swaggerCustomOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: `${process.env.APP_NAME} API Documentation V ${process.env.APP_VERSION}`,
    customCss:
      ".topbar-wrapper img {content:url('../assets/img/logo-full.svg'); width:85px; height:auto;} .swagger-ui .info {margin: 20px 0 0 0}",
    customfavIcon: '../assets/img/logo.svg',
  };

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/documentation', app, swaggerDocument, swaggerCustomOptions);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
