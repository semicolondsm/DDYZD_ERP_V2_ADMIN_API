import SupplyRepository from "../repositories/supplyRepository";
import { supplyAlreadyCheckError, supplyNotFoundError } from "../error";

export default class SupplyService {
    public async supplyAccept (id: number) {
        if(!await SupplyRepository.getQueryRepository().findSupplyById(id)) {
            throw supplyNotFoundError;
        }

        if(!await SupplyRepository.getQueryRepository().findSupplyByStatus(id, 2)) {
            throw supplyAlreadyCheckError;
        }

        await SupplyRepository.getQueryRepository().supplyAccept(id);
    }

    public async supplyDeny (id: number) {
        if(!await SupplyRepository.getQueryRepository().findSupplyById(id)) {
            throw supplyNotFoundError;
        }

        if(!await SupplyRepository.getQueryRepository().findSupplyByStatus(id, 2)) {
            throw supplyAlreadyCheckError;
        }

        await SupplyRepository.getQueryRepository().supplyDeny(id);
    }
}