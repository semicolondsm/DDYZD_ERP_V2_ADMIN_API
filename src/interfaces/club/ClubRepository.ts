import { DeleteResult } from "typeorm";
import { Club } from "../../models";

export default interface ClubRepository {
    clubList(): Promise<Club[]>;
    setBudget(id: number, budget: number): Promise<void>;
    findAllClubSupplyList(id: number, state: number): Promise<Club[]>;
    findClubByName(name: string): Promise<Club>;
    newClub(name: string): Promise<Club>;
    deleteClub(id: number): Promise<DeleteResult>;
}