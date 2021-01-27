import { Supply } from "../../models";

export default interface SupplyRepository {
    supplyAccept(id: number): Promise<void>;
    findSupplyById(id: number): Promise<Supply>;
    findSupplyByStatus(id:number, status: number): Promise<Supply>;
}