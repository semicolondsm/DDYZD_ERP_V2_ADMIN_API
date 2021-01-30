import { EntityRepository, getCustomRepository, Repository } from "typeorm";
import { UserRepository } from "../interfaces";
import { User } from "../models";

@EntityRepository(User)
export default class UserRepositoryImpl extends Repository<User> implements UserRepository {

    static getQueryRepository() {
        return getCustomRepository(UserRepositoryImpl);
    }
    
    public async findUserByGcn(gcn: number): Promise<User> {
        return this.findOne({ where: { gcn } });
    }
}