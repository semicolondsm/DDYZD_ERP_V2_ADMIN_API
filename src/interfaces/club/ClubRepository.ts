import { Club } from "../../models";

export default interface SupplyRepository {
    clubList(): Promise<Club[]>;
    setBudget(id: number, budget: number): Promise<void>;
}