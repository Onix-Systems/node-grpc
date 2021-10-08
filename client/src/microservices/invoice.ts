import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const invoiceGrpcClient: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50002',
    package: 'invoice',
    protoPath: join(__dirname, '../../../proto/invoice/invoice.proto'),
  },
};
