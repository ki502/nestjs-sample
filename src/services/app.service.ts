import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy, RmqRecordBuilder} from "@nestjs/microservices";
import {ProductEntityRepository} from "../repositories/product.repository";
import {ProductEntity} from "../entities/product";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AppService {

  constructor(
              @Inject('test') private client: ClientProxy,
              @InjectRepository(ProductEntity, 'db2') private readonly productEntityRepository : ProductEntityRepository,
  ) {
  }

  async getHello(): Promise<string> {
    const message = 'test123';
    const record = new RmqRecordBuilder(message)
        .setOptions({
          headers: {
            ['x-version']: '1.0.0',
          },
          priority: 0,
        })
        .build();

    const list = await this.productEntityRepository.getAll();

    console.log(list);

    this.client.send('test1', record).subscribe();
    return 'Hello World!';
  }
}
