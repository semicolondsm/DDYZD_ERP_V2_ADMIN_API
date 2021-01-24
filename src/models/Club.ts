import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClubHasTag } from "./ClubHasTag";

@Entity()
export class Club {
    @PrimaryGeneratedColumn({ name: "club_id" })
    club_id: number;

    @Column({ type: "varchar", length: 45 })
    club_name: string;

    @Column({ default: 0 })
    total_budget: number;

    @Column({ default: 0 })
    current_budget: number;

    @Column({ type: "datetime", nullable: true })
    start_at?: Date;

    @Column({ type: "datetime", nullable: true })
    close_at?: Date;

    @Column({ default: "", nullable: true  })
    description: string;

    @Column()
    banner_image: string;

    @Column()
    profile_image: string;

    @Column({ nullable: true })
    hongbo_image: string;

    @OneToMany(() => ClubHasTag, clubHasTag => clubHasTag.club)
    clubHasTags: ClubHasTag[];
}