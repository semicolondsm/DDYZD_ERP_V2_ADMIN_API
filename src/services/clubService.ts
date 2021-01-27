import ClubRepository from "../repositories/clubRepository";
import { clubNotFoundError } from "../error";

export default class ClubService {
    public clubList = async () => {
        return ClubRepository.getQueryRepository().clubList();
    }

    public setBudget = async (id: number, budget: number) => {
        if(!await ClubRepository.getQueryRepository().findOne(id)) {
            throw clubNotFoundError;
        }

        await ClubRepository.getQueryRepository().setBudget(id, budget);
    }
}