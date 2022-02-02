import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {ProductEntityRepository} from "../repositories/product.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TestResolver} from "../resolve/test.graphql";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'test',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'test',
          noAck: false,
          queueOptions: {
            durable: true
          },
        },
      },
    ]),
    TypeOrmModule.forFeature([ProductEntityRepository], 'db2'),
    TestResolver
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
