import { NextFunction, Request, Response } from "express";

export default (
    handler: (req: Request, res: Response, next: NextFunction) => void
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            next(err);
        }
    }
}