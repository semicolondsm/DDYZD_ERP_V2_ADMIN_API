import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { ClubRepository } from "../interfaces";
import { Club } from "../models";

@EntityRepository(Club)
export default class ClubRepositoryImpl extends Repository<Club> implements ClubRepository {

    static getQueryRepository() {
        return getCustomRepository(ClubRepositoryImpl);
    }

    public async clubList(): Promise<Club[]> {
        return this.createQueryBuilder("club")
            .innerJoin("club.clubHasTags", "club_has_tag")
            .innerJoin("club_has_tag.tag", "tag")
            .select("club.club_name", "name")
            .addSelect("tag.title", "tag")
            .orderBy("club.club_name", "ASC")
            .getRawMany();
    }

    public async setBudget(id: number, budget: number): Promise<void> {
        await this.update(id, { total_budget: budget });
    }
}