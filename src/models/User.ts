import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert
} from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

import Encryption from '../utils/Encryption';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public username: string;

  @IsString()
  @IsNotEmpty()
  @Column({ select: false })
  public password: string;

  @BeforeInsert()
  public hashPassword() {
    this.password = Encryption.Instance.encrypt(this.password);
  }
}
