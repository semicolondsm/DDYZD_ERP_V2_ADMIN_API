import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { tagExistError } from "../error";
import { ClubHasTagRepository } from "../interfaces";
import { Club, ClubHasTag, Tag } from "../models";

@EntityRepository(ClubHasTag)
export default class ClubHasTagRepositoryImpl extends Repository<ClubHasTag> implements ClubHasTagRepository {

    static getQueryRepository() {
        return getCustomRepository(ClubHasTagRepositoryImpl);
    }

    public async createTag(club: Club, tag: Tag): Promise<void> {

        const newTag = this.create({
            club: club,
            tag: tag
        });
        await this.save(newTag);
    }

    public async tagExistError(club: Club, tag: Tag) {
        if(await this.findOne({ where: { club, tag } })) {
            throw tagExistError;
        }
    }
}