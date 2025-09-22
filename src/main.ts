import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map(err =>
          err.constraints ? Object.values(err.constraints).join(', ') : 'Erro desconhecido',
        );
        return new BadRequestException({
          statusCode: 400,
          message: 'Para criar um animal, preencha todos os campos: nome, especie, idade, genero, responsavel, telefoneResponsavel',
          errorCode: 'ANIMAL_NAO_CADASTRADO',
        });
      },
    }),
  );
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
