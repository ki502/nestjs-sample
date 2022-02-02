import {EntityRepository, Repository} from "typeorm";
import {ProductEntity} from "../entities/product";
import {InjectRepository} from "@nestjs/typeorm";

@EntityRepository(ProductEntity)
export class ProductEntityRepository extends Repository<ProductEntity> {
  async getAll () {
    return await this.createQueryBuilder('TA').select('TA.name').getMany();
  }
}