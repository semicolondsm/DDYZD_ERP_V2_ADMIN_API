import { Club, ClubHead, User } from "../../models";

export default interface ClubHeadRepository {
    newClubHead(club: Club, user: User): Promise<ClubHead>;
}