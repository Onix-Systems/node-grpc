import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50001',
      protoPath: join(__dirname, '/../../../proto/email/email.proto'),
      package: 'email',
    },
  });

  try {
    await app.listen();
    console.log('Microservice EMAIL is listening');
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
