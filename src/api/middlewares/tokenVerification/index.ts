import { config } from "../../../config";
import { Request, Response, NextFunction } from "express";
import verify from "./verify";
import { TokenExpiredError } from "jsonwebtoken";
import { expiredTokenError, invalidTokenError, notAccessTokenError } from "../../../error";

export default (req: Request, res: Response, next: NextFunction) => {
    const token = req.get("Authorization");
    try {
        res.locals.payload = verify({
            token,
            jwtSecret: config.jwtSecret
        });
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            return next(expiredTokenError);
        } else if (err === notAccessTokenError) {
            return next(err);
        }
        next(invalidTokenError);
    }
}