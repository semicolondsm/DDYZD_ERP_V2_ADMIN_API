import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Supply } from ".";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ type: "varchar", length: 45 })
    name: string;

    @Column({ type: "varchar", length: 5 })
    gcn: string;

    @Column({ nullable: true })
    image_path: string;

    @Column({ nullable: true })
    github_url: string;

    @Column({ type: "varchar", length: 50 })
    email: string;

    @Column({ type: "varchar", length: 4096, nullable: true })
    device_token: string;

    @OneToMany(() => Supply, supply => supply.user)
    supplies: Supply[];
}