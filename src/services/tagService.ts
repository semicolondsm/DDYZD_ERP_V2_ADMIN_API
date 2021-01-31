import { getRepository } from "typeorm";
import { clubNotFoundError } from "../error";
import { Tag } from "../models";
import { ClubHasTagRepositoryImpl, ClubRepositoryImpl } from "../repositories";

export default class TagService {
    public createClub = async (id: number, tags: number[]) => {
        await this.clubNotFoundError(id);

        const tagRepository = getRepository(Tag);
        const club = await ClubRepositoryImpl.getQueryRepository().findOne(id);
        
        tags.forEach(async value => {
            const tag = await tagRepository.findOne(value);
            await ClubHasTagRepositoryImpl.getQueryRepository().tagExistError(club, tag);

            await ClubHasTagRepositoryImpl.getQueryRepository().createTag(club, tag);
        });
    }

    private async clubNotFoundError(id: number) {
        if(!await ClubRepositoryImpl.getQueryRepository().findOne(id)){
            throw clubNotFoundError;
        }
    }
}