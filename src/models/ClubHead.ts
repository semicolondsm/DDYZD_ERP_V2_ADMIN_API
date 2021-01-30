import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Club, User } from ".";

@Entity("club_head")
export class ClubHead {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Club)
  @JoinColumn({ name: "club_id" })
  club: Club;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}