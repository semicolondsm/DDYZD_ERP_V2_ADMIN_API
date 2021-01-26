import { Admin } from "../models";
import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { AdminRepository } from "../interfaces";

@EntityRepository(Admin)
export default class AdminRepositoryImpl extends Repository<Admin> implements AdminRepository {

    static getQueryRepository() {
        return getCustomRepository(AdminRepositoryImpl);
    }

    public async findOneById(id: string): Promise<Admin> {
        return this.findOne({ id });
    }
}