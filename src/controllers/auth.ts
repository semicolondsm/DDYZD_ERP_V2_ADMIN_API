import { Request, Response, NextFunction } from "express";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { expiredTokenError, invalidTokenError } from "../error";
import { Admin } from "../interfaces";
import AuthService from "../services/authService";

export default class AuthController {
    private authService = new AuthService();

    public login = async (req: Request, res: Response, next: NextFunction) => {
        const admin: Admin = req.body;
        const tokens = await this.authService.login(admin);
        return res.status(200).json(tokens);
    };

    public refresh = async (req: Request, res: Response, next: NextFunction) => {
        const refresh_token = req.get("x-refresh-token");
        try {
            const accessToken = this.authService.tokenRefresh({
                refresh_token
            });
            res.status(200).json(accessToken);
        } catch (err) {
            if (err === TokenExpiredError) {
                return next(expiredTokenError);
            } else if (err === JsonWebTokenError) {
                return next(invalidTokenError);
            }
            next(err);
        }
    }
}