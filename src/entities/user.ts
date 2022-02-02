import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('user')
export class User {
  @PrimaryColumn({
    name: 'user_id'
  })
  userId: number;

  @Column({
    name: "name"
  })
  name: string;
}