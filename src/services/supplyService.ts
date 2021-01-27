import SupplyRepository from "../repositories/supplyRepository";
import { supplyAlreadyCheckError, supplyNotFoundError } from "../error";

export default class SupplyService {

    public async supplyAccept (supply_id: number) {
        if(!await SupplyRepository.getQueryRepository().findSupplyById(supply_id)) {
            throw supplyNotFoundError;
        }

        if(!await SupplyRepository.getQueryRepository().findSupplyByStatus(supply_id, 2)) {
            throw supplyAlreadyCheckError;
        }

        await SupplyRepository.getQueryRepository().supplyAccept(supply_id);
    }
}