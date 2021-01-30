import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { ClubHeadRepository } from "../interfaces";
import { Club, ClubHead, User } from "../models";

@EntityRepository(ClubHead)
export default class ClubHeadRepositoryImpl extends Repository<ClubHead> implements ClubHeadRepository {

    static getQueryRepository() {
        return getCustomRepository(ClubHeadRepositoryImpl);
    }

    public async newClubHead(club: Club, user: User): Promise<ClubHead> {
        const clubHead = this.create({ club, user });
        return this.save(clubHead);
    }
}