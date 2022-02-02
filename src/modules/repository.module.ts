import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductEntityRepository} from "../repositories/product.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntityRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class RepositoryModule {}
