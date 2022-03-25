import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const user = configService.get('RABBITMQ_USER');
  const password = configService.get('RABBITMQ_PASSWORD');
  const host = configService.get('RABBITMQ_HOST');
  const queueName = configService.get('RABBITMQ_QUEUE_NAME');

  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@${host}`],
      queue: queueName,
      // noAck: false,
      queueOptions: {
        // Queues in RabbitMQ can be durable or transient. The metadata of a durable queue is stored on the disk. If the queue is not durable, it is deleted during boot and would not survive a restart. It would delete not-consumed messages.
        durable: true,
      },
    },
  });

  app.startAllMicroservices();
}
bootstrap();
