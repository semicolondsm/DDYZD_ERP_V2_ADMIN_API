import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryColumn({ length: 16 })
    id: string;

    @Column({ length: 80 })
    password: string;
}