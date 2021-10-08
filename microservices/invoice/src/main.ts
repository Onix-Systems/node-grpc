import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50002',
      protoPath: join(__dirname, '../../../proto/invoice/invoice.proto'),
      package: 'invoice',
    },
  });

  try {
    await app.listen();
    console.log('Microservice INVOICE is listening');
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
