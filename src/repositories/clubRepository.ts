import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { Club, ClubHasTag, Tag } from "../models";

@EntityRepository(Club)
export default class ClubRepository extends Repository<Club> {

    static getQueryRepository() {
        return getCustomRepository(ClubRepository);
    }

    public async clubList() {
        return this.createQueryBuilder("club")
            .innerJoin("club.clubHasTags", "club_has_tag")
            .innerJoin("club_has_tag.tag", "tag")
            .select("club.club_name", "name")
            .addSelect("tag.title", "tag")
            .orderBy("club.club_name", "ASC")
            .getRawMany();
    }
}