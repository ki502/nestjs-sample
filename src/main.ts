import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {MainModule} from "./modules/main.module";

async function bootstrap() {
  // API 설정
  const app = await NestFactory.create(MainModule);

  //RabbitMQ 설정
  const rabbitMq = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'test',
      noAck: false,
      queueOptions: {
        durable: true
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}

bootstrap();
