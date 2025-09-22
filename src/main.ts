import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
 
  app.useGlobalPipes(new ValidationPipe());
 
const config = new DocumentBuilder()
.setTitle('API Cliníca Veterinária Teste Técnico')
.setDescription('API REST para gerenciamento de pacientes animais da clínica veterinária da Dra. Ana')
.setVersion('1.0')
    .addTag('animais')
    .build();

    const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-clinica', app, document);

   await app.listen(3000, '0.0.0.0');
   console.log('API funcionando na porta 3000');
  console.log('Swagger disponível em: http://localhost:3000/api-clinica');
}
bootstrap();
