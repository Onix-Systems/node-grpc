import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const emailGrpcClient: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50001',
    package: 'email',
    protoPath: join(__dirname, '../../../proto/email/email.proto'),
  },
};
