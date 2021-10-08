import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerDuplexStream } from '@grpc/grpc-js';

@Controller()
export class AppController {
  @GrpcMethod('EmailService', 'sendEmail')
  sendEmail(
    data: { email: string },
    metadata: Metadata,
    call: ServerDuplexStream<any, any>,
  ) {
    const serverMetadata = new Metadata();

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return {
      status: 'success',
      email: data.email,
    };
  }
}
