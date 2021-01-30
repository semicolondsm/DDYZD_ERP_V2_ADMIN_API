import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClubHasTag, Supply } from ".";

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

    @Column({ default: "", nullable: true })
    description?: string;

    @Column({ default: "default", nullable: true })
    banner_image?: string;

    @Column({ default: "default", nullable: true })
    profile_image?: string;

    @Column({ default: "default", nullable: true })
    hongbo_image?: string;

    @OneToMany(() => ClubHasTag, clubHasTag => clubHasTag.club, { onDelete: "CASCADE" })
    clubHasTags: ClubHasTag[];

    @OneToMany(() => Supply, supply => supply.club, { onDelete: "CASCADE" })
    supplies: Supply[];
}