import { ClubHeadRepositoryImpl, ClubRepositoryImpl, UserRepositoryImpl } from "../repositories";
import { clubNameExistError, clubNotFoundError, clubSupplyListNullError, userNotFoundError } from "../error";

export default class ClubService {
    public clubList = async () => {
        return ClubRepositoryImpl.getQueryRepository().clubList();
    }

    public setBudget = async (id: number, budget: number) => {
        await this.notFoundError(id);

        await ClubRepositoryImpl.getQueryRepository().setBudget(id, budget);
    }

    public clubSupplyList = async (id: number, state: number) => {
        await this.notFoundError(id);

        const list = await ClubRepositoryImpl.getQueryRepository().findAllClubSupplyList(id, state);
        if(list.length === 0) throw clubSupplyListNullError;
        
        return list;
    }

    public newClub = async (name: string, gcn: number) => {
        const user = await UserRepositoryImpl.getQueryRepository().findUserByGcn(gcn);

        if(!user) {
            throw userNotFoundError;
        }
        if(await ClubRepositoryImpl.getQueryRepository().findClubByName(name)) {
            throw clubNameExistError;
        }

        const club = await ClubRepositoryImpl.getQueryRepository().newClub(name);
        await ClubHeadRepositoryImpl.getQueryRepository().newClubHead(club, user);
    }

    private async notFoundError(id: number) {
        if(!await ClubRepositoryImpl.getQueryRepository().findOne(id)) {
            throw clubNotFoundError;
        }
    }
}