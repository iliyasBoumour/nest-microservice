import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'emails',
      protoPath: join(__dirname, 'email', 'emails.proto'),
      // this gRPC server can be accessed by the provided URL.
      url: configService.get('GRPC_CONNECTION_URL'),
    },
  });

  app.startAllMicroservices();
}
bootstrap();
