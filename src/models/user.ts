import bcrypt from 'bcrypt';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert
} from 'typeorm';
import jwt from 'jsonwebtoken';

export enum UserRole {
  Admin = 'Admin',
  Regular = 'Regular'
}

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ unique: true })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  public password: string;

  @Column({
    type: 'enum',
    enum:  UserRole,
    default: UserRole.Regular
  })
  public role: string;

  public constructor(user?: User) {
    super();

    if (user) {
      this.email = user.email;
      this.password = user.password;
    }
  }

  @BeforeInsert()
  public async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  public get token() {
    return jwt.sign({
      id: this.id,
      role: this.role
    }, process.env.JWT_KEY);
  }
}
