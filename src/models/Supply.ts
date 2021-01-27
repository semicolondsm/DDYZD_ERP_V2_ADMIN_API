import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Club, User } from ".";


@Entity()
export class Supply {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 45 })
    name: string;

    @Column()
    price: number;

    @Column()
    status: number;

    @Column({ type: "varchar", length: 45, nullable: true })
    message: string;

    @Column()
    count: number;

    @Column()
    link: string;

    @Column({ type: "varchar", length: 45, nullable: true })
    invoice: string;

    @ManyToOne(() => Club, club => club.supplies)
    @JoinColumn({ name: "club_id" })
    club: Club;

    @ManyToOne(() => User, user => user.supplies)
    @JoinColumn({ name: "user_id" })
    user: User;
}