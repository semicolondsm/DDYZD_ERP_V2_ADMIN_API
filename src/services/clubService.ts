import ClubRepository from "../repositories/clubRepository";
import { clubNotFoundError, clubSupplyListNullError } from "../error";

export default class ClubService {
    public clubList = async () => {
        return ClubRepository.getQueryRepository().clubList();
    }

    public setBudget = async (id: number, budget: number) => {
        await this.notFoundError(id);

        await ClubRepository.getQueryRepository().setBudget(id, budget);
    }

    public clubSupplyList = async (id: number, state: number) => {
        await this.notFoundError(id);

        const list = await ClubRepository.getQueryRepository().findAllClubSupplyList(id, state);
        if(list.length === 0) throw clubSupplyListNullError;
        
        return list;
    }

    private async notFoundError(id: number) {
        if(!await ClubRepository.getQueryRepository().findOne(id)) {
            throw clubNotFoundError;
        }
    }
}