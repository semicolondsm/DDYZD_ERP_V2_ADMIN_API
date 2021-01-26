import { Admin } from "../../models";

export default interface AdminRepository {
    findOneById(id: string): Promise<Admin>;
}