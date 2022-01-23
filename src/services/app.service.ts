import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy, RmqRecordBuilder} from "@nestjs/microservices";

@Injectable()
export class AppService {

  constructor(@Inject('test') private client: ClientProxy) {
  }

  getHello(): string {
    const message = 'test123';
    const record = new RmqRecordBuilder(message)
        .setOptions({
          headers: {
            ['x-version']: '1.0.0',
          },
          priority: 0,
        })
        .build();

    this.client.send('test1', record).subscribe();
    return 'Hello World!';
  }
}
