import { DeleteResult, EntityRepository, getCustomRepository, Repository } from "typeorm";
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

    public async findAllClubSupplyList(id: number, state: number): Promise<Club[]> {
        return this.createQueryBuilder("club")
            .innerJoin("club.supplies", "supply")
            .innerJoin("supply.user", "user")
            .where("club.club_id = :club_id AND status = :status", { club_id: id, status: state })
            .select("club.club_name", "club")
            .addSelect("user.name", "applicant")
            .addSelect("supply.id", "id")
            .addSelect("supply.name", "name")
            .addSelect(["price", "status", "message", "count", "link"])
            .getRawMany();
    }

    public async findClubByName(name: string): Promise<Club> {
        return this.findOne({ where: { club_name: name } });
    }

    public async newClub(name: string): Promise<Club> {
        const user = this.create({
            club_name: name
        });
        return this.save(user);
    }

    public async deleteClub(id: number): Promise<DeleteResult> {
        return this.delete(id);
    }
}