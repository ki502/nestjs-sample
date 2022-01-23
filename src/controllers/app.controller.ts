import {Controller, Get} from '@nestjs/common';
import {AppService} from '../services/app.service';
import {Ctx, MessagePattern, Payload, RmqContext, Transport} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('test1', Transport.RMQ)
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()}, ${data}`);

    context.getChannelRef().ack(context.getMessage());
  }
}