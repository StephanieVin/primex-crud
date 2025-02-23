import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombres!: string;

  @Column()
  Apaterno!: string;

  @Column()
  Amaterno!: string;

  @Column()
  telefono!: string;

  @Column()
  direccion!: string;
}
