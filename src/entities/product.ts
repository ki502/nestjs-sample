import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('product')
export class ProductEntity {
  @PrimaryColumn({
    name: "id"
  })
  productId: number;

  @Column({
    name: "name"
  })
  name: string;
}