import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ClubHasTag } from "./ClubHasTag";

@Entity() 
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 45 })
    title: string;

    @OneToMany(() => ClubHasTag, clubHasTag => clubHasTag.tag)
    clubHasTags: ClubHasTag[];
}