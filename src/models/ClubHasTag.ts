import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club, Tag } from ".";

@Entity("club_has_tag")
export class ClubHasTag {
  @PrimaryGeneratedColumn()
  clubtag_id: number;

  @ManyToOne(() => Club, club => club.clubHasTags)
  @JoinColumn({ name: "club_id" })
  club: Club;

  @ManyToOne(() => Tag, tag => tag.clubHasTags)
  @JoinColumn({ name: "tag_id" })
  tag: Tag;
}