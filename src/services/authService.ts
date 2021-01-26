import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import { invalidLoginInformationError } from "../error";

import { Admin } from "../models";
import { AdminRepositoryImpl } from "../repositories";

export default class AuthService {
    public async login(admin: Admin): Promise<{ access_token: string; refresh_token: string }> {
        const adminRecord = await AdminRepositoryImpl.getQueryRepository().findOneById(admin.id);

        if(!adminRecord || AuthService.isInvalidPassword(adminRecord.password, admin.password)) {
            throw invalidLoginInformationError;
        }

        const access_token = this.generateToken({
            id: adminRecord.id,
            type: "access"
        });
        const refresh_token = this.generateToken({
            id: adminRecord.id,
            type: "refresh"
        });

        return { access_token, refresh_token };
    }

    private generateToken({ id, type }: { id: string; type: string }) {
        return jwt.sign({ id, type }, config.jwtSecret, {
            expiresIn: type === "access" ? "2h" : type === "refresh" ? "14d" : 0,
        });
    }

    private static isInvalidPassword(dbPassword: string, inputPassword: string): boolean {
        return !bcrypt.compareSync(inputPassword, dbPassword);
    }
}