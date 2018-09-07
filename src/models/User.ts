import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert
} from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";
import Encryption from "../utils/Encryption";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  username: string;

  @IsString()
  @IsNotEmpty()
  @Column({ select: false })
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = Encryption.Instance.encrypt(this.password);
  }
}
