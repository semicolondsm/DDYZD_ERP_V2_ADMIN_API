import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { SupplyRepository } from "../interfaces";
import { Supply } from "../models";

@EntityRepository(Supply)
export default class SupplyRepositoryImpl extends Repository<Supply> implements SupplyRepository {

    static getQueryRepository() {
        return getCustomRepository(SupplyRepositoryImpl);
    }

    public async findSupplyById(id: number): Promise<Supply> {
        return this.findOne({ id });
    }

    public async findSupplyByStatus(id: number, status: number): Promise<Supply> {
        return this.findOne({ id, status });
    }

    public async supplyAccept(id: number): Promise<void> {
        await this.update({ id }, { status: 1 });
    }
}