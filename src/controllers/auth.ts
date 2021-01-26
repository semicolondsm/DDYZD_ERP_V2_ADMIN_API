import { Request, Response, NextFunction } from "express";
import { Admin } from "../interfaces";
import AuthService from "../services/authService";

export default class AuthController {
    private authService = new AuthService();

    public login = async (req: Request, res: Response, next: NextFunction) => {
        const admin: Admin = req.body;
        const tokens = await this.authService.login(admin);
        return res.status(200).json(tokens);
    };
}