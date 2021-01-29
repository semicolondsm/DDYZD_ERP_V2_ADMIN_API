import SupplyRepository from "../repositories/supplyRepository";
import { supplyAlreadyCheckError, supplyInvoiceNullError, supplyListNullError, supplyNotFoundError } from "../error";

export default class SupplyService {
    public async supplyAccept (id: number) {
        await this.notFoundError(id);
        await this.checkError(id);

        await SupplyRepository.getQueryRepository().supplyAccept(id);
    }

    public async supplyDeny (id: number) {
        await this.notFoundError(id);
        await this.checkError(id);

        await SupplyRepository.getQueryRepository().supplyDeny(id);
    }

    public async supplyInvoice (id: number) {
        await this.notFoundError(id);

        const invoice = await SupplyRepository.getQueryRepository().findInvoiceById(id);
        if(!invoice.invoice) throw supplyInvoiceNullError;
        return invoice;
    }

    public async supplyList (state: number) {
        const list = await SupplyRepository.getQueryRepository().findSupplyAllByState(state);
        if(list.length === 0) throw supplyListNullError;
        return list;
    }

    private async notFoundError (id: number) {
        if(!await SupplyRepository.getQueryRepository().findSupplyById(id)) {
            throw supplyNotFoundError;
        }
    }

    private async checkError (id: number) {
        if(!await SupplyRepository.getQueryRepository().findSupplyByStatus(id, 2)) {
            throw supplyAlreadyCheckError;
        }
    }
}