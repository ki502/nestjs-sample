import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user";
import {ProductEntity} from "../entities/product";
import {AppModule} from "./app.module";
import {GraphQLModule} from "@nestjs/graphql";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'db1',
      type: 'mysql',
      host: '127.0.0.1',
      port: 33060,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'db2',
      type: 'mysql',
      host: '127.0.0.1',
      port: 33070,
      username: 'root',
      password: 'rlawlsdn02',
      database: 'test2',
      entities: [ProductEntity],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      typePaths: ["./src/graphql/*.graphql"],
    }),
    AppModule
  ],
})
export class MainModule {}