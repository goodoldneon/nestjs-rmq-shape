import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://hip:hop@localhost:5672'],
      queue: 'test',
    },
  });

  await app.startAllMicroservicesAsync();

  await app.listen(3000);
}
bootstrap();
