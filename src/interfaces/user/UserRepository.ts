import { User } from "../../models";

export default interface UserRepository {
    findUserByGcn(gcn: number): Promise<User>;
}