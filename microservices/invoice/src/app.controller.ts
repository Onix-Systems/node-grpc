import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerDuplexStream } from '@grpc/grpc-js';

@Controller()
export class AppController {
  @GrpcMethod('InvoiceService', 'createInvoice')
  createInvoice(
    data: undefined,
    metadata: Metadata,
    call: ServerDuplexStream<any, any>,
  ) {
    const serverMetadata = new Metadata();

    serverMetadata.add('Set-Cookie', 'yummy_cookie=choco');
    call.sendMetadata(serverMetadata);

    return {
      status: 'invoice created',
    };
  }
}
