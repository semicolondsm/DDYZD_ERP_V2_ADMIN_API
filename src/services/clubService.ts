import ClubRepository from "../repositories/clubRepository";

export default class ClubService {
    public clubList = async () => {
        return ClubRepository.getQueryRepository().clubList();
    }
}