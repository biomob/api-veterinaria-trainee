import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('API Veterinária')
    .setDescription('API para armazenar os animais cadastrados, as consultas agendadas e realizadas, e, para conseguir editar/deletar/buscar e cadastrar informações')
    .setVersion('1.0')
    .addTag('animais')
    .addTag('consultas')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
