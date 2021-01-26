import ClubRepository from "../repositories/clubRepository";

export default class ClubService {
    public clubList = async () => {
        return ClubRepository.getQueryRepository().clubList();
    }

    public setBudget = async (club_id: number, budget: number) => {
        return ClubRepository.getQueryRepository().setBudget(club_id, budget);
    }
}